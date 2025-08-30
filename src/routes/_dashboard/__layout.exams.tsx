import { createFileRoute } from '@tanstack/react-router'
import ExamsPage from '@/pages/ExamsPage'

export const Route = createFileRoute('/_dashboard/__layout/exams')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ExamsPage />
    </>
  )
}
