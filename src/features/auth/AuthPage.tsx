import LoginForm from './components/LoginForm'
import SignupForm from './components/SignupForm'

type Props = {
  type: 'login' | 'signup'
}
export default function AuthPage({ type }: Props) {
  return (
    <div className="w-full max-w-2/6  p-8 bg-[#ffffff] rounded-[8px] text-center shadow-CShadow">
      <h2 className="text-[1.5rem] font-bold text-[#333] mb-4 font-sans">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </h2>
      {type === 'login' ? <LoginForm /> : <SignupForm />}
    </div>
  )
}
