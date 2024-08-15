import { VideosReview } from '@/app/VideosReview'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/videos-to-review')({
  component: VideosReview,
})