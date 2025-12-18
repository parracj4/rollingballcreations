import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'glass-card',
        hover && 'hover-lift glass-hover',
        glow && 'shadow-glow',
        className
      )}
    >
      {children}
    </div>
  )
}
