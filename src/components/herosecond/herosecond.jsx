import React from 'react';
import './herosecond.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function herosecond() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToShow: 3
    };
    return (
        <div className='text-left pl-20 pt-20 text-3xl text-white herosecond'>
            <div>
                <h1>Explore Our Top</h1>
                <h1>Academics</h1>
            </div>

            <div className='w=3/4 m-auto '>
                <div className='mt-20'>
                    <Slider {...settings}>

                        {data.map((d) => (
                            <div className='bg-white h-[450px] text-black rounded-xl cla'>
                                <div>
                                    <img src={d.img} alt="" />
                                </div>
                                <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                    <p className='text-xl font-semibold'>{d.name}</p>
                                    <p>{d.review}</p>
                                    <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

const data = [
    {
        name: 'Rituraj deka',
        img: '/components/img/profile.jpg',
        review: 'I am a frontend developer from assam'
    },
    {
        name: 'Rituraj deka',
        img: '/components/img/profile.jpg',
        review: 'I am a frontend developer from assam'
    },
    {
        name: 'Rituraj deka',
        img: '/img/profile.jpg',
        review: 'I am a frontend developer from assam'
    },
]
