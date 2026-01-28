import React, { useContext } from 'react'
import { DContext } from '../Context'
import { useNavigate } from 'react-router-dom'

export default function SuccessLogin() {
    const { fruitItems } = useContext(DContext)
    console.log(fruitItems)
    const navigate = useNavigate()
  return (
      <div className='bg-green-50 h-[100vh] p-3'>
          <h1 className='text-black font-bold text-[30px] text-center'>Fruits</h1>
          <ul className='flex justify-around flex-wrap'>
              {
                  fruitItems.map(eachItem => (
                      <li onClick={() => navigate(`/fruitsDesc/${eachItem.id}`)} className='bg-white p-3 text-center rounded-md shadow-sm shadow-black border-0'>
                          <h1 className='text-[25px] font-bold'>{eachItem.name}</h1>
                          <p className='text-[25px] font-bold'>{eachItem.category}</p>
                      </li>
                  ))
              }
          </ul>
    </div>
  )
}
