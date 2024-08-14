import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/videos-to-review')({
  component: () => <div>Hello /videosToReview/laze!</div>
})