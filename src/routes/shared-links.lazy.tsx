import { SharedLinks } from '@/app/SharedLinks'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/shared-links')({
  component: SharedLinks,
})