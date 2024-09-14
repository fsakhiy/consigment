import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
// import Sidebar from "@/components/Sidebar";
import Sidebar from "@/components/layouts/sidebar";
import Header from "@/components/layouts/header";

export default async function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  // Type guard to check for session and user
  if (!session || !session.user) {
    redirect("/api/auth/login");
  }

  // Type assertion to ensure that `session.user` is defined
  // const { user } = session;

  return (
    <div className="flex">
      <Sidebar />
      <main className="w-full flex-1 overflow-hidden">
        <Header />
        {children}
      </main>
    </div>
  );
}
