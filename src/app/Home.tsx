import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/inputSearch";
import { Plus } from "@phosphor-icons/react";
import { useState } from "react";

function generateRandomList(size: number, min: number, max: number) {
  const randomList = [];

  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    randomList.push(randomNumber);
  }

  return randomList;
}

export function Home() {

  const [, setSearchValue] = useState<string>("")

  return (
    <section className="w-full flex flex-col gap-8">
      <div className="w-full flex flex-col justify-between items-start gap-8 mb-12 laptop:flex-row laptop:items-center">
        <h1 className="w-full text-4xl font-bold">My uploads</h1>
        <Button className=" P-2 rounded-full bg-[#24c4ae] hover:bg-[#1b645a] text-black flex justify-center items-center gap-2 h-[3rem]">
          <Plus />
          UPLOAD NEW VIDEO
        </Button>
      </div>
      <div className="flex flex-col gap-8">
        <Input type="search" id="search" placeholder="Search" className="h-[3.5rem] rounded-[4px] text-xl" onChange={(event) => setSearchValue(event.target.value)} />
        <div className=" flex flex-wrap gap-4 justify-between">
          {generateRandomList(11, 1, 3000).map((number) => (

            <Card key={number} className="min-w-[14rem] max-w-[20rem] flex-1">
              <img src="/teste.png" alt="" />
              <CardContent className="p-3">
                <h1 className="text-lg">{number}</h1>
              </CardContent>
              <CardFooter className="p-3 text-xs">
                <p>Date: 08/12/24 6:07 pm</p>
              </CardFooter>
            </Card>))}
        </div>
      </div>

      <div className="w-full flex flex-col justify-between items-start gap-8 mb-8 laptop:flex-row laptop:items-center mt-16">
        <h1 className="w-full text-4xl font-bold">Reviews by me</h1>
      </div>
      <div className="flex flex-col gap-8">
        <Input type="search" id="search" placeholder="Search" className="h-[3.5rem] rounded-[4px] text-xl" onChange={(event) => setSearchValue(event.target.value)} />
        <div className=" flex flex-wrap gap-4 justify-between">
          {generateRandomList(3, 1, 3000).map((number) => (

            <Card key={number} className="min-w-[14rem] max-w-[20rem] flex-1">
              <img src="/teste.png" alt="" />
              <CardContent className="p-3">
                <h1 className="text-lg">{number}</h1>
              </CardContent>
              <CardFooter className="p-3 text-xs">
                <p>Date: 08/12/24 6:07 pm</p>
              </CardFooter>
            </Card>))}
        </div>
      </div>

    </section>
  )
}

