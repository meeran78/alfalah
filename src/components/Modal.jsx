import React from 'react'

const Modal = ({isVisible,  onClose, children }) => {
    if(!isVisible) return null
 const handleClose = (e) => {
    if(e.target.id === 'modalWrapper') onClose(
        
    )
 }
  return (
    <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center 
    items-center' id='modalWrapper' onClick={handleClose}>

      <div className='w-[450px] flex flex-col sm:w-[600px]'>
        <button className='text-white text-xl place-self-end' onClick={() => onClose()}>X</button>
        <div className='bg-white p-3 rounded'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal