import TableHeader from './TableHeader'
import { TrData } from './TrData'
import { exams as examsList } from '@/data'

export default function ExamTableForStudents() {
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Exams</h1>
      {examsList.length === 0 ? (
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          No exams found
        </h1>
      ) : (
        <>
          <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6 ">
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left border-collapse">
                <TableHeader />
                <tbody>
                  {examsList.map((exam) => (
                    <TrData key={exam.id} exam={exam} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  )
}
