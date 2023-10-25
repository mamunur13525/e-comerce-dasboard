import React from 'react';

const ActiveOrders = ({ orderInfo }) => {
 
    return (
        <div className=''>
            <h1 className='font-bold mb-4 mt-6'>
                {orderInfo.order_id}
            </h1>
            <div className='pb-7'>
                <div className='flex gap-4 my-5'>
                    <div className='w-1/2'>
                        <p className=' text-gray-600 text-sm mb-1'>Source</p>
                        <p className='font-semibold w-full'>
                            {orderInfo.source}
                        </p>
                    </div>
                    <div className='w-1/2'>
                        <p className=' text-gray-600 text-sm mb-1'>Destination</p>
                        <p className='font-semibold w-full'>
                            {orderInfo.destination}
                        </p>
                    </div>
                </div>
                <div className='flex gap-4 my-5'>
                    <div className='w-1/2'>
                        <p className=' text-gray-600 text-sm mb-1'>Receiver Name</p>
                        <p className='font-semibold w-full'>
                            {orderInfo.receiver_name}
                        </p>
                    </div>
                    <div className='w-1/2'>
                        <p className=' text-gray-600 text-sm mb-1'>Order Status</p>
                        <p className=' w-full text-orange-500 font-medium uppercase'>
                            {orderInfo.order_status}
                        </p>
                    </div>
                </div>
                <div className=''>
                    <p className=' text-gray-600 text-sm mb-1'>Dimention</p>
                    <div className='flex gap-3'>
                        <p className='font-normal'><span className='font-medium text-gray-600 '>L:</span>{orderInfo.dimention.l} M</p>
                        <p className='font-normal'><span className='font-medium text-gray-600 '>W:</span>{orderInfo.dimention.w} M</p>
                        <p className='font-normal'><span className='font-medium text-gray-600 '>M:</span>{orderInfo.dimention.h} M</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ActiveOrders;