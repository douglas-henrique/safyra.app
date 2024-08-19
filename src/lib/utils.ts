import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export function getInitials(fullName: string): string {
  const regex = /\b(\w)/g;
  const initials = fullName.match(regex);

  if (!initials || initials.length < 2) {
    throw new Error("Por favor, insira um nome e um sobrenome.");
  }

  return `${initials[0].toUpperCase()}${initials[initials.length - 1].toUpperCase()}`;
}