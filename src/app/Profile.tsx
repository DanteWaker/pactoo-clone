import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from "@phosphor-icons/react";

const formSchema = z.object({
  name: z.string().min(4).max(50),
  headline: z.string().min(4).max(50),
  about: z.string(),
  expertiseTitle: z.string(),
  expertise: z.string(),
  awardsTitle: z.string(),
  award: z.string(),
  mediaChannel: z.string(),
  youtube: z.string(),
  quote: z.string(),
  quoteAuthor: z.string(),
})

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values)
}

export function Profile() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      headline: "",
      about: "",
      expertiseTitle: "",
      expertise: "",
      awardsTitle: "",
      award: "",
      mediaChannel: "",
      youtube: "",
      quote: "",
      quoteAuthor: "",
    },
  })

  return (
    <Form {...form} >

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-8" >
        <div className="w-full flex flex-col justify-end items-start gap-4 mb-12 laptop:flex-row laptop:items-center">
          <h1 className="w-full text-3xl font-bold">Please edit your Pactto page below.</h1>
          <div className="flex gap-4">
            <Button className="bg-[#2B9CFC] hover:bg-[#1c466b]">
              LAUNCH
            </Button>
            <Button type="submit" className="bg-primary hover:bg-[#1b645a]">
              SAVE
            </Button>
          </div>
        </div>

        <div className="flex gap-10 ">
          <div className="w-[50%] flex flex-col gap-6 flex-1">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-[#E7E7E7] text-xl">Hero</FormLabel>
                  </div>
                  <FormControl>
                    <Input placeholder="Name" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="headline"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Headline" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="about"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <div className="mb-4">
                    <FormLabel className="text-[#E7E7E7] text-xl">About Me</FormLabel>
                  </div>
                  <FormControl>
                    <Textarea placeholder="About Me" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="expertiseTitle"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text"  {...field} placeholder="Expertise Title" className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="expertise"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormControl>
                    <Input type="text"  {...field} placeholder="Expertise 1" className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="awardsTitle"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input type="text"  {...field} placeholder="Awards Title" className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="award"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormControl>
                    <Input type="text"  {...field} placeholder="Award 1" className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mediaChannel"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <div className="mb-4">
                    <FormLabel className="text-[#E7E7E7] text-xl">Give me a follow</FormLabel>
                  </div>
                  <FormControl>
                    <Input type="text"  {...field} placeholder="Add social media channel" className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="youtube"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <div className="mb-4">
                    <FormLabel className="text-[#E7E7E7] text-xl">YouTube Video</FormLabel>
                  </div>
                  <FormControl>
                    <Input type="text"  {...field} placeholder="YouTube video URL" className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quote"
              render={({ field }) => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-[#E7E7E7] text-xl">Footer</FormLabel>
                  </div>
                  <FormControl>
                    <Textarea placeholder="Quote" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quoteAuthor"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Quote Author" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />


          </div>
          <aside className="flex-1">
            <div className="mb-4">
              <FormLabel className="text-[#E7E7E7] text-xl">Avatar</FormLabel>
            </div>

            <div className="w-full flex justify-center bg-[#1C1B1E] p-8 mb-8">
              <Avatar className="h-52 w-52">
                <AvatarImage src="/avatar.png" />
                <AvatarFallback>BN</AvatarFallback>
              </Avatar>
            </div>

            <div className="mb-4">
              <FormLabel className="text-[#E7E7E7] text-xl">Carousel</FormLabel>
            </div>
            <Button className="rbg-primary hover:bg-[#1b645a]">
              <Plus />
              ADD IMAGE
            </Button>

          </aside>
        </div>



      </form >
    </Form>
  )
}

