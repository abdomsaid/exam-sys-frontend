import { createFileRoute, redirect } from '@tanstack/react-router'
import StudentsPage from '@/pages/StudentsPage'

export const Route = createFileRoute('/_dashboard/__layout/students')({
  component: RouteComponent,
  beforeLoad: () => {
    const user = localStorage.getItem('user')
    if (!(JSON.parse(user as string).role === 'admin')) {
      throw redirect({ to: '/' })
    }
  },
})

function RouteComponent() {
  return (
    <>
      <StudentsPage />
    </>
  )
}
