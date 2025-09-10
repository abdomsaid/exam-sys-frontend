import { useState } from 'react'
import { useForm } from 'react-hook-form'
import QuestionInputChoice from './QuestionInputChoice'
import type { ChoicesType, QuestionsType } from '@/shared/types'

type Props = {
  setQuestionsList: React.Dispatch<React.SetStateAction<Array<QuestionsType>>>
  questionsLength: number
}

const DEFAULT_CHOICES = {
  1: { text: '', correctAnswer: false },
  2: { text: '', correctAnswer: false },
}

export default function QuestionForm({
  setQuestionsList,
  questionsLength,
}: Props) {
  const labelStyle = 'text-xl font-bold text-gray-800 mb-1'
  const inputStyle =
    ' mt-1 block  px-3 py-2 rounded-md border shadow-sm focus:outline-none focus:ring-indigo-500 '

  const [showSuccess, setShowSuccess] = useState<boolean>(false)
  const [choices, setChoices] = useState<ChoicesType>(DEFAULT_CHOICES)
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
    control,
    reset,
  } = useForm()

  function handleAddChoice() {
    const newKey =
      Object.keys(choices).length == 0
        ? 1
        : (Object.keys(choices).length + 1) * 1

    setChoices((prev) => ({
      ...prev,
      [newKey]: { text: '', correctAnswer: false },
    }))
  }
  function handleDeleteChoice(Q: number | string) {
    setChoices((prev) => {
      const newChoices = { ...prev }
      delete newChoices[Q]
      return newChoices
    })
    control.unregister(`choices.${Q}`)
    // TODO make correct answer radios not reset
    control.unregister(`correctAnswer`)
  }

  const onSubmit = async (data: any) => {
    const isValid = await trigger()
    if (isValid) {
      const newQ = { ...data, id: questionsLength + 1 }
      console.log(newQ)
      setQuestionsList((prev) => [...prev, newQ])
      // reset()
      setChoices(DEFAULT_CHOICES)
    }
  }

  function handleReset() {
    reset()
    setChoices(DEFAULT_CHOICES)
  }

  function inputConfigs(key: number | string) {
    return {
      input: {
        ...register(`choices.${key}`, {
          required: 'Delete or fill this answer.',
        }),
      },
      radio: {
        ...register('correctAnswer', {
          required: 'Choose the correct answer.',
        }),
      },
    }
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Submit Question</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <div
              className={`text-green-600 p-1 bg-green-200 border-2 text-center text-bold w-[60%] border-green-400 rounded-lg   transition-transform duration-250 ease-out ${
                showSuccess
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 -translate-y-2'
              }`}
            >
              Successfully
              {/* {type === 'edit' ? 'updated' : 'created'} */}
            </div>
            {errors.correctAnswer && (
              <h1 className="text-red-500 ">{`-${errors.correctAnswer.message}`}</h1>
            )}

            <label className={labelStyle}>Question:</label>
            {/* {errors.Q && <h1 className="text-red-500">{`-${errors.Q}`}</h1>} */}
            <input
              type="text"
              {...register('question', { required: 'Question is required.' })}
              className={`${inputStyle} w-[45%] ${errors.question?.message ? 'border-red-500' : ''}`}
              // onBlur={(e) => handleQuestionBlur(e)}
              // defaultValue={type === 'edit' ? question.question : ''}
            />
          </div>
          <div className="flex flex-col">
            <label className={labelStyle}>Choices</label>
            <div className=" w-[45%] p-3">
              <table>
                <thead>
                  <tr>
                    <th>Choice</th>
                    <th>Correct Answer</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(choices).map((key) => {
                    return (
                      <QuestionInputChoice
                        onDelete={handleDeleteChoice}
                        key={key}
                        choicesLength={Object.keys(choices).length}
                        inputStyle={inputStyle}
                        choiceKey={key}
                        inputConfigs={inputConfigs(key)}
                        errorMsg={errors}
                        watch={watch}
                        //   onBlur={handleBlur}
                        //   onChange={handleCorrectAnswer}
                        //   valError={choices[key].valError}
                        //   type={type}
                        //   defaultValue={type === 'edit' ? choices[key].text : ''}
                        //   correctAnswer={choices[key].correctAnswer}
                        //   question={choices[key]}
                      />
                    )
                  })}
                </tbody>
              </table>
              <div className="flex justify-center m-3">
                <button
                  type="button"
                  onClick={handleAddChoice}
                  className=" bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 [transition:background-color_0.3s_ease]"
                >
                  Add choice
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <button
              className=" w-[45%] bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out"
              type="submit"
            >
              Submit
            </button>
            <button
              className="mt-3 w-[45%] bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300 ease-in-out"
              type="reset"
              onClick={handleReset}
            >
              {/* {type === 'edit' ? 'Cancel' : 'Reset'} */}
              Reset
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
