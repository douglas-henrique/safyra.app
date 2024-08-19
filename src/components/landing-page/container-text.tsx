import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { ReactNode } from 'react'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { PiArrowBendLeftUpDuotone } from "react-icons/pi";

interface ImageProps {
  url: string
  message: {
    text: string
    name: string
    role: string
  }
}

const images: ImageProps[] = [
  {
    url: "/people/01.png", message: {
      text: 'Usar este app de coleta de feedbacks transformou a forma como entendemos nossos clientes. As sugestões são claras, organizadas e fáceis de implementar. Recomendo a todos que buscam melhorar seus produtos e serviços!',
      name: "Gabriel Rodrigo",
      role: "CEO at fake natty"
    }
  },
  {
    url: "/people/02.png", message: {
      text: 'Usar este app de coleta de feedbacks transformou a forma como entendemos nossos clientes. As sugestões são claras, organizadas e fáceis de implementar. Recomendo a todos que buscam melhorar seus produtos e serviços!',
      name: "Douglas Henrique",
      role: "CTO at safira.app"
    }
  },
  {
    url: "/people/03.png", message: {
      text: 'Usar este app de coleta de feedbacks transformou a forma como entendemos nossos clientes. As sugestões são claras, organizadas e fáceis de implementar. Recomendo a todos que buscam melhorar seus produtos e serviços!',
      name: "Daniela Silres",
      role: "CPO at Starlink"
    }
  }

  ,
]

const ImageBadge = ({ image }: { image: ImageProps }): ReactNode => {
  return <TooltipProvider delayDuration={200}>
    <Tooltip>
      <TooltipTrigger>  <div className='inline-block transition-all duration-1000 ease-out rounded-3xl h-6 w-24   hover:w-32 '>
        <AspectRatio ratio={16 / 9} className="transition-all duration-1000 ease-out rounded-3xl h-8 w-24   hover:w-32 ">
          <Image
            src={image.url}
            alt="People looking to you and smiling"
            fill
            className=" object-cover rounded-3xl"
          />
        </AspectRatio>
      </div></TooltipTrigger>
      <TooltipContent className='max-w-[400px] bg-primary-black flex flex-col text-left p-4' >
        <p className='text-primary-white'>{image.message.text}</p>
        <label className='mt-3 text-secondary-white'>{image.message.name}</label>
        <small className='text-third-white'>{image.message.role}</small>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
}

export function ContainerText() {
  const t = useTranslations('LP')

  return <div className="relative px-32 p-5 rounded-lg text-center" >
    <h1 className="text-3xl font-semibold text-gray-800">
      {`${t('CONTAINER.PRINCIPAL_TEXT.01')} `} <ImageBadge image={images[0]} /> {`${t('CONTAINER.PRINCIPAL_TEXT.02')}`}
      &nbsp;
      <ImageBadge image={images[1]} />&nbsp;{`${t('CONTAINER.PRINCIPAL_TEXT.03')} `} {`${t('CONTAINER.PRINCIPAL_TEXT.04')} `}
      <ImageBadge image={images[2]} /> &nbsp;
      {t('CONTAINER.PRINCIPAL_TEXT.05')}
    </h1>
    <div className='flex flex-row items-center justify-center pl-20'>
      <PiArrowBendLeftUpDuotone />
      <p className="mt-4 text-gray-500">{t('CONTAINER.HOVER')}</p>
    </div>
  </div>
}