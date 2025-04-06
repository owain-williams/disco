import { ClerkProvider as Clerk } from "@clerk/nextjs";

export default function ClerkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Clerk>{children}</Clerk>;
}
