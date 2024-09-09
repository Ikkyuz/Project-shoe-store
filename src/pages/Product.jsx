import React from 'react'
import Layout from '../components/Layout'

const Product = () => {
  return (
    <Layout>
        <h1 className='text-5xl font-bold text-center m-20'>PRODUCT LIST</h1>
        <section className='max-w-screen-xl items-center justify-center mx-auto'>
            <div className='grid grid-cols-3 grid-flow-row gap-16'>
                <div className='p-6 bg-white shadow-lg rounded-lg'>
                    <h4>No.1</h4>
                </div>
                <div className='p-6 bg-white shadow-lg rounded-lg'>
                    <h4>No.2</h4>
                </div>
                <div className='p-6 bg-white shadow-lg rounded-lg'>
                    <h4>No.3</h4>
                </div>
            </div>
        </section>
    </Layout>
  )
}

export default Product
