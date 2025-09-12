import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import InputExamForm from './InputExamForm'

import SuccessNotification from './SuccessNotification'
import type { ExamType, formData } from '@/shared/types'

type Props = {
  setExamsList: React.Dispatch<React.SetStateAction<Array<ExamType>>>
  examsListLength: number
  type: 'add' | 'edit'
}
export default function ExamsForm({
  setExamsList,
  examsListLength,
  type,
}: Props) {
  const {
    handleSubmit,
    register,
    trigger,
    formState: { errors },
  } = useForm<formData>()
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  const onSubmit = async (data: formData) => {
    const isValid = await trigger()
    if (isValid) {
      const startDate = new Date(data.startDate).toISOString().toString()
      const dueDate = new Date(data.startDate).toISOString().toString()
      const newExam = {
        ...data,
        startDate,
        dueDate,
        id: examsListLength + 1,
      }
      setExamsList((prev) => [...prev, newExam])
      setShowSuccess(true)
    }
  }
  // sus notification
  useEffect(() => {
    let timer: number
    if (showSuccess) {
      timer = setTimeout(() => {
        setShowSuccess(false)
        return () => clearTimeout(timer)
      }, 1000)
    }
  }, [showSuccess])

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800 mb-1">Submit Exam</h1>
      <SuccessNotification showSuccess={showSuccess} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          <InputExamForm
            type="number"
            placeholder="Number of questions"
            {...register('numOfQs', {
              valueAsNumber: true,
              required: 'Number of questions is required',
              max: { value: 50, message: '*Must be less than 50 Questions' },
              min: { value: 10, message: '*Must be greater than 10 Questions' },
            })}
            errorMessage={errors.numOfQs?.message}
          />

          <InputExamForm
            type="number"
            placeholder="Duration"
            {...register('duration', {
              valueAsNumber: true,
              required: 'Duration is required',
              max: { value: 50, message: '*Must be less than 100 Mins' },
              min: { value: 10, message: '*Must be greater than 10 Mins' },
            })}
            errorMessage={errors.duration?.message}
          />
          <InputExamForm
            type="datetime-local"
            placeholder="Start Date"
            {...register('startDate', {
              valueAsDate: true,
              required: 'Start Date is required',

              // TODO date validation
            })}
            errorMessage={errors.startDate?.message}
          />
          <InputExamForm
            type="datetime-local"
            placeholder="Due Date"
            {...register('dueDate', {
              valueAsDate: true,
              required: 'Due Date is required',
              // TODO date validation
            })}
            errorMessage={errors.startDate?.message}
          />
          <button
            type="submit"
            className=" w-1/4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 [transition:background-color_0.3s_ease]"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  )
}
