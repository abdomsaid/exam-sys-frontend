import { createFileRoute, redirect } from '@tanstack/react-router'
import ExamsPage from '@/pages/ExamsPage'

export const Route = createFileRoute('/_dashboard/__layout/exams')({
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
      <ExamsPage />
    </>
  )
}
