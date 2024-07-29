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
import { cn } from "@/lib/utils";

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
    <div
      className={cn("flex gap-2 w-full", {
        "ml-auto flex-row-reverse": isOwner,
      })}
    >
      <Avatar className="size-6">
        <AvatarImage alt="profile" src={user.image} />
        <AvatarFallback className="text-xs">SC</AvatarFallback>
      </Avatar>
      <div
        className={cn(
          "max-w-[75%] rounded-lg px-3 py-2 text-sm",
          isOwner ? "bg-primary text-primary-foreground" : "bg-muted"
        )}
      >
        {body}
      </div>
    </div>
  );
}
