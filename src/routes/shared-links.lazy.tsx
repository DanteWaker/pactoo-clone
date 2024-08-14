import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/shared-links')({
  component: () => <div>Hello /shared-links!</div>
})