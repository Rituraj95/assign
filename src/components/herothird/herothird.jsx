import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './herothird.css'


export default function herothird() {
    const settings={
        dots:true,
        Infinite: true,
        speed:500,
        slidesToShow:3,
        slidesToShow:3,

        
        
    }
  return (
    <div >
        <div className='text-right mr-10 mt-10 text-lg pop'>
            <h1>Happy Kids,</h1>
            <h1>Satisfied Parents!</h1>

        </div>
        <div className='w=3/4 m-auto'>
        <div className='bg-white h-[450px] text-black rounded-xl mt-10 mb-10 maindiv '>
            <Slider {...settings}>
                {data.map((d)=>(
                    <div className='flex flex-col justify-center gap-4 p-4 maindivv'>
                        <p>{d.phone}</p>
                        <p>{d.email}</p>
                    </div>
                ))}
            </Slider>

        </div>

        </div>
      
      
    </div>
  )
}

const data=[

    {
        phone:"7086325788",
        email:'dekarituraj95@gmail.com'
    },
    {
        phone:"7086325788",
        email:'dekarituraj95@gmail.com'
    },
    {
        phone:"7086325788",
        email:'dekarituraj95@gmail.com'
    },
]

