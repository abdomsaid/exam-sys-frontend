import AuthPage from '@/features/auth/AuthPage'

export default function SignupPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[linear-gradient(to_right,_#4a90e2,_#7b4397)] ">
      <AuthPage type="signup" />
    </div>
  )
}
