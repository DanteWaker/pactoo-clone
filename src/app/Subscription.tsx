import { Button } from "@/components/ui/button";
import { features } from "@/utils/data";
import { CheckFat } from "@phosphor-icons/react/dist/ssr";


export function Subscription() {


  return (
    <section className="w-full flex flex-col">
      <div className="w-full flex flex-col justify-between items-start gap-8 mb-8 laptop:flex-row laptop:items-center">
        <h1 className="w-full text-1xl font-bold">You have access to PACTTO PRO as a trial. 10 days left</h1>
      </div>

      <div className="mb-16">
        <Button className="bg-gray-400 hover:bg-gray-500 mb-8">
          SUBSCRIBE TO PACTTO PRO
        </Button>
        <h2>
          The PACTTO PRO subscription allows you to:


        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {features.map(feat => (
          <div className="flex gap-2 justify-start items-center">
            <CheckFat weight="fill" size={16} className="text-primary" />
            <span key={feat.id} className="text-white">{feat.valor}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

