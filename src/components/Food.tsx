import React, { useState } from 'react'
import { data } from '../data/data.ts'
type Props = {}

const Food = (props: Props) => {

    const [foods, setFoods] = useState(data);
    
    //
    const filterType = (category: string) => {
        setFoods(data.filter((item) => {
            return item.category === category
        }))
    }

    const filterPrice = (price: string) => {
        setFoods(data.filter((item) => {
            return item.price === price
        }))
    }
  return (
    <div className="max-w-[1640px] px-4 py-12 m-auto bg-orange-400 rounded-t-xl">
        <h1 className="text-white font-bold text-3xl text-center pb-4">
            Top Rated Menu
        </h1>

        {/* Filter Row */}
        <div className="flex flex-col lg:flex-row justify-between">
            {/* Filter Type */}
            <div>
                <p className="font-bold">Filter Type</p>
                <div className="flex justify-start flex-wrap">
                    <button onClick={() => setFoods(data)} className="m-1 bg-orange-400 border-white text-white hover:bg-white hover:text-orange-400">All</button>
                    <button onClick={() => filterType("burger")} className="m-1 bg-orange-400 border-white text-white hover:bg-white hover:text-orange-400">Burger</button>
                    <button onClick={() => filterType("pizza")} className="m-1 bg-orange-400 border-white text-white hover:bg-white hover:text-orange-400">Pizza</button>
                    <button onClick={() => filterType("chicken")} className="m-1 bg-orange-400 border-white text-white hover:bg-white hover:text-orange-400">Chicken</button>
                    <button onClick={() => filterType("salad")} className="m-1 bg-orange-400 border-white text-white hover:bg-white hover:text-orange-400">Salad</button>
                </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className="font-bold">Filter Price</p>
                <div className="flex justify-between flex-wrap max-w-[390px]">
                    <button onClick={() => filterPrice("$")} className="m-1 bg-orange-400 border-white text-white hover:bg-white hover:text-orange-400">$</button>
                    <button onClick={() => filterPrice("$$")} className="m-1 bg-orange-400 border-white text-white hover:bg-white hover:text-orange-400">$$</button>
                    <button onClick={() => filterPrice("$$$")} className="m-1 bg-orange-400 border-white text-white hover:bg-white hover:text-orange-400">$$$</button>
                    <button onClick={() => filterPrice("$$$$")} className="m-1 bg-orange-400 border-white text-white hover:bg-white hover:text-orange-400">$$$$</button>
                </div>
            </div>
        </div>

        {/* Display Foods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {foods.map((item,index) => (
                <div key={index} className="shadow-lg bg-white rounded-xl hover:scale-105 duration-300">
                    <img src={item.image} alt={item.name} 
                    className="rounded-t-xl w-full h-[200px] object-cover"/>
                    <div className="flex justify-between py-3 px-2">
                        <p>{item.name}</p>
                        <p><span>{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food