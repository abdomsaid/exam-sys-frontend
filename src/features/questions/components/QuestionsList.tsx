import { useState } from 'react'
import QuestionContainer from './QuestionContainer'
import type { QuestionsType, StateType } from '@/shared/types'
import Conformation from '@/shared/Confirmation'

type Props = {
  questionsList: Array<QuestionsType>
  setQuestionsList: React.Dispatch<React.SetStateAction<Array<QuestionsType>>>
}

export default function QuestionsList({
  questionsList,
  setQuestionsList,
}: Props) {
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
    setQuestionsList((prev) =>
      prev.filter((question) => question.id !== confirmation.id),
    )
    setConfirmation({ type: null, show: false, id: null })
  }

  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-4">
      {questionsList.length === 0 ? (
        <div className="text-lg font-bold">No questions found</div>
      ) : (
        <>
          {questionsList.map((question) => (
            <QuestionContainer
              key={question.id}
              question={question}
              onConfirmation={onConfirmation}
            />
          ))}
          {confirmation.show && (
            <Conformation
              message="Are you sure you want to delete this question"
              onDelete={onDelete}
              cancelAction={onCancelConfirmation}
            />
          )}
        </>
      )}

      {/* {showConfirmation.show && showConfirmation.type === 'delete' && (
        <DeleteConformation
          cancelAction={cancelAction}
          confirmAction={confirmAction}
        />
      )} */}
    </div>
  )
}
