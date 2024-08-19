import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { getServerSession } from "next-auth";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { options } from "../../app/api/auth/[...nextauth]/options";
import ButtonSignInGithub from '../auth/ButtonSignInGithub';
import ButtonSignInGoogle from '../auth/ButtonSignInGoogle';
import EmailForm from '../auth/EmailForm';
import { AvatarDropdown } from "./avatar-dropdown";

export async function AuthOptions() {
  const t = useTranslations('LP')
  const session = await getServerSession(options);
  return (
    <div className="flex flex-row gap-5 items-center">
      <Link href="/auth/login">
        <span className='font-normal hover:font-bold transition-all duration-300 py-2 px-4 p-3'>{t('MENU_ITEMS.AUTH_OPTIONS.LOG_IN')}</span>
      </Link>
      {
        !session ? (
          <Popover>
            <PopoverTrigger>
              <span className=' bg-purple-600 transition-opacity duration-500 ease-out opacity-100 hover:opacity-70 py-2 px-4 
      rounded-xl p-3 font-medium text-white'>{t('MENU_ITEMS.AUTH_OPTIONS.GET_STARTED')}</span></PopoverTrigger>
            <PopoverContent className='rounded-xl w-80 mt-2' >
              <span className='font-semibold text-lg'>Join for success ✨</span>
              <p>Start managing your costumers testimonials easily</p>
              <ButtonSignInGoogle className='mt-5 w-full' />
              <ButtonSignInGithub className='w-full' />
              <div className="relative mt-5"><div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div><div className="relative flex justify-center text-xs uppercase"><span className="bg-background px-2 text-muted-foreground">Or continue with</span></div></div>
              <EmailForm />
            </PopoverContent>
          </Popover>
        ) : (
         <AvatarDropdown name={session.user?.name || ''} image={session.user?.image || ''} email={session.user?.email || ''}  />
        )
      }
    </div>
  )
}