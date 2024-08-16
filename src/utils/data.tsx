import { Browsers, Chat, House, MonitorPlay, PlayCircle, Queue, Share, UserGear } from '@phosphor-icons/react'

export const features = [
  { id: 1, valor: "Full access to the Pactto app on iPhones, iPads, Android, Mac, Windows, and Web" },
  { id: 2, valor: "Max screen recording duration on Pactto Desktop: unlimited" },
  { id: 3, valor: "Max review duration on mobile: unlimited" },
  { id: 4, valor: "Max review duration on Pactto Web: 12 minutes" },
  { id: 5, valor: "Max review duration on Pactto Desktop: 20 minutes" },
  { id: 6, valor: "Manage and use your reference video library on the Web and Desktop" },
  { id: 7, valor: "Review videos uploaded by you, using the browser" },
  { id: 8, valor: "Add your own logo to create branded reviews" },
  { id: 9, valor: "If you sell reviews, the Pactto take rate for paid reviews is 3%, instead of 12% for free users" },
  { id: 10, valor: "Integrate Pactto to your website so anyone can send, and pay, for your video feedback" },
  { id: 11, valor: "Share your videos with others (no more sending video files around)" }
];

export const routes = [
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
]