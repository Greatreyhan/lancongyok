import React from 'react'
function articleCard() {
    return (
        
        <div style={{width: '412px'}} className="flex bg-white shadow-lg rounded-lg overflow-hidden ml-3 mt-4">
            <div className="w-1/3 bg-cover bg-landscape">
                <img className="object-cover h-full" src="./assets/images/story.jpg" />
            </div>
            <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">
                    Refreshing di Pantai Marina
                </h1>
                <p className="mt-2 text-gray-600 text-sm">
                    Bermain di pantai untuk mengisi liburan setelah pandemi di pantai marina dengan keluarga It's sometings wonderful
                </p>
                <div className="flex item-center justify-end mt-3">
                    <button className="px-3 py-2 bg-blue-800 text-white text-xs font-bold uppercase rounded">
                        Baca Story
                    </button>
                </div>
            </div>
        </div>

    )
}

export default articleCard
