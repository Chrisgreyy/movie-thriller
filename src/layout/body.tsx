import { Outlet } from "react-router"
import Sidebar from "./sidebar"

const Body = () => {
  return (
    <main className="grid grid-cols-12 bg-background-primary">
        <aside className="col-span-1">
            <Sidebar />
        </aside>
        <section className="col-span-11">
            <Outlet />
        </section>
    </main>
  )
}

export default Body