import Link from "next/link";
import { useTranslations } from 'next-intl'

export function Logo() {
  const t = useTranslations('LP')
  return (
    <Link href="/">
      <span className="font-bold text-xl ">{t('LOGO')}</span>
    </Link>
  )
}

