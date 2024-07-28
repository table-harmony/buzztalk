import { internalMutation, mutation, query } from "./_generated/server";

import { ConvexError, v } from "convex/values";
import { getCurrentUser } from "./users";

export const createMessage = mutation({
  args: {
    body: v.string(),
  },
  async handler(ctx, args) {
    const user = await getCurrentUser(ctx, {});

    if (!user) throw new ConvexError("User already exists");

    await ctx.db.insert("messages", {
      body: args.body,
      userId: user._id,
    });
  },
});

export const getMessages = query({
  async handler(ctx) {
    const messages = await ctx.db.query("messages").collect();

    return Promise.all(
      messages.map(async ({ userId, ...message }) => {
        const user = await ctx.db.get(userId);
        return { ...message, user };
      })
    );
  },
});

export const updateMessage = mutation({
  args: {
    messageId: v.id("messages"),
    body: v.string(),
  },
  async handler(ctx, args) {
    const currentUser = await getCurrentUser(ctx, {});

    if (!currentUser) throw new Error("Unauthorized");

    const message = await ctx.db.get(args.messageId);

    if (message?.userId !== currentUser._id) throw new Error("Unauthorized");

    await ctx.db.patch(message._id, {
      body: args.body,
    });
  },
});

export const deleteMessage = mutation({
  args: {
    messageId: v.id("messages"),
  },
  async handler(ctx, args) {
    await ctx.db.delete(args.messageId);
  },
});
