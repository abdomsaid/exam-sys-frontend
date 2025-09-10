type Props = {
  message: string
  onDelete: () => void
  cancelAction: () => void
}

export default function Conformation({
  message,
  onDelete,
  cancelAction,
}: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <p className="text-lg font-bold mb-4">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-300  "
          >
            Yes
          </button>
          <button
            onClick={cancelAction}
            className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-300"
          >
            No
          </button>
        </div>
      </div>
    </div>
  )
}
