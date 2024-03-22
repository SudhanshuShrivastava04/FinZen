"use client";

import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/utils";
import Transition from "@/lib/transition";

function Home() {
  return (
    <main className="w-full">
      <section>
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">{currencyFormatter(10000)}</h2>
      </section>

      <section className="flex items-center gap-4 py-4">
        <Button className="bg-slate-700 border border-slate-700 text-lime-400 hover:scale-110 duration-200 transition">
          + Expenses
        </Button>
        <Button className="border border-lime-400 text-lime-400 hover:scale-110 duration-200 transition hover:bg-lime-400 hover:text-slate-700">
          + Income
        </Button>
      </section>
    </main>
  );
}

export default Home;
