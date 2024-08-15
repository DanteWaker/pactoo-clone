import { Input } from "@/components/ui/input";
import { useState } from "react";



export function SharedLinks() {

  const [, setSearchValue] = useState<string>("")

  return (
    <div className="flex flex-col gap-28">
      <section className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-between items-center mb-12">
          <h1 className="w-full text-4xl font-bold">There are no public web links you created</h1>
        </div>
        <Input type="search" id="search" placeholder="Search" className="h-[3rem] rounded-[4px]" onChange={(event) => setSearchValue(event.target.value)} />

      </section>
      <section className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-between items-center mb-12">
          <h1 className="w-full text-4xl font-bold">There are no private web links you created</h1>
        </div>
        <Input type="search" id="search" placeholder="Search" className="h-[3rem] rounded-[4px]" onChange={(event) => setSearchValue(event.target.value)} />

      </section>
    </div>
  )
}

