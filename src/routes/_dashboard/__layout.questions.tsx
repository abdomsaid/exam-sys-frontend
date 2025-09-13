import { createFileRoute, redirect } from '@tanstack/react-router'
import QuestionsPage from '@/pages/QuestionsPage'

export const Route = createFileRoute('/_dashboard/__layout/questions')({
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
    <div>
      <QuestionsPage />
    </div>
  )
}
