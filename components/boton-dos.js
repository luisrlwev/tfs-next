import { useTranslation } from 'next-i18next'
import { FaPlus } from "react-icons/fa6";

export default function BotonDos() {
  const { t } = useTranslation(); // Inicializar el hook useTranslation
  return (
    <button className='py-1 px-20 bg-tfs text-white text-sm flex items-center gap-3'>{t('boton')} <FaPlus/></button>
  )
}
