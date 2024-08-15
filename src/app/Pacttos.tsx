import { Input } from "@/components/ui/input";
import { useState } from "react";



export function Pacttos() {

  const [, setSearchValue] = useState<string>("")

  return (
    <section className="w-full flex flex-col gap-8">
      <div className="w-full flex justify-between items-center mb-12">
        <h1 className="w-full text-4xl font-bold">Pacttos (Chats)</h1>
      </div>
      <Input type="search" id="search" placeholder="Search" className="h-[3rem] rounded-[4px]" onChange={(event) => setSearchValue(event.target.value)} />

    </section>
  )
}

