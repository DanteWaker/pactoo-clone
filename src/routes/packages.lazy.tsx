import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/packages')({
  component: () => <div>Hello /packages!</div>
})