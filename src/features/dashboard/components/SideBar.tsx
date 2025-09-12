import SideBarLink from './SideBarLink'

export default function SideBar() {
  return (
    <aside className="bg-[#18054F] min-h-screen w-1/5 flex flex-col items-center">
      <div className="text-white text-3xl mt-5 font-bold ">ExamSys</div>
      <div className="flex flex-col gap-5 mt-10">
        <SideBarLink title="Exams" />
        <SideBarLink title="Questions" />
        <SideBarLink title="Students" />
      </div>
    </aside>
  )
}
