import React from 'react'
import { categories } from '../data/data.ts'

type Props = {}

const Categories = (props: Props) => {
  return (
    <div className="max-w-[1640px] px-4 py-12 mx-auto">
        <h1 className="font-bold text-orange-400 text-center text-3xl">Top Rated Menu Items</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            {categories.map((item, index) => (
                <div key={index} className="bg-gray-200 shadow-lg rounded-lg p-2 hover:scale-105 duration-300
                flex flex-wrap justify-between  items-center">
                    <h2 className="font-bold sm:text-xl">
                        {item.name}
                    </h2>
                    <img className="w-20 object-cover" src={item.image} alt={item.name}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Categories