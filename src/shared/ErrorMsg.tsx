type Props = { msg: string }

export default function ErrorMsg({ msg }: Props) {
  return <h1 className="text-red-500">{msg}</h1>
}
