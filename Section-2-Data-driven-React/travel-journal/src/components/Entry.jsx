import React from 'react'
    export default function Entry(props) {
        const [article, setArticle] = React.useState({
            ...props
        });


        return(
            <article className="p-10 flex flex-row h-full border-2 rounded-xl mt-5 mx-auto max-w-2xl border-gray-300 shadow-lg font-inter overflow-hidden">
                <img src={article.img.src} alt={article.img.alt} className="w-45 h-55 rounded-lg"></img>
                <div id='content-section' className="flex flex-col h-10 ml-4 mt-2">
                    <div id='header-section' className='flex flex-row items-baseline'>
                        <img src="/marker.png" className="w-4 h-4 mr-3"></img>
                        <h1 className="text-md text-gray-700 mr-4">{article.country}</h1>
                        <a href={article.googleMapsLink}
                        className="text-xs text-gray-400 underline-offset-1 underline items-center">
                            View on Google Maps
                        </a>
                        <p id='rating' className="mx-5">Rating: {article.rating}</p>
                    </div>
                    <p id='place-name' className='mt-2 text-3xl font-bold'>
                        {article.title}
                    </p>
                    <div id='dates' className='mt-8 text-sm font-bold'>
                        {article.dates}
                    </div>
                    <div id='description' className='mt-5 text-xs bg-green'>
                        {article.text}
                    </div>
                </div>
            </article>
        )
    }