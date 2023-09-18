import { Paragraph } from "./text/paragraph"
import { Subheading } from "./text/subheading"
import { Subtitle } from "./text/subtitle"

type Player = {
  username: string,
  points: number,
  color: string,
}

const fakePlayers = [
  {
    username: "xexelo#123",
    points: 0,
    color: "#5448C8"
  },
  {
    username: "matrda#123",
    points: 0,
    color: "#FFFECB"
  },
  {
    username: "gelado#123",
    points: 0,
    color: "#5FEA82"
  },
  {
    username: "impadim#123",
    points: 0,
    color: "#FF2E00"
  },
  {
    username: "danado#123",
    points: 0,
    color: "#988F2A"
  },
]

function Player({ username, points, color }: Player) {
  const nickname = username.split("#")[0]
  return (

    <Paragraph className={`font-bold text-[${color}] flex gap-4 w-full`}>
      {nickname} <span className="font-normal text-sky-200">{points}</span>
    </Paragraph>
  )
}

export function PlayersTab() {
  return (
    <div className="py-4 pl-3 pr-10 border-r border-1 border-slate-50">
      <Subheading>Scoreboard:</Subheading>
      {fakePlayers.map((player) => (
        <Player key={player.username} {...player} />
      ))
      }
    </div >
  )
}
