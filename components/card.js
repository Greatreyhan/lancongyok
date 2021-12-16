import React from 'react'

const card = () => {
    return (
        
        <div className="overflow-hidden shadow-md bg-white rounded-md h-90 w-60 md:w-75 cursor-pointer m-auto mt-12">
            <div className="w-full block h-full">
                <img alt="blog photo" src="./assets/images/product.jpg" className="max-h-40 w-full object-cover rounded-sm"/>
                <div className="bg-white py-2 px-3 pb-4 w-full">
                    <p className="text-indigo-500 text-md font-medium">
                    </p>
                    <p className="text-gray-800 text-xl font-medium mt-2">
                        Lawang Sewu
                    </p>
                    <div className="flex">
                    <div className="flex item-center mt-1">
                        <svg className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                        <svg className="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z">
                            </path>
                        </svg>
                    </div>
                    </div>
                    <p className="text-gray-700 text-md font-normal mt-2">
                        Kunjungi pusat budaya terunik di Jawa Tengah sebagai hiburan anda selama liburan pasca pandemi
                    </p>
                    <div className="flex mt-3 justify-between items-center">
                        <p className="font-bold text-xl p-2">320K</p>
                        <a href="#" className="px-4 py-1 bg-blue-800 font-normal text-white  rounded-md">Kunjungi</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default card
