"use server";

import { fetchMutation } from "convex/nextjs";
import { api } from "../../../../convex/_generated/api";

import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import Filter from "bad-words";

const filter = new Filter();

function getProfaneWord(text: string): string {
  const words = text.split(/\s+/);
  const profaneWord = words.filter((word) => filter.isProfane(word))[0];
  return profaneWord;
}

export async function createMessageAction({ message }: { message: string }) {
  const user = await currentUser();

  if (!user) throw new Error("Unauthorized");

  if (filter.isProfane(message)) {
    fetchMutation(api.messages.createMessage, {
      body: `🤐 I got BANNED for life for saying: ${filter.clean(getProfaneWord(message))}`,
      clerkId: user.id,
    });

    clerkClient().users.banUser(user.id);

    redirect("/banned");
  }

  await fetchMutation(api.messages.createMessage, {
    body: message,
    clerkId: user.id,
  });
}
