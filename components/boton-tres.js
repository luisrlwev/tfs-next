import { useTranslation } from 'next-i18next'

export default function BotonTres() {
  const { t } = useTranslation(); // Inicializar el hook useTranslation
  return (
    <button className='uppercase py-3 px-20 font-bold bg-septimo text-lg letter-spacing-25'>{t('invierte_home')}</button>
  )
}
