import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function LessonsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-yellow-400">
          Member Dashboard
        </p>

        <h1 className="font-serif text-5xl font-bold">
          Foundations of Biblical Wealth
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-neutral-400">
          Welcome to your lesson portal.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-yellow-500/20 bg-neutral-950 p-8">
            <p className="text-yellow-400">Module 1</p>
            <h2 className="mt-3 text-3xl font-bold">
              Kingdom Stewardship
            </h2>

            <ul className="mt-6 space-y-3 text-neutral-300">
              <li>✓ God owns everything</li>
              <li>✓ Biblical stewardship principles</li>
              <li>✓ Stewardship assessment</li>
              <li>✓ Scripture reflection journal</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-yellow-500/20 bg-neutral-950 p-8">
            <p className="text-yellow-400">Progress</p>

            <div className="mt-5 h-4 overflow-hidden rounded-full bg-neutral-800">
              <div className="h-full w-[25%] bg-yellow-400" />
            </div>

            <p className="mt-4 text-neutral-400">
              25% Complete
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}