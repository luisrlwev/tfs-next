import { useTranslation } from 'next-i18next'

export default function BotonTres() {
  const { t } = useTranslation(); // Inicializar el hook useTranslation
  return (
    <button className='uppercase py-3 w-64 font-bold bg-septimo text-lg letter-spacing-25'>{t('invierte_home')}</button>
  )
}
