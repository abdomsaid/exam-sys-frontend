import { useState } from 'react'
import type { QuestionsType } from '@/shared/types'
import { questions } from '@/data'

import QuestionsList from '@/features/questions/components/QuestionsList'
import QuestionForm from '@/features/questions/components/QuestionForm'

type State = 'add-questions' | 'view-questions'

export default function QuestionsPage() {
  const [activeTab, setActiveTab] = useState<State>('add-questions')
  const [questionsList, setQuestionsList] =
    useState<Array<QuestionsType>>(questions)

  return (
    <div className=" p-8 w-full border-2 border-gray-200 rounded-xl">
      <div className="flex border-b">
        <button
          className={`w-1/2 py-2 text-center text-gray-600 ${
            activeTab === 'add-questions'
              ? 'text-gray-900 border-b- border-b-blue-500 focus:outline-none'
              : ''
          } hover:text-gray-900 border-b-2 border-transparent hover:border-blue-500 focus:outline-none transition duration-300 ease-in-out`}
          onClick={() => setActiveTab('add-questions')}
        >
          Add Question
        </button>
        <button
          className={`w-1/2 py-2 text-center text-gray-600 ${
            activeTab == 'view-questions'
              ? 'text-gray-900 border-b-2 border-b-blue-500 focus:outline-none'
              : ''
          } hover:text-gray-900 border-b-2 border-transparent hover:border-blue-500 focus:outline-none transition duration-300 ease-in-out`}
          onClick={() => setActiveTab('view-questions')}
        >
          View Questions
        </button>
      </div>

      <div className="mt-3 ">
        {activeTab == 'add-questions' ? (
          <QuestionForm
            setQuestionsList={setQuestionsList}
            questionsLength={questionsList.length}
          />
        ) : (
          <QuestionsList
            questionsList={questionsList}
            setQuestionsList={setQuestionsList}
          />
        )}
      </div>
    </div>
  )
}
