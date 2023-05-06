import { useEffect, useState } from 'react'
import { getTopNav } from '../navbar/navBar'
import './navbar.css'

const Navbar = () => {

    const [navItems, setNavItems] = useState([]);
    const [collapse, setCollapse] = useState('nav-menu');
    const [toggleIcon, setToggleIcon] = useState('toggler-icon');

    useEffect(() => {
        setNavItems(getTopNav());

    },[])

    const onToggle = () => {
        collapse === 'nav-menu'
        ? setCollapse('nav-menu nav-collapse')
        : setCollapse('nav-menu');

        toggleIcon === 'toggler-icon'
        ? setToggleIcon('toggler-icon toggle')
        : setToggleIcon('toggler-icon');
    };

  return (
    <div className="fixed top-0 w-screen py-2 flex items-center justify-between lg:px-20 px-4 bg-[blue]">
        <a href="/">
                <span className='title text-5xl text-white font-bold'>doros</span>
            </a>
        <nav className="nav">
            <ul className={collapse}>
                {navItems.map(item => 
                <li key={item.id}className="nav-item">
                <a href={item.href} className="nav-link">{item.label}
                </a>
               </li>
                    )}
                    <button className='px-2 rounded-lg h-8 text-sm border-2 border-white text-white font-semibold bg-[blue] items-center w-20 hover:bg-white hover:text-[blue]'>sign up</button>
                    <button className='text-[blue] rounded-lg h-8 text-sm font-semibold items-center bg-[white] px-2 w-20 hover:bg-[blue] hover:text-white hover:border-2 hover:border-white'>log in</button>
            </ul>
            <div className={toggleIcon }  onClick={onToggle}>
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
        </nav>


    
    </div>
  )
}

export default Navbar