import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/personal-info')({
  component: () => <div>Hello /personal-info!</div>
})