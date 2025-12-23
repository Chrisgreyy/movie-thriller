
const Sidebar = () => {
  return (
    <div className="bg-background-primary text-text-primary">
      <ul className="grid grid-cols-1 gap-4 mt-4">
        <li className="p-4 rounded-md bg-text-primary/20 text-white">
          <a href="/">Home</a>
        </li>
        <li className="p-4 rounded-md bg-text-primary/20 text-white">
          <a href="/about">Discover</a>
        </li>
        <li className="p-4 rounded-md bg-text-primary/20 text-white">
          <a href="/about">Library</a>
        </li>
        <li className="p-4 rounded-md bg-text-primary/20 text-white">    
          <a href="/about">Settings</a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar