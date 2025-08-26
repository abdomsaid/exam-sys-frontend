import { Link } from '@tanstack/react-router'

type Props = {
  to: '/signup' | '/login'
  children: React.ReactNode
}
export default function FooterLink({ to, children }: Props) {
  return (
    <Link
      className="inline-block my-4 mx-0 text-[0.9rem] text-blueBg no-underline hover:text-hoverBg transition duration-300 "
      to={to}
    >
      {children}
    </Link>
  )
}
