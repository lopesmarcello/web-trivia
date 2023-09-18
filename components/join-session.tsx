"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Title } from "@/components/text/title";
import { getFormData } from "@/lib/handleFormSubmit";
import { useRouter } from "next/navigation";

type FormProps = {
  sessionID: string
}

export default function JoinSessionForm() {
  const router = useRouter()

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    const form = getFormData(e) as FormProps
    if (form.sessionID.length > 3) {
      router.push("/game/" + form.sessionID)
    } else {
      alert("Coloca um ID com mais de 3 caracteres ai o seu animal")
    }
  }

  return (
    <form onSubmit={e => onSubmit(e)} className="flex flex-col gap-4">
      <Title>Join a session:</Title>
      <Input
        type="text"
        placeholder="SessionID"
        name="sessionID"
      />
      <Button variant="ghost" type="submit" className="text-white">Join Session</Button>
    </form>
  )
}
