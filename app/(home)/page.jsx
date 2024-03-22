"use client";

import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/utils";
import IncomeDialog from "./_components/IncomeModal";
import Transition from "@/lib/transition";
import ExpenseDialog from "./_components/ExpenseModal";

function Home() {
  return (
    <main className="w-full">
      <section>
        <small className="text-gray-400 text-md">My Balance</small>
        <h2 className="text-4xl font-bold">{currencyFormatter(10000)}</h2>
      </section>

      <section className="flex items-center gap-4 py-4">
        <ExpenseDialog />
        <IncomeDialog />
      </section>
    </main>
  );
}

export default Transition(Home);
