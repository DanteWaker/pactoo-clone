import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useEffect, useState } from "react";
import { mergeSort } from "@/utils/MergeSort";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";


const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const

interface Country {
  name: {
    common: string;
  };
  cca2: string;
}

const formSchema = z.object({
  username: z.string().min(4).max(50),
  surname: z.string().min(4).max(50),
  email: z.string().email(),
  country: z.string(),
  mainActivity: z.string(),
  user: z.string(),
  password: z.string(),
  passwordConfirm: z.string(),
})

function onSubmit(values: z.infer<typeof formSchema>) {
  console.log(values)
}

export function PersonalInfo() {
  const [sortedCountries, setSortedCountries] = useState<Country[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      surname: "",
      email: "",
      country: "",
      mainActivity: "",
      user: "",
      password: "",
      passwordConfirm: "",
    },
  })

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all?fields=name,cca2')
      .then((response) => response.json())
      .then((data: Country[]) => {
        const sorted = mergeSort(data, (a, b) => a.name.common.localeCompare(b.name.common));
        setSortedCountries(sorted);
      })
      .catch((error) => console.error('Erro ao buscar países:', error));
  }, []);

  console.log(sortedCountries)

  return (
    <Form {...form} >

      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-8" >
        <div className="w-full flex flex-col justify-end items-start gap-4 mb-12 laptop:flex-row laptop:items-center">
          <Button className="p-4 px-8 rounded-full transition-all duration-200 bg-[#B8B8B8] hover:bg-[#aaa9a9] text-black flex justify-center items-center gap-2 h-[3rem]">
            RESET CHANGES
          </Button>
          <Button type="submit" className="p-4 px-8 rounded-full transition-all duration-300 bg-[#24c4ae] hover:bg-[#1b645a] text-black flex justify-center items-center gap-2 h-[3rem]">
            SAVE CHANGES
          </Button>
        </div>

        <div className="w-[50%] flex flex-col gap-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Surname" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="E-mail" type="email" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select>
                    <SelectTrigger className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]">
                      <SelectValue {...field} placeholder="Country" className=" bg-red-400" />
                    </SelectTrigger>
                    <SelectContent className="border-0 text-[#E7E7E7] text-xl bg-[#474649]">
                      {sortedCountries.map((country => (
                        <SelectItem value={country.cca2}>{country.name.common}</SelectItem>
                      )))}

                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="mainActivity"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-[#E7E7E7] text-xl">What is your main activity? Or activities</FormLabel>
                </div>
                {items.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="mainActivity"
                    render={({ field }) => {
                      return (
                        <FormItem
                          key={item.id}
                          className="flex flex-row items-center justify-start space-x-3 space-y-0 text-[#E7E7E7]"
                        >
                          <FormControl>
                            <Checkbox
                              checked={field.value?.includes(item.id)}
                              onCheckedChange={(checked) => {
                                return checked
                                  ? field.onChange([...field.value, item.id])
                                  : field.onChange(
                                    field.value?.filter(
                                      (value: string) => value !== item.id
                                    )
                                  )
                              }}
                            />
                          </FormControl>
                          <FormLabel className="font-normal text-xl">
                            {item.label}
                          </FormLabel>
                        </FormItem>
                      )
                    }}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="user"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="User" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="passwordConfirm"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="password" placeholder="Confirm Password" {...field} className="h-[2.6rem] border-0 text-[#E7E7E7] text-xl bg-[#474649]" />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>

      </form >
    </Form>
  )
}

