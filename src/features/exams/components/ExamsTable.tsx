import { useState } from 'react'
import TableHeader from './TableHeader'
import { TrData } from './TrData'
import type { ExamType, StateType } from '@/shared/types'

import Conformation from '@/shared/Confirmation'

type Props = {
  type?: 'take'
  examsList: Array<ExamType>
  setExamsList: React.Dispatch<React.SetStateAction<Array<ExamType>>>
}
export default function ExamsTable({ examsList, setExamsList }: Props) {
  const [confirmation, setConfirmation] = useState<StateType>({
    type: null,
    show: false,
    id: null,
  })

  function onConfirmation(type: StateType['type'], id: StateType['id']): void {
    setConfirmation({ type, show: true, id })
  }

  function onCancelConfirmation(): void {
    setConfirmation({ type: null, show: false, id: null })
  }

  function onDelete() {
    setExamsList((prev) => prev.filter((exam) => exam.id !== confirmation.id))
    setConfirmation({ type: null, show: false, id: null })
  }

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
                    <TrData
                      key={exam.id}
                      exam={exam}
                      handleConfirmation={onConfirmation}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {confirmation.show && (
            <Conformation
              message={'Are you sure you want to delete this exam?'}
              cancelAction={onCancelConfirmation}
              onDelete={onDelete}
            />
          )}
        </>
      )}
    </>
  )
}
/*

{showConfirmation.show && showConfirmation.type === 'delete' && (
            <DeleteConformation
              handleDelete={handleDelete}
              cancelAction={cancelAction}
            />
          )}
          {showConfirmation.show && showConfirmation.type === 'edit' && (
            <EditConformation
              handleEdit={handleEdit}
              cancelAction={cancelAction}
              exam={exam}
              valErrors={valErrors}
            />
          )}

 */
