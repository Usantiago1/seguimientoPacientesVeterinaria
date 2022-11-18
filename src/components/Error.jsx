import React from 'react'

const Error = ({message}) => {
  return (
    
        <div className="bg-red-800 text-center text-white p-3 uppercase font-bold mb-3 rounded">
          <p>{message}</p>
        </div>
      
  )
}

export default Error