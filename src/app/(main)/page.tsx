import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Chat } from "./_components/chat";

export default function Home() {
  return (
    <div className="container">
      <PageHeader>
        <PageHeaderHeading>Messages</PageHeaderHeading>
      </PageHeader>
      <Chat />
    </div>
  );
}
