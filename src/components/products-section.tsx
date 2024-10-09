export function ProductsSection() {
  return (
    <section>
      <nav className="">
        <div className="flex md:flex-row flex-col items-center justify-between">
          <div className="max-w-[200px] text-center">
            <span className="font-rubik text-2xl leading-none md:leading-tight ">
              shop by essentials
            </span>
          </div>
          <ul className="flex gap-x-2 items-center font-rubik flex-wrap justify-center gap-y-2">
            <li className="chip text-xs md:text-lg w-max">All</li>
            <li className="chip text-xs md:text-lg w-max">summer coll</li>
            <li className="chip text-xs md:text-lg w-max">new ariv</li>
            <li className="chip text-xs md:text-lg w-max">best sell</li>
            <li className="chip text-xs md:text-lg w-max">flash</li>
          </ul>
        </div>
      </nav>
      <div>
        <div className="card-item">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  )
}
