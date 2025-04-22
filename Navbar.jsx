import { useState } from 'react'

function Navbar() {

    return (
        <>
            <nav className="bg-blue-600 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <a className="text-white text-xl font-bold flex items-center gap-2" href="#">
                        <img src={"logo.png"} alt="Logo" className="h-8 w-auto" />
                        Open Works
                    </a>
                    <button id="menu-toggle" className="text-white md:hidden">☰</button>
                    <ul id="menu" className="hidden md:flex space-x-6 text-white">
                        <li><a className="px-3 py-2 bg-gray-800 rounded" href="#">Home</a></li>
                        <li><a href="#">Open Positions</a></li>
                        <li><a href="#">New Listing</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
