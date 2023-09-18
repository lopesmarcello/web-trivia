import { Paragraph } from "./text/paragraph";
import { Subheading } from "./text/subheading";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { AiOutlineSend } from "react-icons/ai"

export function ChatTab() {
  return (
    <div className="flex flex-col py-4 pl-3 pr-10 border-l border-1 border-slate-50 bg-slate-800">
      <Subheading className="mb-6">Chat: </Subheading>
      <div className="flex-1">
        <Paragraph>xexelo: teste</Paragraph>
        <Paragraph>danado: sexo?</Paragraph>
      </div>
      <form className="flex justify-around w-full gap-4">
        <Input className="flex-1 w-full" type="text" placeholder="New message..." />
        <Button className="flex justify-center items-center">
          <AiOutlineSend size={22} />
        </Button>
      </form>
    </div>
  )
}
