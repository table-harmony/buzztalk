"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

import { Message } from "./message";
import { CreateMessageForm } from "./create-message-form";

export function Chat() {
  const messages = useQuery(api.messages.getMessages);

  return (
    <div className="w-full overflow-x-auto relative">
      <div className="overflow-auto sm:h-[calc(100vh-300px)] flex">
        <div className="relative flex flex-col space-y-2 w-full p-2 h-[calc(100vh-400px)] sm:h-full">
          {messages?.map((message) => (
            <Message
              key={message._id}
              id={message._id}
              body={message.body}
              createdAt={message._creationTime}
              user={{
                name: message.user?.name,
                image: message.user?.image,
                clerkId: message.user?.clerkId,
              }}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        <CreateMessageForm />
      </div>
    </div>
  );
}
