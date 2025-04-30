import { cn } from '@/lib/utils'

type PrimaryCardProps = {
  children: React.ReactNode
  className?: string
}

export function CardPrimary({ children, className }: PrimaryCardProps) {
  return (
    <div
      className={cn(
        'max-w-[325px] rounded-lg border shadow-sm hover:shadow-md transition-all duration-300 border-brand-tertiary',
        className,
      )}
    >
      {children}
    </div>
  )
}
