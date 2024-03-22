"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function IncomeDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="border border-lime-400 text-lime-400 hover:scale-110 duration-200 transition hover:bg-lime-400 hover:text-slate-700">
          + Income
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-900">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
