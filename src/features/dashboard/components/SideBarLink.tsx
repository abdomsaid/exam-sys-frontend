import { Link } from '@tanstack/react-router'

type Props = {
  title: string
}

export default function SideBarLink({ title }: Props) {
  return (
    <div>
      <Link
        className={
          'text-white text-xl hover:text-[#6cb3cf] transition duration-300 ease-in-out'
        }
        activeProps={{ className: 'text-red-500 underline' }}
        to={`/${title.toLowerCase()}` as any}
      >
        {title}
      </Link>
    </div>
  )
}
// "text-white text-xl hover:text-[#6cb3cf] transition duration-300 ease-in-out "
