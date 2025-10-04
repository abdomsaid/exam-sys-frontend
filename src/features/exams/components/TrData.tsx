import { useNavigate } from '@tanstack/react-router'
import type { ExamType, StateType, User } from '@/shared/types'

type Exam = {
  exam: ExamType
  handleConfirmation?: (type: StateType['type'], id: StateType['id']) => void
}

export function TrData({ exam, handleConfirmation }: Exam) {
  const navigation = useNavigate()
  const user = JSON.parse(localStorage.getItem('user') as string) as User

  const tdStyle = 'px-4 py-2 border-b'
  const buttonStyle = 'text-white px-3 py-1 rounded-md'

  const onTakeExam = (id: number): void => {
    window.location.href = `/exam/${id}`
  }

  return (
    <tr className="hover:bg-gray-100">
      <td className={tdStyle}>{exam.startDate}</td>
      <td className={tdStyle}>{exam.dueDate}</td>
      <td className={tdStyle}>{exam.numOfQs}</td>
      <td className={tdStyle}>{exam.duration} mins</td>
      <td className={`${tdStyle} flex space-x-2`}>
        {user.role === 'admin' ? (
          <button
            onClick={() => handleConfirmation?.('delete', exam.id)}
            className={`bg-red-500 ${buttonStyle} hover:bg-red-600 transition-colors duration-200`}
          >
            X
          </button>
        ) : (
          <button
            className={`bg-blue-500 ${buttonStyle} hover:bg-blue-600 transition-colors duration-200`}
            onClick={() => onTakeExam(exam.id)}
          >
            Take Exams
          </button>
        )}
      </td>
    </tr>
  )
}

//  <button
//    className={`bg-blue-500 ${buttonStyle} hover:bg-blue-600 transition-colors duration-200`}
//  >
//    Edit
//  </button>
