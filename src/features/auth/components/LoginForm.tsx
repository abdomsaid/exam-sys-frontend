import { useNavigate } from '@tanstack/react-router'
import FooterLink from './FooterLink'
import SubmitButton from './SubmitButton'

export default function LoginForm() {
  const navigation = useNavigate()
  const inputStyle = 'w-full border rounded my-2 p-3 border-solid border-[#ddd]'

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigation({ to: '/' })
  }
  return (
    <>
      <form method="POST" onSubmit={(e) => handleSubmit(e)}>
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
        <SubmitButton type="Login" />
      </form>
      <FooterLink to="/signup">Sign Up</FooterLink>
    </>
  )
}
