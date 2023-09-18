import { ChatTab } from "@/components/session-chat-tab"
import { SessionNavigation } from "@/components/session-navigation"
import { PlayersTab } from "@/components/session-players-tab"

export default function SessionPage({ params }: { params: { session: string } }) {
  return (
    <main className="flex flex-col">
      <SessionNavigation sessionID={params.session} />
      <div className="flex min-h-full h-[calc(100vh-70px)]">
        <PlayersTab />
        <div className="flex-1">
          content (game)
        </div>
        <ChatTab />
      </div>
    </main>
  )
}
