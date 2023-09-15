import Link from 'next/link';

const Navbar = () => {
    return(
        <nav className="top-navigation flex flex-row justify-between bg-transparent fixed">
        <div className='left-navigation p-2 flex justify-start'>
          <img className='logo-pic w-10 h-10 p-1 rounded-full' src='https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'></img>
          <Link className="logo-name p-1 sm:text-sm font-bold" href="/">Sonelgaz TE</Link>

        </div>
        <div className='right-navigation pt-2 z-150'>
          <ul className="side-ul flex justify-start">
            <li><Link href="/" className="p-3 button  button-primary clr-black font-bold">Login</Link></li>
            <li ><Link href="/" className="p-1">Dash </Link></li>
            <li><Link href="/"></Link></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar