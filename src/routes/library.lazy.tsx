import { Library } from '@/app/Library'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/library')({
  component: Library,
})