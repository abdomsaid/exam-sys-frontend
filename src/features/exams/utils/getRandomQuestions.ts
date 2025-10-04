import { questions } from '@/data'

export function getRandomQuestions(count: number) {
  const arr = [...questions]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }

  // Return the random slice
  return arr.slice(0, count)
}
