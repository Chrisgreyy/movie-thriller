import { Link, useLocation } from "react-router"

const Sidebar = () => {
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path
  return (
    <div className="bg-background-primary text-text-primary">
      <div className="flex flex-col gap-6 p-4">
           
        <Link to="/" className={`smooth-300 p-4 rounded-md group hover:bg-text-primary/20 ${isActive('/') ? 'bg-text-primary/20' : ''} text-white  flex flex-col items-center justify-center`}>
        <i className="fi fi-rs-home group-hover:fi-ss-home text-2xl smooth-300 pb-2"></i>
          <span className={`text-xs ${isActive('/') ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 smooth-300 text-white/50`}>Home</span> </Link>
      
          <Link to="/discover" className={`smooth-300 p-4 rounded-md group hover:bg-text-primary/20 ${isActive('/discover') ? 'bg-text-primary/20' : ''} text-white  flex flex-col items-center justify-center`}>
        <i className="fi fi-rs-compass-alt group-hover:fi-ss-compass-alt text-2xl smooth-300 pb-2"></i>
            <span className={`text-xs ${isActive('/discover') ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 smooth-300 text-white/50`}>Discover</span> </Link>
      
            <Link to="/library" className={`smooth-300 p-4 rounded-md group hover:bg-text-primary/20 ${isActive('/library') ? 'bg-text-primary/20' : ''} text-white  flex flex-col items-center justify-center`}>
        <i className="fi fi-rs-book-alt group-hover:fi-ss-book-alt text-2xl smooth-300 pb-2"></i>
            <span className={`text-xs ${isActive('/library') ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 smooth-300 text-white/50`}>Library</span> </Link>
      
            <Link to="/settings" className={`smooth-300 p-4 rounded-md group hover:bg-text-primary/20 ${isActive('/settings') ? 'bg-text-primary/20' : ''} text-white  flex flex-col items-center justify-center`}>
        <i className="fi fi-rs-settings group-hover:fi-ss-settings  text-2xl smooth-300 pb-2"></i>
            <span className={`text-xs ${isActive('/settings') ? 'opacity-100' : 'opacity-0'} group-hover:opacity-100 smooth-300 text-white/50`}>Settings</span> </Link>
      
      </div>
    </div>
  )
}

export default Sidebar