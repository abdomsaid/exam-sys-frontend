type Props = {
  question: {
    question: string
    choices: Array<string>
    id: string
  }
  index: number
  register: any
}

export default function ExamQuestion({ question, index, register }: Props) {
  return (
    <div className="bg-[#f9f9ff] border border-solid rounded-md border-[#ddd] flex justify-start flex-col my-3 p-3.5">
      <p className="p-3 text-2xl font-bold">
        Q{index + 1}: {question.question}
      </p>
      <div className="flex gap-4 p-3 justify-around">
        {question.choices.map((choice) => (
          <label className="p-1 text-xl" key={choice}>
            <input
              type="radio"
              value={choice}
              className="mr-1 w-6"
              {...register(`correctAnswers.${index}.value`)}
            />
            {choice}
          </label>
        ))}
      </div>
    </div>
  )
}
