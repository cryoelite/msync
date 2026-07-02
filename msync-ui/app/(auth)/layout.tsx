import Header from "./header";

export default function Auth({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="auth" className="flex flex-col">
      <Header />
      <div id="auth_content">{children}</div>
    </div>
  );
}
