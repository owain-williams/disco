import { Button } from "@/components/ui/button";
import {
  UserButton,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
} from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold">Hello Discord Clone</h1>
      <Button>Click me</Button>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
        <SignUpButton />
      </SignedOut>
    </div>
  );
}
