import { Card } from "@repo/ui/card";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <Card href="https://example.com" title="Title">
        Description
      </Card>
    </main>
  );
}
