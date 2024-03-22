"use client";

import Home from "@/app/(home)/page";
import ExpenseTable from "@/components/ExpenseTable";
import { motion, AnimatePresence } from "framer-motion";
import ContactToolTip from "@/components/ContactToolTip";


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
