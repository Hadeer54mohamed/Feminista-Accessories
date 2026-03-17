import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium tracking-wide transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-gold/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default: 'bg-dark-brown text-cream hover:bg-dark-brown/90 shadow-md hover:shadow-lg',
        destructive: 'bg-burgundy text-cream hover:bg-burgundy/90 shadow-md',
        outline: 'border-2 border-dark-brown text-dark-brown bg-transparent hover:bg-dark-brown hover:text-cream',
        secondary: 'bg-gold-light text-dark-brown hover:bg-gold shadow-sm',
        ghost: 'text-dark-brown hover:bg-dark-brown/5',
        link: 'text-gold underline-offset-4 hover:underline',
        gold: 'bg-gold text-dark-brown hover:bg-gold/80 shadow-md hover:shadow-lg',
        burgundy: 'bg-burgundy text-cream hover:bg-burgundy/90 shadow-md hover:shadow-lg',
      },
      size: {
        default: 'h-10 px-5 py-2 has-[>svg]:px-4',
        sm: 'h-8 gap-1.5 px-4 text-xs has-[>svg]:px-3',
        lg: 'h-12 px-8 text-base has-[>svg]:px-6',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
