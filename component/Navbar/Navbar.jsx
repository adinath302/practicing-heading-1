import React, { useState } from 'react'
import { IoReorderThreeSharp } from "react-icons/io5";


const Navbar = () => {

    const [Showmenu, setShowmenu] = useState(false);

    const HandleOnclick = () => {
        setShowmenu(!Showmenu)
    }

    return (
        <nav className='bg-[gray] h-[5rem]'>
            <div className='max-w-[132rem] h-[5rem] relative 
        !m-auto'>
                <div className='grid grid-cols-[0.5fr_1fr] h-[5rem] items-center !px-[3.2rem]'>
                    {/* LOGO  */}
                    <div className="font-bold text-2xl uppercase">
                        Logo
                    </div>
                    <nav className={Showmenu ? "menu-mobile" : "menu-web"}>
                        <ul className='flex gap-9 justify-end font-bold text-1xl'>
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href=""></a>Help</li>
                        </ul>
                    </nav>
                    <div className='md:hidden text-end cursor-pointer'>
                        <button
                            onClick={HandleOnclick}
                            className='text-3xl cursor-pointer'><IoReorderThreeSharp />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar