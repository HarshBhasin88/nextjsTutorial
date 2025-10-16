import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//Converts prisma Object into javascript object
export function convertToJsObject<T>(value : T): T{
    return JSON.parse(JSON.stringify(value));
}

//Format price with 2 decimal places
export function formatPriceWithDecimal(num : number): string{
  const[int, decimal] = num.toString().split('.');
  return decimal ? `${int}.${decimal.padEnd(2,'0')}` : `${int}.00`;
}
