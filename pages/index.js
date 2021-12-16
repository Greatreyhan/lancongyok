import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/layout'
import Achievement from '../components/achievement'
import Card from "../components/card"
import ArticleCard from '../components/articleCard'
import Partner from '../components/partner'
import Travel from "../public/assets/images/Hero.jpg"

export default function Home() {
  return (
    <Layout>

        {/* Heading */}
        <div className="hidden md:flex w-10/12 pt-32 mx-auto items-center " id="HeadingContainer">
          <div className="flex-1">
              <h1 className="text-5xl font-normal leading-snug tracking-wide">Cukup <span className="font-black text-indigo-900">Klik, Bayar, dan Verifikasi</span> Langsung Liburan</h1>
              <h2 className="mt-3 text-lg leading-relaxed tracking-wide">Kunjungi Berbagai Destinasi Wisata Impian Untuk Kamu Yang Butuh Liburan</h2>
              <div className="mt-16 text-xl"><Link href="/discovery" className="cusor-pointer"><p  className="cursor-pointer bg-blue-800 text-white py-3 px-8 shadow-2xl inline-block">Mulai Sekarang</p></Link></div>
          </div>
          <div className="flex-1 h-96 flex justify-center">
              <img className="h-full" src="./assets/images/Hero.jpg" />
          </div>
        </div>

        <div style={{backgroundImage: `url(${Travel})`, backgroundPosition:'center',backgroundAttachment:'fixed'}} className='w-full h-full md:hidden flex pt-32 pb-16 px-4'>
          <div className="flex-1">
              <h1 className="text-5xl font-normal leading-snug tracking-wide">Cukup <span className="font-black">Klik, Bayar, dan Verifikasi</span> Langsung Liburan</h1>
              <h2 className="mt-3 text-lg leading-relaxed tracking-wide">Kunjungi Berbagai Destinasi Wisata Impian Untuk Kamu Yang Butuh Liburan</h2>
              <div className="mt-16 text-xl"><Link href="/discovery" className="cusor-pointer"><p  className="cursor-pointer bg-blue-800 text-white py-3 px-8 shadow-2xl inline-block">Mulai Sekarang</p></Link></div>
          </div>
        </div>

        {/* Achievement */}
        <div className="mt-12">
          <Achievement />
        </div>

        {/* Card */}
        <div className="bg-gray-100 w-full">
            <div className='flex justify-between items-center w-10/12 bg-gray-100 mx-auto pt-12'>
              <h2 className='font-bold text-2xl'>Pilih Tempat Wisata</h2>
              <a href="#" className='text-indigo-900'>Lebih Banyak</a>
            </div>
            <div className="flex w-10/12 mx-auto  flex-wrap ">
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

        {/* Article Card */}
        <div className="bg-gray-100 w-full">
            <div className='flex justify-between items-center w-10/12 bg-gray-100 mx-auto pt-32'>
              <h2 className='font-bold text-2xl'>Baca Keseruan Liburan</h2>
              <a href="#" className='text-indigo-900'>Lebih Banyak</a>
            </div>
            <div className="flex w-full mx-auto p-4 flex-wrap justify-around">
                <ArticleCard />
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>

        {/* Partner */}
        <h2 className='text-center font-bold text-3xl pt-32 bg-gray-100'>Our Partner</h2>
        <div className="bg-gray-100 w-full pt-8">
            <Partner />
        </div>

        {/* Map */}
        <div className="bg-gray-100 w-full pt-24  flex justify-center">
          <iframe className='shadow-lg rounded-lg' width="600" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&height=400&hl=en&q=Jalan%20Professor%20Haji%20Soedharto,%20SH%20Tembalang%20Semarang%20Jawa%20Tengah%2050275,%20%20Semarang+()&t=&z=16&ie=UTF8&iwloc=B&output=embed"></iframe>        
        </div>

        {/* Social Media */}
        <div className="bg-gray-100 w-full py-8">
            <div className="flex justify-center w-10/12 mx-auto">
                <a className="p-4 bg-white shadow-md rounded-full w-20 m-8" href="#"><img src='./assets/icons/Instagram.png' /></a>
                <a className="p-4 bg-white shadow-md rounded-full w-20 m-8" href="#"><img src='./assets/icons/Facebook.png' /></a>
                <a className="p-4 bg-white shadow-md rounded-full w-20 m-8" href="#"><img src='./assets/icons/Youtube.png' /></a>
                <a className="p-4 bg-white shadow-md rounded-full w-20 m-8" href="#"><img src='./assets/icons/Twitter.png' /></a>
            </div>
        </div>

    </Layout>
  )
}
