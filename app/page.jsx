"use client";

import Home from "@/app/(home)/page";
import ExpenseTable from "@/components/ExpenseTable";
import { motion, AnimatePresence } from "framer-motion";
import Transition from "@/lib/transition";

function Page() {
  return (
    <AnimatePresence mode="wait">
      <motion.div>
        <Home />
        <ExpenseTable />
      </motion.div>
    </AnimatePresence>
  );
}

export default Page;
