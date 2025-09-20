import { createFileRoute } from '@tanstack/react-router'
import ExamTableForStudents from '@/features/exams/components/ExamTableForStudents'

export const Route = createFileRoute('/_dashboard/__layout/currentexams')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <ExamTableForStudents />
    </>
  )
}
