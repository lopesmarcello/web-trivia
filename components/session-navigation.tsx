import Link from "next/link"
import { Title } from "./text/title"

type Props = {
  sessionID: string
}

export function SessionNavigation({ sessionID }: Props) {

  return (
    <nav className="flex w-full bg-slate-700 p-5 justify-between">
      <Title>
        <Link href="/">
          Web Trivia
        </Link>
      </Title>
      <Title>
        SessionID: {sessionID}
      </Title>
      <div>
        {/* user */}
      </div>
    </nav>
  )
}
