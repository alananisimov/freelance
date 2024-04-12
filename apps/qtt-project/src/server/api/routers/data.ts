/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Data } from "@prisma/client";
import { z } from "zod";
import {
  adminProcedure,
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { Api, TelegramClient } from "telegram";
import { kv } from "@vercel/kv";
import { StringSession } from "telegram/sessions";
import { env } from "~/env";

export const dataRouter = createTRPCRouter({
  getAllData: publicProcedure.query(async ({ ctx }): Promise<Data | null> => {
    const data = await ctx.db.data.findFirst();
    return data ?? null;
  }),
  getTgPost: publicProcedure
    .input(z.object({ link: z.string().url() }))
    .query(async ({ input }): Promise<string> => {
      const inputLink = input.link;
      const cachedResult = await kv.get(inputLink);

      if (cachedResult) {
        return cachedResult as string;
      } else {
        const apiId = 20124197;
        const apiHash = env.API_HASH;
        const BOT_TOKEN = env.BOT_TOKEN;

        const client = new TelegramClient(new StringSession(), apiId, apiHash, {
          connectionRetries: 5,
        });

        await client.start({ botAuthToken: BOT_TOKEN });

        const match = inputLink.match(/https:\/\/t\.me\/(\w+)\/(\d+)/);

        if (match?.[1] && match[2]) {
          const channel = match[1];
          const id = parseInt(match[2]);

          const result = await client.invoke(
            new Api.channels.GetMessages({
              channel: channel,
              id: [id as any],
            }),
          );

          if ("messages" in result) {
            const messages: any = result.messages;
            await kv.set(inputLink, messages.at(0).message, { ex: 3600 });

            return messages.at(0).message;
          } else {
            return "Сообщение не найдено";
          }
        } else {
          return "Неверный формат ссылки";
        }
      }
    }),
  editData: adminProcedure
    .input(
      z.object({
        variant: z.string(),
        value: z.union([z.string(), z.number(), z.date()]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const { variant, value } = input;
      return ctx.db.data.updateMany({
        where: {},
        data: { [variant]: value },
      });
    }),
});
