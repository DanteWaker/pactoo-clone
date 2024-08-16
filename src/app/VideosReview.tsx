import { Input } from "@/components/ui/inputSearch";
import { useState } from "react";



export function VideosReview() {

  const [, setSearchValue] = useState<string>("")

  return (
    <section className="w-full flex flex-col gap-8">
      <div className="w-full flex justify-between items-center mb-12">
        <h1 className="w-full text-4xl font-bold">There are no review requests sent to you</h1>
      </div>
      <Input type="search" id="search" placeholder="Search" className="h-[3.5rem] rounded-[4px] text-xl" onChange={(event) => setSearchValue(event.target.value)} />

    </section>
  )
}

