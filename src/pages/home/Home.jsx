import React, { memo } from 'react'
import ProductsWrapper from '../../components/products-wrapper/ProductsWrapper'
import { nanoid } from 'nanoid'
import { youtubeData } from '../../static'

const Home = () => {

    return (
        <section>
            {
                youtubeData ? <ProductsWrapper key={nanoid()} title={'Youtube'} data={youtubeData} /> : <h1>Empty</h1>
            }
        </section>
    )
}

export default memo(Home)