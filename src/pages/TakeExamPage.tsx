import type { ExamType } from '@/shared/types'
import TakeExamForm from '@/features/exams/components/TakeExamForm'

type Props = {
  exam: ExamType
}

export default function TakeExamPage({ exam }: Props) {
  return (
    <div className="w-full min-h-screen bg-[#4a90e2] flex justify-center py-10">
      <div className="w-2/3 bg-white border border-gray-300 rounded-lg shadow-2xl px-10 py-5">
        <TakeExamForm exam={exam} />
      </div>
    </div>
  )
}
