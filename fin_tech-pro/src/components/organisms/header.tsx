"use client"

import Link from "next/link"
import LoginModal from "./loginModal"
import { useState } from "react"
import RegisterModal from "./registerModal"
import ThemeSwitch from "../molecules/themeSwitch"

export default function Header() {
  const [OpenLogin, setOpenLogin] = useState(false)
  const [openRegister, setOpenRegister] = useState(false)

  const handleOpenLogin = () => {
    setOpenLogin(true)
    setOpenRegister(false)
  }

  const handleOpenRegister = () => {
    setOpenRegister(true)
    setOpenLogin(false)
  }

  const openRegisterModal = () => {
    setOpenLogin(false)
    setOpenRegister(true)
  }

  const openLoginModal = () => {
    setOpenLogin(true)
    setOpenRegister(false)
  }

  return (
    <header className="py-5 px-6 shadow flex items-center justify-between bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700">
      <div className="flex items-center">
        <h1 className="font-bold text-lg text-gray-900 dark:text-white">FinTech Pro</h1>
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Link
          href="#features"
          className="py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Features
        </Link>
        <Link
          href="#pricing"
          className="py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="#about"
          className="py-2 px-4 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          About
        </Link>
        <ThemeSwitch />
        <button
          onClick={handleOpenLogin}
          className="border border-gray-300 dark:border-gray-600 py-2 px-4 rounded text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          Login
        </button>
        <button
          onClick={handleOpenRegister}
          className="bg-gray-900 text-white hover:bg-gray-800 py-2 px-4 rounded dark:bg-indigo-600 dark:hover:bg-indigo-700 transition-colors"
        >
          Register
        </button>
      </div>
      <LoginModal OpenLogin={OpenLogin} onClose={() => setOpenLogin(false)} openRegisterModal={openRegisterModal} />
      <RegisterModal
        openRegister={openRegister}
        onClose={() => setOpenRegister(false)}
        openLoginModal={openLoginModal}
      />
    </header>
  )
}
