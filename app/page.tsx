import JoinSessionForm from "@/components/join-session";
import { Heading } from "@/components/text/heading";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-5/6 mx-auto pt-20 flex flex-col gap-10">
      <Heading>Welcome to WebTrivia!</Heading>
      <JoinSessionForm />
      <Button>Create Session</Button>
    </div>
  )
}
