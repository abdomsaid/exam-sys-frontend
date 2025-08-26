import { useNavigate } from '@tanstack/react-router'
import FooterLink from './FooterLink'
import SubmitButton from './SubmitButton'

export default function SignupForm() {
  const inputStyle = 'w-full border rounded my-2 p-3 border-solid border-[#ddd]'
  const navigation = useNavigate()
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigation({ to: '/' })
  }
  return (
    <>
      <form method="POST" onSubmit={(e) => handleSubmit(e)}>
        <input
          className={inputStyle}
          name="fullName"
          type="text"
          placeholder="Full Name"
          required
        />
        <input
          className={inputStyle}
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className={inputStyle}
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <input
          className={inputStyle}
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />
        <SubmitButton type="Signup" />
      </form>
      <FooterLink to="/login">Already have an account?</FooterLink>
    </>
  )
}
