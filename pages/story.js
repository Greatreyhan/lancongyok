import React from 'react'
import Layout from '../components/layout'
import ArticleCard from '../components/articleCard'

function story() {
    return (
        <Layout>
            {/* Article Card */}
            <div className="bg-gray-100 w-full">
                <div className='flex justify-between items-center w-10/12 bg-gray-100 mx-auto pt-16'>
                <h2 className='font-bold text-2xl'>Baca Keseruan Liburan</h2>
                </div>
                <div className="flex w-full mx-auto p-4 flex-wrap justify-around">
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </div>
        </Layout>
    )
}

export default story
