export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xl dark:text-accent text-muted-foreground">
      {children}
    </p>
  )
}
