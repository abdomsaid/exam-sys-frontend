import { Link } from '@tanstack/react-router'
import SideBarLink from './SideBarLink'
import type { userType } from '@/shared/types'

type User = Omit<userType, 'password'>

export default function SideBar() {
  const user = JSON.parse(localStorage.getItem('user') || 'null') as User

  return (
    <aside className="bg-[#18054F] min-h-screen w-1/5 flex flex-col items-center">
      <Link to="/" className="text-white text-3xl mt-5 font-bold ">
        Exam Sys
      </Link>
      <div className="flex flex-col gap-5 mt-10">
        {user.role === 'admin' ? (
          <>
            <SideBarLink title="Exams" />
            <SideBarLink title="Questions" />
            <SideBarLink title="Students" />
          </>
        ) : (
          <>
            <SideBarLink title="currentexams" />
          </>
        )}
      </div>
    </aside>
  )
}
