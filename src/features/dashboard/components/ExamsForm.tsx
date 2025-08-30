import { useForm } from 'react-hook-form'
import InputExamForm from './InputExamForm'

type formData = {
  numOfQs: number
  duration: number
  startDate: Date
  dueDate: Date
}
export default function ExamsForm() {
  const {
    handleSubmit,
    register,
    trigger,
    watch,
    formState: { errors },
  } = useForm<formData>()

  const onSubmit = (data: formData) => {
    console.log(data)
  }
  return (
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
  )
}
