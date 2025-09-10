type Props = { showSuccess: boolean }
export default function SuccessNotification({ showSuccess }: Props) {
  return (
    <div className=" h-10 mb-1 w-[45%]">
      <div
        className={`text-green-600 p-1 bg-green-200 border-2 text-center text-bold w-[60%] border-green-400 rounded-lg   transition-transform duration-250 ease-out ${
          showSuccess ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
        }`}
      >
        Successfully created
      </div>
    </div>
  )
}
