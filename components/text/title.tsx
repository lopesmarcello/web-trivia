export function Title({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="dark:text-accent scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}
