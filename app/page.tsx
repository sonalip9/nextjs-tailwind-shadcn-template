import { Box, HBox, VBox } from "@/components/atoms/box";
import { Button } from "@/components/atoms/button";
import { Input } from "@/components/atoms/input";
import { Text } from "@/components/atoms/text";

export default function Home() {
  return (
    <Box className="min-h-screen w-full bg-background px-md py-3xl text-foreground">
      <VBox className="mx-auto w-full gap-xl rounded-3xl border border-border bg-card p-lg shadow-sm">
        <VBox className="gap-sm">
          <Text variant="h1">Theme-ready starter</Text>
          <Text className="text-muted-foreground" variant="body">
            Toggle dark mode for this session only and explore atoms built on
            top of shadcn/ui primitives.
          </Text>
        </VBox>
        <VBox className="gap-sm">
          <Text
            as="label"
            className="text-foreground"
            variant="caption"
            htmlFor="email"
          >
            Email
          </Text>
          <Input id="email" type="email" placeholder="hello@company.com" />
          <Text className="text-muted-foreground" variant="caption">
            We only store drafts in your browser for this session.
          </Text>
        </VBox>
        <HBox className="flex-wrap items-center gap-sm">
          <Button>Primary action</Button>
          <Button variant="outline">Secondary action</Button>
        </HBox>
      </VBox>
    </Box>
  );
}
