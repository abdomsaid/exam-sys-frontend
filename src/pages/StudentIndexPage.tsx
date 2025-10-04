import { Link } from '@tanstack/react-router'

export default function StudentIndexPage() {
  const user = JSON.parse(localStorage.getItem('user') as string)
  return (
    <div className="p-10 flex flex-col align-center">
      {/* Welcome Section */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-800">
          Welcome, <span className="text-blue-600">{user.fullName}</span> 🎓
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          Ready to start taking exams today?
        </p>
      </div>

      <div className="flex justify-center w-auto mx-auto ">
        <Link
          to="/currentexams"
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition duration-300 "
        >
          <div className="text-3xl mb-4 text-indigo-600 group-hover:scale-110 transition-transform">
            📝
          </div>
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600">
            Check Current Exams
          </h2>
        </Link>
      </div>
    </div>
  )
}
