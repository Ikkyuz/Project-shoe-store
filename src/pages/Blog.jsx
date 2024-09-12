import React from 'react'
import Layout from '../components/Layout'

const Blog = () => {
  return (
    <Layout>
        <section className='container mx-auto py-8 mt-24'>
          <div className='items-center justify-center'>
            <h1 className='text-4xl font-bold text-center mb-3'>POPULAR SPORTS SHOES</h1>
            <div className="max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://scontent-bkk1-2.xx.fbcdn.net/v/t39.30808-6/459427235_511838621438052_3311086788265819487_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeGoBn9IYRBGOaNq-vVbNVO-3Yj97TiECy7diP3tOIQLLmotQ2GRgMifgo9VWCf7dqAQWlQWS5a0P8nGfI_XB9JX&_nc_ohc=bUpONMF2IPgQ7kNvgHKoKyq&_nc_ht=scontent-bkk1-2.xx&_nc_gid=Apg4sbfUn6FBVvqgT_gp7cG&oh=00_AYBlODQ932KtEJyK8l_vIdahnRmYGnB7Ne5baIB6EtU4WA&oe=66E9A455" alt=""/>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </div>
              </a>
            </div>
          </div>
        </section>
    </Layout>
  )
}

export default Blog
