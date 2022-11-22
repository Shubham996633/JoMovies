import React from 'react'
import { Link } from 'react-router-dom'
import { OutlineButton } from '../components/button/Button'

import HeroSlide from '../components/hero-slide/HeroSlide'
import MovieList from '../components/movie-list/MovieList'
import { category, movieType, tvType } from '../api/tmdbApi'

const Home = () => {
    return (
        <div className='hero-slide'>

            <HeroSlide />

            <div className='container'>
                <div className='section mb-3'>
                    <div className='section__header mb-2'>
                        <h2>Trending Movies</h2>
                        <Link to='/movie'>
                            <OutlineButton className="small">View More</OutlineButton>
                        </Link>
                    </div>
                    <MovieList category={category.movie} type={movieType.popular} />
                </div>
            </div>
        </div>
    )
}

export default Home