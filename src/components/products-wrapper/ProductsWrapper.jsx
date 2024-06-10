import React, { memo, useState } from 'react'
import ProductsCart from './ProductsCart'


const ProductsWrapper = ({ data, admin }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const categories = ['All', ...new Set(data.map(item => item.category))];
    const filteredData = selectedCategory === 'All' ? data : data.filter(item => item.category === selectedCategory);

    return (
        <div className='w-[100%] py-8 flex flex-col items-start justify-center gap-12'>
            <div className="tabs flex items-center gap-5">
                {categories.map((category, index) => (
                    <button className={`btn btn-neutral font-bold text-white`}
                        key={index} onClick={() => setSelectedCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="products mt-5 grid grid-cols-4 gap-8">
                {filteredData.map(item => (
                    <ProductsCart key={item.id} product={item} admin={admin ? admin : ''} />
                ))}
            </div>
        </div>

    )
}

export default memo(ProductsWrapper)