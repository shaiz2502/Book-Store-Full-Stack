/* eslint-disable no-unused-vars */
import React from 'react'

function Cards({ item }) {
    return (
        <>
            <div className='mt-5 my-3 p-3'>
                <div className="card bg-base-100 w-92 shadow-xl hover:scale-110 duration-300">
                    <figure>
                        <img
                            src={item.image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {item.name}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                        <p>{item.title}</p>
                        <div className="card-actions justify-between">
                            <div className="p-3 badge badge-outline">${item.price}</div>
                            <div className="badge badge-outline cursor-pointer px-4 py-3 hover:bg-pink-500 hover:text-white">Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards
