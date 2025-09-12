import { createFileRoute } from '@tanstack/react-router'
import StudentsPage from '@/pages/StudentsPage'

export const Route = createFileRoute('/_dashboard/__layout/students')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <StudentsPage />
    </>
  )
}
