import { FC } from "react"
import { Metadata } from "next"
import Link from "next/link"

import { UserAuthForm } from "../_components/userAuthForm"

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components."
}

const AuthenticationPage: FC = () => {
  return (
    <>
      <div className='container bg-white relative  h-screen flex-col items-center justify-center sm:grid md:grid lg:max-w-none lg:px-0'>
        <div className='lg:p-8 md:p-4 bg-gray-100 rounded-lg'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
              <h1 className='text-2xl font-semibold tracking-tight'>Sign in</h1>
              <p className='text-sm text-muted-foreground'>Welcome back!</p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-muted-foreground'>
              By clicking continue, you agree to our{" "}
              <Link href='/terms' className='underline underline-offset-4 hover:text-primary'>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href='/privacy' className='underline underline-offset-4 hover:text-primary'>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AuthenticationPage
