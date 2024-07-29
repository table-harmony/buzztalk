"use client";

import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import Image from "next/image";

export default function Banned() {
  return (
    <div className="container flex flex-col items-center">
      <PageHeader>
        <PageHeaderHeading>Uhoh, You got banned for life.</PageHeaderHeading>
      </PageHeader>

      <Image src="/vault.svg" width="300" height="300" alt="vault" />
    </div>
  );
}
