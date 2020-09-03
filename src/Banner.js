import React, { useState, useEffect } from 'react';
import './Banner.css';
import axios from './axios';
import requests from './requests';

function Banner() {
    const [banner, setBanner] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setBanner(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, []);

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <header
            className="banner"
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner?.backdrop_path}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {banner.title || banner?.name || banner?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">
                        {'Play'}
                    </button>
                    <button className="banner__button">
                        {'My List'}
                    </button>
                    <h1 className="banner__description">
                        {truncate(banner?.overview, 150)}
                    </h1>
                </div>
            </div>
            <div className="banner__fadeBottom" />


        </header>
    )
}

export default Banner;
