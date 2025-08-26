import { createFileRoute } from '@tanstack/react-router'

import SignupPage from '@/pages/SignupPage'

export const Route = createFileRoute('/_auth/signup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignupPage />
}
