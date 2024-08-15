import { Pacttos } from '@/app/Pacttos'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/pacttos')({
  component: Pacttos,
})