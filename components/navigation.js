import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'


function navigation() {
    const router = useRouter()
    console.log(router.pathname)
    return (
        <nav className="w-full fixed mx-auto  bg-opacity-80 z-10 bg-white pb-1">
            <div  className="flex justify-between w-10/12 mx-auto items-center">
                <div className="w-32 h-14 relative">
                    <img src="/assets/icons/Logo.png" className='w-32' />
                </div>
                <ul className="hidden md:flex items-center justify-around">
                    <li className={router.pathname !== '/' ? "ml-8 font-normal text-lg text-blue-900 hover:font-bold":"ml-8 text-lg text-blue-900 font-bold border-b-2 border-blue-800"}><Link href="/">Home</Link></li>
                    <li className={router.pathname !== '/discovery' ? "ml-8 font-normal text-lg text-blue-900 hover:font-bold":"ml-8 text-lg text-blue-900 font-bold border-b-2 border-blue-800"}><Link  href="/discovery">Discovery</Link></li>
                    <li className={router.pathname !== '/story' ? "ml-8 font-normal text-lg text-blue-900 hover:font-bold":"ml-8 text-lg text-blue-900 font-bold border-b-2 border-blue-800"}><Link  href="/story">Story</Link></li>
                    <a className="px-4 py-1 font-semibold text-lg hover:bg-blue-900  bg-blue-800 text-white ml-8 rounded-full" href="#">Login</a>
                </ul>
                <div className='flex md:hidden cursor-pointer text-indigo-900'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default navigation
