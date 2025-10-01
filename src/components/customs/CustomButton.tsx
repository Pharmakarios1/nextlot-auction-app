import { Button } from '../ui/button.js'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils.js'
import type { ReactElement } from 'react'

interface BtnProps {
  icons?: ReactElement
  onClick?: () => void
  text: string
  link?: string
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'
  className: string
  disabled?: boolean
}

const CustomButton: React.FC<BtnProps> = (props) => {
  const { icons, text, link, variant, className, onClick, disabled } = props
  return (
    <Button
      asChild
      variant={variant}
      disabled={disabled}
      className={`cursor-pointer py-6 ${className}`}
      onClick={onClick}
    >
      <Link to={link}>
        <p>{text}</p>
        {icons}
      </Link>
    </Button>
  )
}

export default CustomButton
