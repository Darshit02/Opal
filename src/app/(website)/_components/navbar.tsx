import { Menu } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Props = {

}

const LandingPageNavBar = ({}: Props) => {
  return (
    <div className='flex w-full justify-between items-center'>
       <div className="text-3xl font-semibold flex items-center gap-x-3">
        <Menu className='h-6 w-6'/>
        {/* <Image
        
        /> */}
        </div> 
    </div>
  )
}

export default LandingPageNavBar