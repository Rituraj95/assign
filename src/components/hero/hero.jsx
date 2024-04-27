import React from 'react';
import './hero.css';
import img from '../Asset/img.png';
import svg from '../Asset/sv.svg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
    


    return (
        <div className='hero relative overflow-hidden'>
          <svg xmlns="http://www.w3.org/2000/svg" className='svg-background' viewBox="0 0 1440 320" width="100%" height="300">
    <path fill="#FBE19D" fillOpacity="0.86" d="M0,160L40,186.7C80,213,160,267,240,245.3C320,224,400,128,480,117.3C560,107,640,181,720,181.3C800,181,880,107,960,69.3C1040,32,1120,32,1200,74.7C1280,117,1360,203,1400,245.3L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
</svg>
<div>

<div className='herocontent'>

<div className='text-left herotext'>
    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent:'space-between',display:'block-ruby' }}>
        <div style={{width:'500px'}}>
            <h1>Find The Best</h1>
            <h1>Activity for Your</h1>
            <h1>Child</h1>
        </div>
        <button>
            <img className='img mb-2.5' src={img} alt="" />
            
        </button>
    </div>
    <div className='svggg'>
  
        <img className='svgg' src={svg} alt="" />
 =
    </div>
</div>

            
          
</div>

            <div className='mt-299'>
            <button class="bg-yellow-500 hover:bg-yellow-700  text-white font-bold py-2 px-4 rounded-full">
            For Academics
            </button>
            <button class="bg-yellow-500 hover:bg-yellow-700  text-white font-bold py-2 px-4 rounded-full ml-10">
            SpArts in your home
            </button>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" className='svg-backgroundd' viewBox="0 0 1440 320"><path fill="#D8F2FE" fill-opacity="1" d="M0,288L12.6,266.7C25.3,245,51,203,76,176C101.1,149,126,139,152,149.3C176.8,160,202,192,227,208C252.6,224,278,224,303,197.3C328.4,171,354,117,379,90.7C404.2,64,429,64,455,58.7C480,53,505,43,531,74.7C555.8,107,581,181,606,192C631.6,203,657,149,682,133.3C707.4,117,733,139,758,176C783.2,213,808,267,834,277.3C858.9,288,884,256,909,240C934.7,224,960,224,985,202.7C1010.5,181,1036,139,1061,133.3C1086.3,128,1112,160,1137,160C1162.1,160,1187,128,1213,106.7C1237.9,85,1263,75,1288,74.7C1313.7,75,1339,85,1364,106.7C1389.5,128,1415,160,1427,176L1440,192L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path></svg>
            
        </div>
</div>

    );
}
