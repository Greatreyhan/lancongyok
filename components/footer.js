import React from 'react'

function footer() {
    return (
            
        <footer className="bg-blue-900 dark:bg-gray-800 pt-4 xl:pt-8">
            <div className="max-w-screen-lg w-10/12 xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 text-white dark:text-gray-300">
                <ul className="text-lg font-light pb-8 flex flex-wrap justify-center">
                    <li className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="text-center">
                            <img src='./assets/icons/LogoWhite.png' className="w-36" />
                            <p className="text-left text-sm mt-4">Lancongyok platform anti mainstream untuk liburan kamu jadi mudah dan menyenangkan.</p>
                        </div>
                    </li>
                    <li className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="text-center">
                            <h2 className="text-white dark:text-gray-100 text-md font-bold uppercase mb-4">
                                Contacts
                            </h2>
                            <ul>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Github
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Twitter
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="text-center">
                            <h2 className="text-white dark:text-gray-100 text-md font-bold uppercase mb-4">
                                Pages
                            </h2>
                            <ul>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Discovery
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Story
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Sign Up
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li className="w-1/2 md:w-1/4 lg:w-1/4">
                        <div className="text-center">
                            <h2 className="text-white dark:text-gray-100 text-md font-bold uppercase mb-4">
                                Customization
                            </h2>
                            <ul>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Settings
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Themes
                                    </a>
                                </li>
                                <li className="mb-4 hover:text-gray-100 dark:hover:text-white transition-colors duration-200">
                                    <a href="#">
                                        Plugins
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <p className="text-center">©LancongYok 2021. All Right reserved</p>
            </div>
        </footer>

    )
}

export default footer
