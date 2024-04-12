"use client";

import { DialogTrigger } from "@radix-ui/react-dialog";
import {
  type HTMLAttributes,
  type Dispatch,
  type SetStateAction,
  type ReactNode,
} from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerOverlay,
  DrawerTitle,
  DrawerTrigger,
} from "~/components/ui/drawer";
import useMediaQuery from "~/lib/hooks/use-media-query";
import { cn } from "~/lib/utils";
type ShowModalFunction = (show: boolean) => void;
interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  showModal: boolean;
  description?: string;
  trigger?: ReactNode;
  setShowModal: Dispatch<SetStateAction<boolean>> | ShowModalFunction;
}
export default function Modal({
  children,
  showModal,
  trigger,
  title,
  description,
  setShowModal,
  ...props
}: ModalProps) {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer open={showModal} onOpenChange={setShowModal}>
        <DrawerOverlay className=" bg-transparent" />
        {trigger && <DrawerTrigger asChild>{trigger}</DrawerTrigger>}
        <DrawerContent className={cn(props.className, "p-4")}>
          <DrawerHeader>
            <DrawerTitle>{title}</DrawerTitle>
            <DrawerDescription>{description}</DrawerDescription>
          </DrawerHeader>
          {children}
        </DrawerContent>
      </Drawer>
    );
  }
  return (
    <Dialog open={showModal} onOpenChange={setShowModal}>
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent
        {...props}
        className={cn(props.className, "max-h-screen overflow-y-auto")}
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
