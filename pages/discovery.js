import React from 'react'
import Layout from '../components/layout'
import Card from '../components/card'

function discovery() {
    return (
        <Layout>
            {/* Card */}
            <div className="bg-gray-100 w-full">
                <div className='flex justify-between items-center w-10/12 bg-gray-100 mx-auto pt-12'>
                <h2 className='font-bold text-2xl'>Pilih Tempat Wisata</h2>
                <a href="#" className='text-indigo-900'>Lebih Banyak</a>
                </div>
                <div className="flex w-10/12 mx-auto  flex-wrap pb-16">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </Layout>
    )
}

export default discovery
