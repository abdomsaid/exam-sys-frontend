import { createFileRoute } from '@tanstack/react-router'
import QuestionsPage from '@/pages/QuestionsPage'

export const Route = createFileRoute('/_dashboard/__layout/questions')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <QuestionsPage />
    </div>
  )
}
