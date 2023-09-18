type Props = {
  children: React.ReactNode
}

export function Heading({ children }: Props) {

  return (
    <h1 className="scroll-m-20 dark:text-accent text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}
