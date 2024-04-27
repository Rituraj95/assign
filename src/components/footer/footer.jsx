import React from 'react';
import './footer.css'

function Footer() {
  return (
    <footer className="bg-200 py-8 footer">
      <div className="container mx-auto flex flex-col justify-center items-center mt-10">
        <div className='text-lg text-white textmain'>
            <h1 className='h1'>Stay Updated</h1>
            <p>Get the latest updates on academics near you! </p>
        </div>
        <div className='mt-10' >

        
        <input
          type="email"
          placeholder="E-mail"
          className="py-2 px-4 border border-gray-400 rounded-l focus:outline-none focus:ring focus:border-blue-500 text-sm"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded-r hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500 text-sm">
          Subscribe
        </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
