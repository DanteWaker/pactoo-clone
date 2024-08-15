import * as React from "react"

import { cn } from "@/lib/utils"
import { MagnifyingGlass } from "@phosphor-icons/react"

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className={cn(
        "flex border border-input justify-center items-center",
        className
      )}>
        <input
          type={type}
          className={cn(
            "h-10 w-full rounded-md bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          {...props}
        />
        <MagnifyingGlass className="h-[1.6rem] w-[1.6rem] mr-6" />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
