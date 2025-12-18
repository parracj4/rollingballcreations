import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'available' | 'sold'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'badge',
        variant === 'available' && 'badge-available',
        variant === 'sold' && 'badge-sold',
        className
      )}
    >
      {children}
    </span>
  )
}
