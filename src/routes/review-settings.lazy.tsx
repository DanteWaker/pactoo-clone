import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/review-settings')({
  component: () => <div>Hello /review-settings!</div>
})