import React, { useContext } from 'react'
import { DContext } from '../Context'
import { useParams } from 'react-router-dom'

export default function FruitsDesc() {
    const { fruitItems } = useContext(DContext)
    const {id} = useParams()
    const currentValue = fruitItems.find((each) => each.id === Number(id))

  return (
      <div className='bg-green-50 h-[100vh] p-3 flex justify-center items-center'>
          <div className='bg-white rounded-md w-[50%] p-3 '>
              <h1 className='text-blue-300 text-[25px] font-bold text-center'>{currentValue.name}</h1>
              <p className='text-[20px] font-bold text-center'>{currentValue.category}</p>
              <p className='text-[20px] font-bold text-center'>{currentValue.price}</p>
              <p className='text-gray-600 text-[20px] font-bold text-center'>{currentValue.description}</p>
         </div>
    </div>
  )
}
