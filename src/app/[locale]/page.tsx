import { AuthOptions } from "@/components/landing-page/auth-options";
import { ContainerText } from "@/components/landing-page/container-text";
import { Logo } from '@/components/landing-page/logo';
// import { NavigationMenuComponent } from '@/components/landing-page/navigation-menu';
import { FaGithub } from "react-icons/fa";
import { getTranslations } from 'next-intl/server';

import Spotlight from "@/components/landing-page/spotlight";
import { Badge } from '@/components/ui/badge';
import { useTranslations } from 'next-intl';
import { FaXTwitter } from "react-icons/fa6";

import Link from 'next/link';

export async function generateMetadata() {
  const t = await getTranslations('LP');  
  return {
    title: t('META_DATA.TITLE'),
    description: t('META_DATA.DESCRIPTION')
  };
}

export default function Home() {
  const t = useTranslations('LP')
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="max-w-[1280px] w-full h-screen items-center flex flex-col ">
        <nav className="w-full h-16 flex items-center justify-between px-6 mt-2">
          <Logo />
          {/* <NavigationMenuComponent /> */}
          <AuthOptions />
        </nav>
        <div className='flex flex-col items-center justify-center pt-32'>
          <Badge variant={'secondary'} className='p-1 px-3 bg-primary-gray'>
            {t('CONTAINER.BADGE').toUpperCase()}
          </Badge>
          <ContainerText />
        </div>
        <Spotlight className="mt-8">
          <div className="min-w-full flex-col flex items-center justify-center gap-4">
            <h2 className="text-2xl text-white font-medium">{t('COMING_SOON.TITLE')}</h2>
            <p className="text-white text-md">{t('COMING_SOON.DESCRIPTION')}</p>
            <div className="flex flex-row gap-4  mt-2">
              <Link href={'https://x.com/doug_hsp'}>
                <FaXTwitter size={30} className="text-white transition-all ease-linear hover:scale-110" />
              </Link>
              <Link href={'https://x.com/doug_hsp'}>
                <FaGithub size={30} color="white" className="text-white transition-all ease-linear hover:scale-110" />
              </Link>
            </div>
          </div>
        </Spotlight>
      </div>
    </main>
  );
}
