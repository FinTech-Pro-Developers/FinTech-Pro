import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <div className="py-5 px-6 shadow flex items-center justify-between">
      <h1 className="font-bold text-lg">FinTech Pro</h1>
      <div className="flex items-center gap-2 text-sm">
        <ThemeSwitch />
        <Link href="#features" className="py-2 px-4 !text-zinc-900 dark:!text-white hover:!text-gray-600 dark:hover:!text-gray-300">
          Features
        </Link>
        <Link href="#pricing" className="py-2 px-4 !text-zinc-900 dark:!text-white hover:!text-gray-600 dark:hover:!text-gray-300">
          Pricing
        </Link>
        <Link href="#about" className="py-2 px-4 !text-zinc-900 dark:!text-white hover:!text-gray-600 dark:hover:!text-gray-300">
          About
        </Link>
        <Link href="/login" className="border border-gray-300 py-2 px-4 rounded !text-zinc-900 dark:!text-white hover:bg-gray-100 dark:hover:bg-gray-800">
          Login
        </Link>
        <Link href="/register" className="bg-black text-white hover:bg-gray-800 py-2 px-4 rounded dark:bg-white dark:!text-zinc-900 dark:hover:bg-gray-300">
          Register
        </Link>
      </div>
    </div>
  );
}