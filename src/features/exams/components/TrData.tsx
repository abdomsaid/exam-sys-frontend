import type { ExamType, StateType } from '@/shared/types'

type Exam = {
  exam: ExamType
  handleConfirmation: (type: StateType['type'], id: StateType['id']) => void
}

export function TrData({ exam, handleConfirmation }: Exam) {
  const tdStyle = 'px-4 py-2 border-b'
  const buttonStyle = 'text-white px-3 py-1 rounded-md'

  return (
    <tr className="hover:bg-gray-100">
      <td className={tdStyle}>{exam.startDate}</td>
      <td className={tdStyle}>{exam.dueDate}</td>
      <td className={tdStyle}>{exam.numOfQs}</td>
      <td className={tdStyle}>{exam.duration} mins</td>
      <td className={`${tdStyle} flex space-x-2`}>
        <button
          onClick={() => handleConfirmation('delete', exam.id)}
          className={`bg-red-500 ${buttonStyle} hover:bg-red-600 transition-colors duration-200`}
        >
          X
        </button>
      </td>
    </tr>
  )
}

//  <button
//    className={`bg-blue-500 ${buttonStyle} hover:bg-blue-600 transition-colors duration-200`}
//  >
//    Edit
//  </button>
