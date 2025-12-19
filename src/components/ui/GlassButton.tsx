import Link from 'next/link'
import { cn } from '@/lib/utils'

interface GlassButtonProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function GlassButton({
  children,
  className,
  variant = 'default',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
}: GlassButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center font-medium transition-all duration-300',
    'rounded-xl border',
    'active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    // Size variants
    size === 'sm' && 'px-4 py-2 text-sm',
    size === 'md' && 'px-6 py-3 text-base',
    size === 'lg' && 'px-8 py-4 text-lg',
    // Color variants
    variant === 'default' && [
      'bg-white/5 border-white/10 text-white',
      'hover:bg-white/10 hover:border-white/20',
    ],
    variant === 'primary' && [
      'bg-primary border-primary text-white',
      'hover:bg-primary-light hover:shadow-glow',
    ],
    variant === 'outline' && [
      'bg-transparent border-white/20 text-white',
      'hover:bg-white/5 hover:border-white/30',
    ],
    className
  )

  if (href) {
    return (
      <Link href={href} className={baseStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button
      className={baseStyles}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
