import { Link } from '@tanstack/react-router'

type Props = {
  title: string
}

export default function SideBarLink({ title }: Props) {
  const newLink = `/${title.toLowerCase()}`
  return (
    <div>
      <Link
        className={
          'text-white text-xl hover:text-[#6cb3cf] transition duration-300 ease-in-out'
        }
        activeProps={{ className: 'text-red-500 underline' }}
        to={newLink}
      >
        {title}
      </Link>
    </div>
  )
}
// "text-white text-xl hover:text-[#6cb3cf] transition duration-300 ease-in-out "
