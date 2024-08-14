import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/pacttos')({
  component: () => <div>Hello /pacttos!</div>
})