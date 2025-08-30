type Props = {
  type: 'number' | 'datetime-local'
  placeholder: string
  errorMessage?: string
}

export default function InputExamForm({
  type,
  placeholder,
  errorMessage,
  ...props
}: Props) {
  const inputStyle =
    'w-[45%] mt-1 block  px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 '

  return (
    <div className="flex space-x-2">
      <input
        type={type}
        placeholder={placeholder}
        className={`${inputStyle} ${
          errorMessage
            ? 'border-red-500 focus:border-red-500'
            : 'border-gray-300 focus:border-indigo-500'
        } `}
        {...props}
      />
      {errorMessage && <h3 className="text-red-500 mt-3">{errorMessage}</h3>}
    </div>
  )
}

/* ${
        props.errorType
          ? 'border-red-500 focus:border-red-500'
          : 'border-gray-300 focus:border-indigo-500'
      }`} */
