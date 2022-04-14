import React from 'react'
import './imageTile.css'
import{FiDownload} from 'react-icons/fi'


const ImageTile = ({imgsrc , imgId}) => {
  return (
    <div className='imgTile'>
    <div style={{   backgroundImage: `url("${imgsrc}")`,
    backgroundSize : 'cover',
    backgroundPosition: 'center',
    height: '250px',
    width: '250px',
    margin: '10px', borderRadius : '2rem',
}}>

    </div>
    <div className='icon'><FiDownload/></div> 
    </div>
  )
}

export default ImageTile