import React from 'react';
import Rate from '../shared/Rating/Rate';
import usFlag from '../../assets/images/usa.svg';
import ActiveOrders from './ActiveOrders';
import DocumentDriverInfo from './DocumentDriverInfo';
import DriverProfileImg from './DriverProfileImg';
import CustomButton from '../shared/Buttons/CustomButton';

const DriverInfo = ({ info, setRightSidebarOpen }) => {
    
    return (
        <div>
            <div className='flex justify-between flex-col lg:flex-row items-center lg:items-start'>
                <div className='flex flex-col lg:flex-row items-center justify-center gap-3'>
                    <div className='h-[90px] w-[90px] border border-orange-500 p-1 rounded-full'>
                        <DriverProfileImg status={info.online_status} profileImg={info.profile_img} />
                    </div>
                    <div className='flex flex-col items-center lg:items-start'>
                        <p className='text-2xl font-semibold'>{info.first_name} {info.last_name} </p>
                        <Rate ratePoint={Number(info.rating)} />
                    </div>
                </div>
                <div className='min-w-[110px] flex justify-center mt-5'>
                    <span className={`${info.online_status === 'active' ? 'text-green-600 bg-green-200/50' : 'text-red-600 bg-red-200/50'} text-center w-full py-1 lg:py-2 px-3 lg:px-5 rounded-3xl font-semibold text-[15px] capitalize`}>{info.online_status}</span>
                </div>
            </div>
            <div className='my-5'>
                <p className='text-gray-500 mb-1 text-sm'>Phone</p>
                <div className='flex items-center gap-2'>
                    <img src={usFlag} alt="usa" />
                    <p className='font-medium'>{info.phone}</p>
                </div>
            </div>
            <div className='my-5'>
                <p className='text-gray-500 mb-1 text-sm'>Email</p>
                <p className='font-medium'>{info.email}</p>
            </div>
            <hr />
            <h1 className='font-semibold text-xl mb-4 mt-6'>Address</h1>
            <div className='w-full'>
                <p className=' text-gray-600 text-sm mb-1'>Street</p>
                <p className='font-semibold w-full'>
                    {info.address.street}
                </p>
            </div>
            <div className='flex gap-4 my-4'>
                <div className='w-1/2'>
                    <p className=' text-gray-600 text-sm mb-1'>Country</p>
                    <p className='font-semibold w-full'>
                        {info.address.country}
                    </p>
                </div>
                <div className='w-1/2'>
                    <p className=' text-gray-600 text-sm mb-1'>State</p>
                    <p className='font-semibold w-full'>
                        {info.address.state}
                    </p>
                </div>
            </div>
            <div className='flex gap-4 my-4'>
                <div className='w-1/2'>
                    <p className=' text-gray-600 text-sm mb-1'>City</p>
                    <p className='font-semibold w-full'>
                        {info.address.city}
                    </p>
                </div>
                <div className='w-1/2'>
                    <p className=' text-gray-600 text-sm mb-1'>Postcode/Zip</p>
                    <p className='font-semibold w-full'>
                        {info.address.postalcode_zip}
                    </p>
                </div>
            </div>
            <hr />

            <DocumentDriverInfo info={info} />
            <div className='bg-white py-3  w-full  flex gap-3'>
                <CustomButton btnClass='h-[56px] w-1/2' hadleClick={() => setRightSidebarOpen(false)} block={false} text='Revoke' />
                <CustomButton btnClass='h-[56px] w-1/2 bg-opacity-20 text-orange-500' text='Edit Profile' />
            </div>
            <hr />
            <h1 className='font-semibold text-2xl mb-4 mt-6'>Active Orders</h1>
            {
                Array.isArray(info?.active_orders?.orders) && info.active_orders.orders.map((orderInfo, ind) => (
                    <ActiveOrders key={ind || orderInfo.id} orderInfo={orderInfo} />
                ))
            }
        </div>
    );
};

export default DriverInfo;

