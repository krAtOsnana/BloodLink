import Logo from '@/components/Logo'
import RecipientForm from '@/components/forms/RecipientForm'
import { Droplets } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const recipient = () => {
  return (
    <div className='flex h-screen max-h-screen remove-scrollbar'>
     <section className=" container my-auto">
        <div className="sub-container max-w-[496px]">
          <Link href="/">
          <div className="flex items-center ">
            {/* <Droplets className="h-8 w-8 text-red-500" /> */}
            <Logo h="8" w="8" />
            <span className="text-xl font-bold text-gray-900 dark:text-white">BloodLink</span>
          </div>
          </Link>
          

          <RecipientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 BloodLink
            </p>
            {/* <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link> */}
          </div>
        </div>
      </section>
      <Image
        src="/cover/recipient.jpg"
        height={1000}
        width={1000}
        alt="donor"
        className="side-img max-w-[50%] h-fit "
      />
    </div>
  )
}

export default recipient
