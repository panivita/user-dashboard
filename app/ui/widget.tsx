import { motion } from 'motion/react'
import { useTranslation } from 'react-i18next'

const Widget = ({ id }: { id: string }) => {
  const { t } = useTranslation()

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className='bg-lightblue/50 m-4 max-w-[250px] rounded-lg p-4 text-white shadow-lg'
    >
      <h2 className='text-md mb-2 font-bold'>{t(`widget.${id}.title`)}</h2>
      <p className='text-xs text-white/90'>{t(`widget.${id}.description`)}</p>
    </motion.div>
  )
}

export { Widget }
