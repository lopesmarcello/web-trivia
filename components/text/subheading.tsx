type Props = {
  children: React.ReactNode
  className: string
}

export function Subheading({ children, className }: Props) {
  return (
    <h2 className={`dark:text-accent scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0 ${className}`}>
      {children}
    </h2>
  )
}
