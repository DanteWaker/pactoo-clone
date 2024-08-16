
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { routes } from '@/utils/data'
import { createRootRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import { memo, useState } from 'react'

export const Route = createRootRoute({
  component: memo(RootRouteComponent)

})

function RootRouteComponent() {

  const [open, setOpen] = useState(true)
  const router = useRouterState();

  return (
    <>
      <div className='flex w-full'>
        <nav className={`flex flex-col px-4 py-8 gap-2 h-[100vh] bg-foreground transition-all duration-150
          ${open ? 'w-[17rem]' : 'w-[5rem]'}
          `}>
          <aside className='flex justify-around items-center mb-8'>
            <img src="/public/pactto-logo.svg" alt="Pactto logo" className={`w-[140px] h-[45px] ${!open && 'hidden'}`} />
            <button onClick={() => setOpen(prevState => !prevState)} className='relative flex flex-col justify-center items-center gap-1 w-[2rem] h-[2rem]'>
              <div className={`h-[5px] w-[2rem] rounded-full transition-all duration-150  bg-white ${open && 'absolute rotate-45'}`} />
              <div className={`h-[5px] w-[2rem] rounded-full transition-all duration-150 bg-white ${open && 'hidden'}`} />
              <div className={`h-[5px] w-[2rem] rounded-full transition-all duration-150 bg-white ${open && 'absolute -rotate-45 left-0'}`} />
            </button>
          </aside>

          <Link to="/profile" className="w-full flex justify-start items-center mb-16 gap-4">
            <Avatar className="h-[3rem] w-[3rem]">
              <AvatarImage src="/avatar.png" />
              <AvatarFallback>BN</AvatarFallback>
            </Avatar>
            <div className={`flex flex-col justify-center items-start ${open ? '' : 'hidden'}`}>
              <span className='text-white text-md'>Denner Nascimento</span>
              <span className='bg-primary p-1 text-xs text-white rounded-[.2rem]'>PACTTO PRO</span>
            </div>
          </Link>

          <>
            {routes.map(route => (
              <Link key={route.url} to={route.url}
                className={`transition-all duration-150 ${open ? 'w-[15rem]' : 'w-[3rem]'} p-2
                ${router.location.pathname === route.url && 'bg-purple-400/10 text-[#1dbba5]'}
                `} >
                <div className='flex flex-row justify-start items-center gap-2 w-[15rem]'>
                  {route.icon}
                  <span className={`${!open && 'hidden'}`}>
                    {route.name}
                  </span>
                </div>

              </Link>
            ))}
          </>
        </nav>

        <main className='p-8 w-full h-[100vh] overflow-auto'>
          <Outlet />
        </main>
      </div >
    </>
  )
}