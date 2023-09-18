
export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="dark:text-accent scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}
