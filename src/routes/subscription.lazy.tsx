import { Subscription } from '@/app/Subscription'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/subscription')({
  component: Subscription,
})