type Props = {
  showScore: { show: boolean; score: number; message?: string }
  numOfQs: number
}

export default function ShowScore({ showScore, numOfQs }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div
        className="rounded-lg bg-white p-11 shadow-lg flex
      flex-col items-center"
      >
        {showScore.message && (
          <p className="text-lg font-extrabold mb-4">{showScore.message}</p>
        )}
        <p className="text-lg font-bold mb-4">
          Your Score is {showScore.score} out of {numOfQs}
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-gray-300 px-4 py-2 rounded-md hover:bg-gray-400 transition-colors duration-300"
            onClick={() => (window.location.href = '/')}
          >
            Main Menu
          </button>
        </div>
      </div>
    </div>
  )
}
