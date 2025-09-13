import { createFileRoute } from '@tanstack/react-router'
import type { userType } from '@/shared/types'
import StudentIndexPage from '@/pages/StudentIndexPage'
import AdminIndexPage from '@/pages/AdminIndexPage'

export const Route = createFileRoute('/_dashboard/__layout/')({
  component: App,
})
type User = Omit<userType, 'password'>
function App() {
  const user = JSON.parse(localStorage.getItem('user') || 'null') as User

  return (
    <>
      {user.role === 'student' ? (
        <StudentIndexPage />
      ) : (
        <>
          <AdminIndexPage />
        </>
      )}
    </>
  )
}
