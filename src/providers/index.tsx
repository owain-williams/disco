import ClerkProvider from "./clerk";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default Providers;
