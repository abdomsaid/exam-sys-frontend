import { useEffect, useState } from 'react'

type props = {
  duration: number
  setShowScore: React.Dispatch<
    React.SetStateAction<{ show: boolean; score: number; message?: string }>
  >
}

export default function ExamTImer({ duration, setShowScore }: props) {
  const [mins, setMins] = useState<number>(1)
  const [secs, setSecs] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      if (secs > 0) {
        setSecs(secs - 1)
      }
      if (secs === 0 && mins > 0) {
        setMins(mins - 1)
        setSecs(59)
      }
      if (mins === 0 && secs === 0) {
        clearInterval(timer)
        setShowScore({ show: true, score: 0, message: 'Time is up' })
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [mins, secs])

  return (
    <div className="bg-white border-4 rounded-lg p-2 w-auto flex justify-center flex-col">
      <p className="text-5xl font-bold">
        {mins < 10 ? '0' : ''}
        {mins}:{secs < 10 ? '0' : ''}
        {secs}
      </p>
    </div>
  )
}
