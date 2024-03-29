import React from 'react'

import { useParams } from 'react-router-dom'
import PageHeader from '../components/page-header/PageHeader'
import MovieGrid from '../components/movie-grid/MovieGrid'
import { category as cate } from '../api/tmdbApi'

const Catlog = () => {
    const { category } = useParams()

    console.log(category)



    return (
        <div>

            <PageHeader>
                {category === cate.movie ? 'Movies' : 'TV Series'}
            </PageHeader>

            <div className='container'>
                <div className='section mb-3'>
                    <MovieGrid category={category} />
                </div>
            </div>

        </div>
    )
}


export default Catlog