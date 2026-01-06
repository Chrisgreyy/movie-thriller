import { Link } from "react-router"

const Sidebar = () => {
  return (
    <div className="bg-background-primary text-text-primary">
      <div className="flex flex-col gap-6 p-4">
           
        <Link to="/" className="smooth-300 p-4 rounded-md group hover:bg-text-primary/20 text-white  flex flex-col items-center justify-center">
        <i className="fi fi-rs-home group-hover:fi-ss-home text-2xl smooth-300"></i>
          <span className="text-xs hidden group-hover:block smooth-300">Home</span> </Link>
      
        <Link to="/discover" className="smooth-300 p-4 rounded-md group hover:bg-text-primary/20 text-white  flex flex-col items-center justify-center">
        <i className="fi fi-rs-compass-alt group-hover:fi-ss-compass-alt text-2xl smooth-300"></i>
            <span className="text-xs hidden group-hover:block smooth-300">Discover</span> </Link>
      
        <Link to="/library" className="smooth-300 p-4 rounded-md group hover:bg-text-primary/20 text-white  flex flex-col items-center justify-center">
        <i className="fi fi-rs-book-alt group-hover:fi-ss-book-alt text-2xl smooth-300"></i>
            <span className="text-xs hidden group-hover:block smooth-300">Library</span> </Link>
      
        <Link to="/settings" className="smooth-300 p-4 rounded-md group hover:bg-text-primary/20 text-white  flex flex-col items-center justify-center">    
        <i className="fi fi-rs-settings group-hover:fi-ss-settings  text-2xl smooth-300"></i>
            <span className="text-xs hidden group-hover:block smooth-300">Settings</span> </Link>
      
      </div>
    </div>
  )
}

export default Sidebar