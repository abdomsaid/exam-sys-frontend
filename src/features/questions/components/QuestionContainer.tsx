import type { QuestionsType, StateType } from '@/shared/types'

type Props = {
  question: QuestionsType
  onConfirmation: (type: StateType['type'], id: StateType['id']) => void
}
export default function QuestionContainer({ question, onConfirmation }: Props) {
  return (
    <div className="bg-[#f9f9ff] border border-solid rounded-md border-[#ddd] flex flex-col">
      <div className="p-3 flex flex-col flex-grow">
        <h2>Question: {`${question.question}`}</h2>
        <h2>Choices:</h2>
        <div className="grid gap-2 grid-cols-2 ">
          <div>
            {question.choices.map((choice) => (
              <h3
                key={choice}
                className={`${
                  question.correctAnswer === choice
                    ? 'p-1 border border-solid border-green-600 rounded-md'
                    : ''
                }`}
              >
                {choice}
              </h3>
            ))}
          </div>
        </div>

        <div className="flex gap-2 justify-end mt-auto min-h-[50px] p-2">
          <button
            className="bg-red-500 hover:bg-red-600 transition-colors duration-200 text-white px-3 py-1 rounded-md"
            onClick={() => onConfirmation('delete', question.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

/* edit button
 <button
            className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white px-3 py-1 rounded-md"
            // onClick={() => handleShowConformation(question, 'edit')}
          >
            Edit
          </button>


 */
