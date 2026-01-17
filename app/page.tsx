import { Box } from "@/components/atoms/box";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Text } from "@/components/atoms/text";

export default function Home() {
  return (
    <Box className="min-h-screen bg-background px-6 py-16 text-foreground">
      <Box className="mx-auto flex w-full max-w-3xl flex-col gap-10 rounded-3xl border border-border bg-card p-8 shadow-sm">
        <Box className="flex flex-col gap-3">
          <Text as="h1" variant="h1">
            Theme-ready starter
          </Text>
          <Text className="text-muted-foreground" variant="body">
            Toggle dark mode for this session only and explore atoms built on
            top of shadcn/ui primitives.
          </Text>
        </Box>
        <Box className="flex flex-col gap-3">
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
        </Box>
        <Box className="flex flex-wrap items-center gap-3">
          <Button>Primary action</Button>
          <Button variant="outline">Secondary action</Button>
        </Box>
      </Box>
    </Box>
  );
}
