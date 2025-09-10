import { useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import FooterLink from './FooterLink'
import SubmitButton from './SubmitButton'
import { users } from '@/data'

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
      users.push(data)
      console.log(users)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {errors.fullName && (
          <h1 className="text-red-500">{errors.fullName.message as string}</h1>
        )}
        <input
          className={`${inputStyle} ${errors.fullName ? 'border-red-500' : ''}`}
          type="text"
          placeholder="Full Name"
          {...register('fullName', { required: 'Full name is required.' })}
        />
        {errors.username && (
          <h1 className="text-red-500">{errors.username.message as string}</h1>
        )}
        <input
          className={`${inputStyle} ${errors.username ? 'border-red-500' : ''}`}
          placeholder="User name"
          {...register('username', { required: 'User name is required.' })}
        />
        {errors.password && (
          <h1 className="text-red-500">{errors.password.message as string}</h1>
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
          <h1 className="text-red-500">
            {errors.confirmPassword.message as string}
          </h1>
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
