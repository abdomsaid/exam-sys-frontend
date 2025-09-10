import { useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import FooterLink from './FooterLink'
import SubmitButton from './SubmitButton'
import { users } from '@/data'
import ErrorMsg from '@/shared/ErrorMsg'

export default function SignupForm() {
  const navigation = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    watch,
  } = useForm()

  const inputStyle = 'w-full border rounded my-2 p-3 border-[#ddd] border-solid'

  const onSubmit = async (data: any) => {
    const isValid = await trigger()
    if (isValid) {
      data.fullName = data.fullName.trim()
      data.username = data.username.trim()
      data.role = 'student'
      delete data.confirmPassword

      users.push(data)
      navigation({ to: '/login' })
      console.log(users)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.fullName && (
          <ErrorMsg msg={errors.fullName.message as string} />
        )}
        <input
          className={`${inputStyle} ${errors.fullName ? 'border-red-500' : ''}`}
          type="text"
          placeholder="Full Name"
          {...register('fullName', { required: 'Full name is required.' })}
        />
        {errors.username && (
          <ErrorMsg msg={errors.username.message as string} />
        )}
        <input
          className={`${inputStyle} ${errors.username ? 'border-red-500' : ''}`}
          placeholder="User name"
          {...register('username', { required: 'User name is required.' })}
        />
        {errors.password && (
          <ErrorMsg msg={errors.password.message as string} />
        )}
        <input
          className={`${inputStyle} ${errors.password ? 'border-red-500' : ''}`}
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required.',
            validate: (value) =>
              value === watch('confirmPassword') || 'Passwords do not match.',
          })}
        />
        {errors.confirmPassword && (
          <ErrorMsg msg={errors.confirmPassword.message as string} />
        )}
        <input
          className={`${inputStyle} ${errors.confirmPassword ? 'border-red-500' : ''}`}
          type="password"
          placeholder="Confirm Password"
          {...register('confirmPassword', {
            required: 'Confirm password is required.',
            validate: (value) =>
              value === watch('password') || 'Passwords do not match.',
          })}
        />
        <SubmitButton type="Signup" />
      </form>
      <FooterLink to="/login">Already have an account?</FooterLink>
    </>
  )
}
