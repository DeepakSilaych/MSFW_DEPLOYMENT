import React from 'react'

function Footer() {
  return (
    <footer class="w-full flex flex-col bg-gray-200 mt-10 pb-10">
        <div className='bg-yellow-400 text-4xl font-extrabold h-20 text-center flex flex-col justify-center'>
            Who we are
        </div>
        <div className='flex justify-evenly w-5/6 mx-auto pt-10'>
            <div className=''>
                <span className='text-3xl pb-8 font-semibold'>Implementating Partners</span>
                <span className='flex h-32 mt-8 mb-20 gap-4'>                     
                    <img src='https://www.iitb.ac.in/themes/custom/iitb_bootstrap/logo.png' alt='IITB' />   
                    <img src='https://www.climate.iitb.ac.in/wp-content/uploads/2023/07/IDP-logo-2-300x144.png' alt='IITB Logo' />
                </span>
                <span className='text-3xl font-semibold'>Sponsoring Partner</span>
                <img src='https://bfsi.eletsonline.com/wp-content/uploads/2022/09/HDFC-ERGO-General-Insurance.jpg' className='h-32 mt-10' alt='HDFC ERGO' />
                <h2 className='text-3xl mt-10 font-semibold'>Project Partners</h2>
                <img src='img/index/mcgm.png' alt='Project Partners' />
            </div>
            <div>
                <h2 className='text-3xl font-semibold'> IIT Bombay Team</h2>
                <ul className='child:text-xl child:my-2'>
                    <li>Prof. Subimal Ghosh</li>
                    <li>Prof. Raghu Murtugudde</li>
                    <li>Dr. Aniket Navalkar</li>
                    <li>Dr. Mayank Gupta</li>
                    <li>Dr. Sanghita Basu</li>
                    <li>Puja Tripathy</li>
                </ul>
                <p className='text-xl font-light mt-20'>
                    Website & App developed by <br/>IIT Bombay students <br/>
                    © 2023 IIT Bombay. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer