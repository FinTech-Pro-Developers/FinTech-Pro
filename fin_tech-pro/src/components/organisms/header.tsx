'use client'

import Link from 'next/link'
import LoginModal from './loginModal'
import { useState } from 'react'
import RegisterModal from './registerModal'
import ThemeSwitch from '../molecules/themeSwitch'

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
    <div className="py-5 px-6 mx-3 max-sm:flex-col flex items-center justify-between border-b dark:border-b-gray-200 border-b-gray-300">
      <Link href="/">
        <h1 className="font-bold text-lg">FinTech Pro</h1>
      </Link>

      <div className="flex max-sm:flex-col gap-6 pt-3">
        <div className="flex items-center gap-6 text-sm font-medium justify-center">
          <Link href=" " className=" hover:text-gray-600">
            Features
          </Link>
          <Link href=" " className="hover:text-gray-600">
            Pricing
          </Link>
          <Link href=" " className="hover:text-gray-600 ">
            About
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleOpenLogin}
            className="border border-gray-300 py-2 px-4 rounded hover:bg-gray-100 cursor-pointer "
          >
            Login
          </button>
          <button
            onClick={handleOpenRegister}
            className="bg-gray-900 dark:bg-white text-gray-100 dark:text-black hover:bg-gray-800 py-2 px-4 rounded cursor-pointer"
          >
            Register
          </button>
          <ThemeSwitch />
        </div>
      </div>

      <LoginModal
        OpenLogin={OpenLogin}
        onClose={() => setOpenLogin(false)}
        openRegisterModal={openRegisterModal}
      />
      <RegisterModal
        openRegister={openRegister}
        onClose={() => setOpenRegister(false)}
        openLoginModal={openLoginModal}
      />
    </div>
  )
}
