import React, { memo } from 'react'
import { useParams } from 'react-router-dom'
import { youtubeData } from '../../static'

import video from '../../assets/videos/video.mp4'

const ProductsDetails = () => {
    const { id } = useParams()

    return youtubeData?.map(product => product.id == id ? (
        <section key={product.id} className='max-w-[100%] h-[60vh] mx-auto mt-10'>
            <div className="w-[100%] h-[100%] mx-auto flex items-center justify-center gap-8 rounded-xl">
                <video className='w-[700px] h-[400px] mx-auto rounded-xl' controls >
                    <source className='w-[100%] h-[100%]' src={video} type="video/mp4" />
                </video>
                <div className="w-[48%] mx-auto ps-3 flex flex-col gap-5 items-start">
                    <p className='text-4xl font-semibold text-blue-500'><span className='text-white'>{product.id}. </span> {product.title}</p>
                    <div className="flex items-center gap-5">
                        <img className='w-[50px] h-[50px] rounded-full object-cover ' src={product.img} alt="" />
                        <p className='text-lg font-bold text-gray-400'>{product.category}</p>
                    </div>
                    <p className='text-lg font-semibold text-orange-500 italic'>{product.prosmoter} marta ko`rilgan</p>
                    <p className='text-lg text-gray-300'>
                        <span className='font-semibold text-lime-300'>{product.info}</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere dolore voluptatibus corporis, magni numquam ad accusamus hic, culpa velit sed cum nihil error ipsa fugiat architecto recusandae sequi molestiae delectus.
                    </p>
                </div>
            </div>
        </section>
    ) : <></>)
}

export default memo(ProductsDetails)