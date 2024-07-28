"use client";

import { useMutation } from "convex/react";
import { api } from "../../../../convex/_generated/api";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EllipsisIcon } from "lucide-react";

import { formatDistanceToNow } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSession } from "@clerk/nextjs";

interface User {
  clerkId?: string;
  name?: string;
  image?: string;
}

export function Message({
  id,
  body,
  createdAt,
  user,
}: {
  id: any;
  body: string;
  createdAt: number;
  user: User;
}) {
  const { session } = useSession();
  const isOwner = session?.user.id === user.clerkId;

  return (
    <div className={"flex gap-2 items-start"}>
      <Avatar className="size-6 mt-1">
        <AvatarImage alt="profile" src={user.image} />
        <AvatarFallback className="text-xs">SC</AvatarFallback>
      </Avatar>
      <div className={"flex flex-col gap-1"}>
        <div className="flex gap-2 items-center">
          <span className="text-xs">{user.name}</span>
          <span className="text-xs text-muted-foreground">
            {formatDistanceToNow(createdAt, { addSuffix: true })}
          </span>
          {isOwner && <Menu messageId={id} />}
        </div>
        <div className="text-sm whitespace-pre-line break-all">{body}</div>
      </div>
    </div>
  );
}

function Menu({ messageId }: { messageId: any }) {
  const deleteMessage = useMutation(api.messages.deleteMessage);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="size-fit p-1"
          aria-label="menu"
        >
          <EllipsisIcon className="size-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => {
            deleteMessage({ messageId });
          }}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
