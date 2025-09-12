import { useState } from 'react'
import type { ExamType } from '@/shared/types'
import ExamsForm from '@/features/exams/components/ExamsForm'
import ExamsTable from '@/features/exams/components/ExamsTable'
import { exams } from '@/data'

type State = 'add-exam' | 'view-exams'
// TODO make add and delete here reference with functions
export default function ExamsPage() {
  const [activeTab, setActiveTab] = useState<State>('add-exam')
  const [examsList, setExamsList] = useState<Array<ExamType>>(exams)

  return (
    <>
      <div className=" p-8 w-full border-2 border-gray-200 rounded-xl">
        <div className="flex border-b">
          <button
            className={`w-1/2 py-2 text-center text-gray-600 ${
              activeTab === 'add-exam'
                ? 'text-gray-900 border-b- border-b-blue-500 focus:outline-none'
                : ''
            } hover:text-gray-900 border-b-2 border-transparent hover:border-blue-500 focus:outline-none transition duration-300 ease-in-out`}
            onClick={() => setActiveTab('add-exam')}
          >
            Add Exam
          </button>
          <button
            className={`w-1/2 py-2 text-center text-gray-600 ${
              activeTab == 'view-exams'
                ? 'text-gray-900 border-b-2 border-b-blue-500 focus:outline-none'
                : ''
            } hover:text-gray-900 border-b-2 border-transparent hover:border-blue-500 focus:outline-none transition duration-300 ease-in-out`}
            onClick={() => setActiveTab('view-exams')}
          >
            View Exams
          </button>
        </div>

        <div className="mt-3 ">
          {activeTab === 'add-exam' ? (
            <ExamsForm
              type="add"
              setExamsList={setExamsList}
              examsListLength={examsList.length}
            />
          ) : (
            <ExamsTable examsList={examsList} setExamsList={setExamsList} />
          )}
        </div>
      </div>
    </>
  )
}
// {
//   activeTab == 'add-exam' && (
//     <ExamsForm
//       type="add"
//       setExamsList={setExamsList}
//       examsListLength={examsList.length}
//     />
//   )
// }
// {
//   activeTab == 'view-exams' && (
//     <ExamsTable examsList={examsList} setExamsList={setExamsList} />
//   )
// }
