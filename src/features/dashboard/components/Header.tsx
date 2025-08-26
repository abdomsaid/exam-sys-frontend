export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white text-[#9088AC] w-full shadow-[0_8px_15px_-3px_rgba(0,0,0,0.25)] ">
      <div className="flex justify-end w-full p-5">
        <div className="gap-4">
          <span className="inline-block mx-10 text-[#26135B] font-bold text-xl ">
            user
          </span>
          <button className="bg-[#ff6600] text-[#fff] py-2 px-3 border-none rounded-2xl cursor-pointer hover:bg-[#e65c00] transition duration-300 ease-in-out">
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
