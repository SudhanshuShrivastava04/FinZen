import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const currencyFormatter = (amount) => {
  const formatter = Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  });

  return formatter.format(amount);
};
