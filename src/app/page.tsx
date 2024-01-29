import Dashboard from "@/components/Dashboard";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex w-full">
        <Sidebar />
        <Dashboard />
      </div>
    </main>
  );
}
