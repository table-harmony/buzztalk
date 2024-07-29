"use client";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderButton } from "@/components/loader-button";
import { SendIcon } from "lucide-react";
import { createMessageAction } from "./actions";
import { useTransition } from "react";

const formSchema = z.object({
  message: z.string(),
});

export function CreateMessageForm() {
  const [pending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    startTransition(() => {
      createMessageAction(values);
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full gap-2 space-y-2"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel className="sr-only">Message</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  autoComplete="off"
                  placeholder="Message..."
                  disabled={pending}
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />
        <LoaderButton variant="outline" isLoading={pending}>
          <span className="sr-only">Send message</span>
          <SendIcon className="size-4" />
        </LoaderButton>
      </form>
    </Form>
  );
}
