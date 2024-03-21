import { Button } from "@/components/ui/button";
import { currencyFormatter } from "@/lib/utils";

export default function Home() {
  return (
    <main>
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

      <section className="py-6 w-full">
        <h3 className="text-2xl">My Expenses</h3>
        <div>Transaction Table</div>
      </section>
    </main>
  );
}
