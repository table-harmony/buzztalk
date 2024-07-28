"use client";

import { api } from "../../../../convex/_generated/api";
import { useMutation } from "convex/react";

import { useState } from "react";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderButton } from "@/components/loader-button";
import { SendIcon } from "lucide-react";

const formSchema = z.object({
  message: z.string(),
});

export function CreateMessageForm() {
  const createMessage = useMutation(api.messages.createMessage);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  function onSubmit(values: z.infer<typeof formSchema>) {
    createMessage({
      body: values.message,
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
                  disabled={isLoading}
                  required
                />
              </FormControl>
            </FormItem>
          )}
        />
        <LoaderButton variant="outline" isLoading={isLoading}>
          <span className="sr-only">Send message</span>
          <SendIcon className="size-4" />
        </LoaderButton>
      </form>
    </Form>
  );
}
