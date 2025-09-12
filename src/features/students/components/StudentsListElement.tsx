import type { userType } from '@/shared/types'

type Props = {
  student: Omit<userType, 'password'>
  onExpel: (username: string) => void
}
export default function StudentsListElement({ student, onExpel }: Props) {
  return (
    <div className="max-w-3xl mx-auto  ">
      <li className="py-2 flex justify-between ">
        <span className="text-lg font-medium text-gray-700">
          {student.fullName}
        </span>
        <button
          className="px-4 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
          onClick={() => onExpel(student.username)}
        >
          Expel
        </button>
      </li>
    </div>
  )
}
