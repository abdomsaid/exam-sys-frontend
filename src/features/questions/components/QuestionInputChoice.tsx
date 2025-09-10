type Props = {
  inputStyle: string
  choicesLength: number
  onDelete: (Q: number | string) => void
  choiceKey: number | string
  inputConfigs: any
  errorMsg?: any | null
  watch: any
}
//  TODO UNIQUE CHOICES

export default function QuestionInputChoice({
  inputStyle,
  choicesLength,
  onDelete,
  choiceKey,
  inputConfigs,
  errorMsg,
  watch,
  ...props
}: Props) {
  const valError = errorMsg.choices?.[choiceKey]?.message || undefined

  return (
    <tr>
      <td className="text-center">
        <input
          type="text"
          className={`${inputStyle} ${valError ? 'border-red-500' : ''}`}
          {...props}
          {...inputConfigs.input}
        />
        {valError && (
          <h1 className="text-red-500 ">{`-${choicesLength > 2 ? valError : 'Fill this field'}`}</h1>
        )}
      </td>
      <td className="text-center">
        <input
          type="radio"
          value={watch(`choices.${choiceKey}`)}
          {...inputConfigs.radio}
          //   onChange={() => onChange(Q)}
          className="align-middle"
          //   checked={correctAnswer}
        />
      </td>
      <td className="text-center">
        {choicesLength > 2 && (
          <button
            type="button"
            className="bg-red-600 text-white rounded ml-5 w-6 h-6 flex items-center justify-center hover:bg-red-700 transition-colors"
            onClick={() => onDelete(choiceKey)}
          >
            X
          </button>
        )}
      </td>
    </tr>
  )
}
