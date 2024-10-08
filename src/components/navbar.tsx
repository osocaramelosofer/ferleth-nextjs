import { FaSearch } from 'react-icons/fa'

const routes = ["women's wear", "men's wear", 'kids', 'sale', 'discover']
export function NavBar() {
  return (
    <nav className="flex p-2 justify-between items-center m-4 border-2 border-slate-300 rounded-xl">
      <div className="">
        <span className="font-bold text-md md:text-2xl  font-rubik tracking-wider">
          ferleth
        </span>
      </div>

      <ul className="list-none md:flex gap-x-5 hidden ">
        {routes.map((route) => (
          <li className="route" key={route}>
            {route}
          </li>
        ))}
      </ul>

      <div className="inline-block ">
        <form>
          <div className="pl-2 inline-flex gap-x-2 bg-slate-100  items-center rounded-full overflow-hidden ">
            <FaSearch size={13} className="text-slate-900" />
            <input
              type="text"
              id="search"
              name="search"
              placeholder="search..."
              className="w-[100px] focus:w-[150px] transition-all duration-500 outline-none bg-inherit"
            />
          </div>
        </form>
      </div>
      <div className="block md:hidden">
        <button>X</button>
      </div>
    </nav>
  )
}
