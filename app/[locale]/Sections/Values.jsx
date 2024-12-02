import React from 'react'
import { LiaShippingFastSolid} from "react-icons/lia";
import { GiReceiveMoney } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";
import { LuPhone } from "react-icons/lu";
import { useTranslations } from "next-intl";

function values() {
  const t = useTranslations('ValuesPage');
  return (
    <div className='flex flex-col lg:flex-row lg:justify-center gap-2 px-4 lg:px-8 py-8 max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row md:flex-nowrap justify-center items-center gap-2 w-full'>
      <div className='flex flex-col shadow-2xl rounded-xl px-4 py-8 w-full md:w-1/2'>
      <LiaShippingFastSolid className='w-12 h-16'/>
      <h2 className='font-semibold md:text-lg mt-4'>{t('values.0.title')}</h2>
      <p className='mt-2 md:text-sm font-semibold'>{t('values.0.description')}</p>
      </div>
      <div className='flex flex-col shadow-2xl rounded-xl px-4 py-8 w-full md:w-1/2'>
      <GiReceiveMoney className='w-12 h-16'/>
      <h2 className='font-semibold md:text-lg mt-4'>{t('values.1.title')}</h2>
      <p className='mt-2 md:text-sm font-semibold'>{t('values.1.description')}</p>
      </div>
      </div>

      <div className='flex flex-col md:flex-row md:flex-nowrap justify-center items-center gap-2 w-full'>
      <div className='flex flex-col shadow-2xl rounded-xl px-4 py-8 w-full md:w-1/2'>
      <FaCheckCircle className='w-12 h-16'/>
      <h2 className='font-semibold md:text-lg mt-4'>{t('values.2.title')}</h2>
      <p className='mt-2 md:text-sm font-semibold'>{t('values.2.description')}</p>
      </div>
      <div className='flex flex-col shadow-2xl rounded-xl px-4 py-8 w-full md:w-1/2'>
      <LuPhone className='w-12 h-16'/>
      <h2 className='font-semibold md:text-lg mt-4'>{t('values.3.title')}</h2>
      <p className='mt-2 md:text-sm font-semibold'>{t('values.3.description')}</p>
      </div>
      </div>
    </div>
  )
}

export default values