export function Paragraph({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <p className={`dark:text-accent leading-7 [&:not(:first-child)]:mt-6 ${className && className}`}>
      {children}
    </p>
  )
}
