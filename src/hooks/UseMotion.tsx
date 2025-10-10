import { motion, type Variants } from 'framer-motion'

Const UseMotion = ()=>{

//Reusable fade-in variant
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
}
return {fadeInUp, hidden, visible, useInVie }
}