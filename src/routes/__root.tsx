
import { Browsers, Chat, GearSix, House, MonitorPlay, Package, PlayCircle, Queue, Share, UserGear } from '@phosphor-icons/react'
import { createRootRoute, Link, Outlet, useRouterState } from '@tanstack/react-router'
import { memo, useState } from 'react'

export const Route = createRootRoute({
  component: memo(RootRouteComponent)

})


function RootRouteComponent() {

  const [open, setOpen] = useState(true)
  const router = useRouterState();

  const routes = [
    {
      name: 'Home',
      icon: <House className='h-full w-[2rem]' weight="fill" />,
      url: '/'
    },
    {
      name: 'Pacttos (Chats)',
      icon: <Chat className='h-full w-[2rem]' weight="fill" />,
      url: '/pacttos'
    },
    {
      name: 'Items to review',
      icon: <PlayCircle className='h-full w-[2rem]' weight="fill" />,
      url: '/videos-to-review'
    },
    {
      name: 'Web links you created',
      icon: <Share className='h-full w-[2rem]' weight="fill" />,
      url: '/shared-links'
    },
    {
      name: 'Personal Information',
      icon: <UserGear className='h-full w-[2rem]' weight="fill" />,
      url: '/personal-info'
    },
    {
      name: 'Review packages for sale',
      icon: <Package className='h-full w-[2rem]' weight="fill" />,
      url: '/packages'
    },
    {
      name: 'Pactto website',
      icon: <Browsers className='h-full w-[2rem]' weight="fill" />,
      url: '/profile'
    },
    {
      name: 'Reference video library',
      icon: <MonitorPlay className='h-full w-[2rem]' weight="fill" />,
      url: '/library'
    },
    {
      name: 'Subscription',
      icon: <Queue className='h-full w-[2rem]' weight="fill" />,
      url: '/subscription'
    },
    {
      name: 'Review Settings',
      icon: <GearSix className='h-full w-[2rem]' weight="fill" />,
      url: '/review-settings'
    },
  ]

  return (
    <>
      <div className='flex w-full'>
        <nav className={`flex flex-col p-4 gap-2 h-[100vh] bg-[#424242] transition-all duration-150
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
      </div>
    </>
  )
}