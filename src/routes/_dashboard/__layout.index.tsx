import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/__layout/')({
  component: App,
})

function App() {
  return (
    <div className="text-center">
      dashboard index
      <Link to="/login">logout</Link>
      dashboard index
      <Link to="/login">logout</Link>
    </div>
  )
}
