import { PersonalInfo } from '@/app/PerfonalInfo'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/personal-info')({
  component: PersonalInfo,
})