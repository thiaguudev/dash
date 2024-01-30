import { redirect } from "next/navigation";

import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";
import { getCurrentUser } from "@/lib/session";

export default async function Home() {
  const user = await getCurrentUser();

  if (!user) return redirect("/sign-in");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full">
        <Sidebar />
        <Dashboard />
      </div>
    </main>
  );
}
