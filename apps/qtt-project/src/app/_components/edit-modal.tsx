"use client";
import { CalendarIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import Modal from "~/app/_components/responsive-dialog";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover";
import { cn } from "~/lib/utils";
import { format } from "date-fns";
import { Calendar } from "~/components/ui/calendar";
import { toast } from "sonner";
import { api } from "~/trpc/react";
import { useRouter } from "next/navigation";
import { Edit2Icon } from "lucide-react";
import { type Session } from "next-auth";

interface EditModalProps {
  column: string;
  session: Session | null;
  value: Date | number | string;
}

export default function EditModal({ column, session, value }: EditModalProps) {
  const [stringValue, setStringValue] = useState(
    value instanceof Date ? value.toISOString().slice(0, 10) : value.toString(),
  );
  const [date, setDate] = useState<Date>(() =>
    value instanceof Date ? value : new Date(),
  );
  const [intValue, setIntValue] = useState(parseFloat(value.toString()));
  const router = useRouter();
  const editMutation = api.data.editData.useMutation({
    onSuccess: () => {
      router.refresh();
      toast.success("Successfully edited");
      setShow(false);
    },
    onError(error) {
      toast.error(error.message);
    },
  });
  const [show, setShow] = useState(false);
  function SubmitChanges() {
    if (typeof value === "string") {
      if (stringValue.length > 100) {
        toast.error("String value is too long (maximum 100 symbols)");
        return;
      }
      if (stringValue.length < 1) {
        toast.error("String value is too short (minimum 1 symbol)");
      }
      editMutation.mutate({ variant: column, value: stringValue });
    } else if (value instanceof Date) {
      if (value < new Date()) {
        toast.error("Date must be more than today");
        return;
      }
      editMutation.mutate({ variant: column, value: date });
    } else if (typeof value === "number") {
      if (column === "ranger_value" && (value < 100 || value > 1500)) {
        toast.error("Slider`s value must be within 100 and 1500");
        return;
      }
      editMutation.mutate({ variant: column, value: intValue });
    } else {
      toast.error("No data provided");
    }
  }

  return (
    <Modal
      showModal={show}
      setShowModal={setShow}
      trigger={
        session?.user.isAdmin && (
          <Button className="mt-2 h-4 w-4 rounded-sm" size={"icon"}>
            <Edit2Icon className="h-3 w-3" />
          </Button>
        )
      }
      title={`Edit ${column}`}
    >
      <div className="grid w-full items-center gap-1.5">
        <Label htmlFor="data">{column}</Label>
        {value instanceof Date ? (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "mt-auto w-[240px] justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(v) => v && setDate(v)}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        ) : typeof value === "string" ? (
          <Input
            placeholder="Enter value"
            value={stringValue}
            onChange={(e) => setStringValue(e.target.value)}
          />
        ) : typeof value === "number" ? (
          <Input
            type="number"
            placeholder="Enter value"
            value={intValue}
            onChange={(e) => setIntValue(parseFloat(e.target.value))}
          />
        ) : (
          <span>No input available for this type of data</span>
        )}
        <Button type="button" className="mt-4 w-fit" onClick={SubmitChanges}>
          Submit changes
        </Button>
      </div>
    </Modal>
  );
}
