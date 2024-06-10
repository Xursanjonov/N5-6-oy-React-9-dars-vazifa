import React, { Fragment, memo } from 'react'
import video from '../../assets/videos/video.mp4'
import { Link } from 'react-router-dom'

const ProductsCart = ({ product, admin }) => {

    return (
        <Fragment>
            <div key={product.id} className='w-[352px] h-[320px] flex flex-col items-start gap-2 rounded-xl bg-transparent'>
                <Link to={`/products/${product.id}`}>
                    <video className='w-[350px] h-[180px] mx-auto rounded-xl' controls >
                        <source className='w-[100%] h-[180px]' src={video} type="video/mp4" />
                    </video>
                </Link>
                <div className="w-[100%] ps-3 flex gap-5 items-start text-black">
                    <img className='w-[30px] h-[30px] object-cover rounded-full' src={product.img} alt="" />
                    <div className="w-[95%] flex flex-col justify-start gap-1">
                        <p className='text-sm font-semibold text-cyan-300'><span className='text-white'>{product.id}. </span> {product.title}</p>
                        <p className='text-[12px] font-semibold text-gray-500'>Channel name</p>
                        <p className='text-[12px] font-semibold text-white italic'>{product.prosmoter} marta ko`rilgan</p>
                        {
                            admin ? (
                                <div className="w-[95%] mt-4 flex items-center justify-end gap-4">
                                    <button className='px-2.5 py-1 rounded-md text-white bg-red-500'>
                                        <i className="fa-solid fa-trash"></i>
                                    </button>
                                    <button className='px-2.5 py-1 rounded-md text-black bg-orange-500'>
                                        <i className="fa-solid fa-pen-to-square"></i>
                                    </button>
                                </div>
                            ) : <>  </>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default memo(ProductsCart)