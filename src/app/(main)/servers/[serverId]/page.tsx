import { ThemeToggle } from "@/components/theme-toggle";
import { SignOutButton } from "@clerk/nextjs";

export const ServerIdPage = () => {
  return (
    <div className="h-full">
      <div className="flex flex-col items-center justify-center h-full">
        <SignOutButton />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default ServerIdPage;
