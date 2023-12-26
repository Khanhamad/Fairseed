import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import HelpIcon from '@mui/icons-material/Help';
import images from '../../constants/images';
// import Logo from '../images/Logo.png'
import ReactTable from '../Tabel/index';
import Searchbar from './Searchbar';

const Navbar = () => {
  return (
    <>
      <nav className='w-[100%] h-[100%] pl-5 pr-5 bg-white border-b-2 border-[#D8DBDF] border-solid justify-between items-center inline-flex'>
        <div className='w-[815.56px] self-stretch pt-2 pb-2 justify-start items-center gap-4 flex'>
          <div className='w-24 h-9 relative'>
             <img src={images.Logo} alt="" />
          </div>
        </div>
        <div className='w-auto self-stretch pl-4 pr-4 pb-2 pt-2 rounded justify-start items-center flex'>
          {/* <input className=' bg-gray-100 p-2 relative  ' placeholder='Search' /> */}
          <Searchbar/>
          <div className='flex-row justify-start items-center inline-flex '>
            <button className='w-6 h-6 flex-1 ml-3'>
              <NotificationsIcon />
            </button>
            <button className='w-6 h-6 flex-1  ml-3'>
              <TuneIcon />
            </button>
            <button className='w-6 h-6 flex-1 ml-3'>
              <HelpIcon />
            </button>
            <div className='w-[100%] h-[100%] justify-center items-center gap-3 pl-6 inline-flex'>
              <div className='flex-col justify-center items-end inline-flex'>
                <a className='text-right text-[#25272C] text-base font-bold break-words' style={{ fontFamily: 'Satoshi Variable' }}>Aatif Syed</a>
                <a className='text-right text-[#B6BAC3] text-xs font-medium break-words' style={{ fontFamily: 'Satoshi Variable' }}>UI/UX Designer</a>
              </div>
              <div className='w-10 h-10 justify-center items-center flex'>
                <button>
                  <img className='w-10 h-10 justify-center rounded-full ' src="https://via.placeholder.com/40x40" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Side bar */}

    </>
  )
}

export default Navbar