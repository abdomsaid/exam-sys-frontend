import { createFileRoute, redirect } from '@tanstack/react-router'
import { exams } from '@/data'
import TakeExamPage from '@/pages/TakeExamPage'

export const Route = createFileRoute('/_exam/exam/$id')({
  component: RouteComponent,
  beforeLoad: () => {
    const user = localStorage.getItem('user')
    if (!(JSON.parse(user as string).role === 'student')) {
      throw redirect({ to: '/' })
    }
  },
})

function RouteComponent() {
  const { id } = Route.useParams()

  if (isNaN(Number(id))) {
    return <div>Invalid id</div>
  }
  const exam = exams.find((el) => el.id === Number(id))
  if (!exam) {
    return <div>Exam not found</div>
  }

  return <TakeExamPage exam={exam} />
}
