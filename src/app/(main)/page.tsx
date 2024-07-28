import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { siteConfig } from "@/config/site";
import { Chat } from "./_components/chat";

export default function Home() {
  return (
    <div className="container">
      <PageHeader>
        <PageHeaderHeading>{siteConfig.name}</PageHeaderHeading>
      </PageHeader>
      <Chat />
    </div>
  );
}
