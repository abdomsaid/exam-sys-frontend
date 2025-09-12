import { useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { users } from '../../../data'
import FooterLink from './FooterLink'
import SubmitButton from './SubmitButton'
import ErrorMsg from '@/shared/ErrorMsg'

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    setError,
  } = useForm()

  const navigation = useNavigate()
  const inputStyle = 'w-full border rounded my-2 p-3 border-solid border-[#ddd]'

  const onSubmit = async (data: any) => {
    const isValid = await trigger()
    if (isValid) {
      const user = users.find((u) => u.username.trim() === data.username)
      if (user && user.password === data.password) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            username: user.username,
            role: user.role,
            fullName: user.fullName,
          }),
        )
        navigation({ to: '/' })
      } else {
        setError('username', { message: 'Incorrect username or password.' })
      }
    }
  }
  return (
    <>
      {errors.username && errors.username.type !== 'required' && (
        <ErrorMsg msg={errors.username.message as string} />
      )}
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        {errors.username && errors.username.type === 'required' && (
          <ErrorMsg msg={errors.username.message as string} />
        )}
        <input
          className={`${inputStyle} ${errors.username ? 'border-red-500' : ''}`}
          {...register('username', { required: 'User name is required.' })}
          placeholder="Username"
        />
        {errors.password && (
          <ErrorMsg msg={errors.password.message as string} />
        )}
        <input
          className={`${inputStyle} ${errors.password ? 'border-red-500' : ''}`}
          {...register('password', { required: 'Password is required.' })}
          type="password"
          placeholder="Password"
        />
        <SubmitButton type="Login" />
      </form>
      <FooterLink to="/signup">Sign Up</FooterLink>
    </>
  )
}
