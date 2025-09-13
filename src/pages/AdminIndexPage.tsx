import { Link } from '@tanstack/react-router'

export default function AdminIndexPage() {
  const user = JSON.parse(localStorage.getItem('user') as string)
  return (
    <div className="p-10">
      {/* Welcome Section */}
      <div className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-800">
          Welcome back, <span className="text-blue-600">{user.fullName}</span>{' '}
          👋
        </h1>
        <p className="mt-3 text-lg text-gray-500">
          What would you like to do today?
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        <Link
          to="/exams"
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition duration-300"
        >
          <div className="text-3xl mb-4 text-blue-600 group-hover:scale-110 transition-transform">
            📑
          </div>
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
            Add Exams
          </h2>
        </Link>

        <Link
          to="/questions"
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition duration-300"
        >
          <div className="text-3xl mb-4 text-green-600 group-hover:scale-110 transition-transform">
            ✍️
          </div>
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-green-600">
            Add Questions
          </h2>
        </Link>

        <Link
          to="/students"
          className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition duration-300"
        >
          <div className="text-3xl mb-4 text-red-600 group-hover:scale-110 transition-transform">
            🚫
          </div>
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-red-600">
            Expel Students
          </h2>
        </Link>
      </div>
    </div>
  )
}
