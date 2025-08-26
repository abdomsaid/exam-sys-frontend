type Props = {
  type: 'Login' | 'Signup'
}
export default function SubmitButton({ type }: Props) {
  return (
    <button
      type="submit"
      className="w-full p-3 bg-blueBg text-white border-none rounded-[4px] text-[1rem] font-bold cursor-pointer mt-4 transition duration-300 hover:bg-hoverBg"
    >
      {type}
      {/* {isLoading ? "Loading..." : "Sign Up"} */}
    </button>
  )
}
