import { Outlet, createFileRoute, useNavigate } from '@tanstack/react-router'
import Header from '@/features/dashboard/components/Header'
import SideBar from '@/features/dashboard/components/SideBar'

export const Route = createFileRoute('/_dashboard/__layout')({
  component: RouteComponent,
  errorComponent: () => <div>Not found</div>,
})

function RouteComponent() {
  const navigation = useNavigate()
  const user = localStorage.getItem('user')
  if (!user) {
    throw navigation({ to: '/login' })
  }
  return (
    <div className="flex ">
      <SideBar />
      <div className="w-full min-h-screen ">
        <Header />
        <div className=" my-5 mx-10 py-5 ">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
