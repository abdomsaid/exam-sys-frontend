import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { getRandomQuestions } from '../utils/getRandomQuestions'
import ExamQuestion from './ExamQuestion'
import ExamTImer from './ExamTImer'

import ShowScore from './ShowScore'

import type { ExamType } from '@/shared/types'
import { questions } from '@/data'

type props = {
  exam: ExamType
}

export default function TakeExamForm({ exam }: props) {
  const [examQuestions] = useState(() => getRandomQuestions(exam.numOfQs))
  const [showScore, setShowScore] = useState<{
    show: boolean
    score: number
    message?: string
  }>({
    show: false,
    score: 0,
  })

  const defaultCorrectAnswers = examQuestions.map((q) => {
    return { id: String(q.id), value: null }
  })

  const { register, handleSubmit } = useForm({
    defaultValues: { correctAnswers: defaultCorrectAnswers },
  })

  function onSubmit({ correctAnswers }: any) {
    let score = 0
    correctAnswers.forEach((answer: { value: string | null; id: string }) => {
      const question = questions.find((q) => q.id === answer.id)
      if (question?.correctAnswer === answer.value) {
        score++
      }
    })

    setShowScore({ show: true, score })
  }

  return (
    <>
      <div className="flex justify-center">
        <ExamTImer duration={exam.duration} setShowScore={setShowScore} />
      </div>
      <div className="text-center py-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          {examQuestions.map((question, index) => (
            <ExamQuestion
              key={question.id}
              question={question}
              index={index}
              register={register}
            />
          ))}
          <button
            type="submit"
            className="w-full p-3 bg-[#4a90e2] text-[#ffffff] border-none rounded-[4px] text-[1rem] font-bold cursor-pointer mt-4 transition duration-300 ease-in-out hover:bg-[#7b4397]"
          >
            Submit
          </button>
        </form>
      </div>
      {showScore.show && (
        <ShowScore showScore={showScore} numOfQs={exam.numOfQs} />
      )}
    </>
  )
}
