import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DriverProfileImg from '../../components/Drivers/DriverProfileImg';
import Header from '../../components/shared/Header';
import icons from '../../components/shared/icons';
import { driversInfos, orderLists } from '../../DummyData/DummyData';
import usFlag from '../../assets/images/usa.svg';
import Rate from '../../components/shared/Rating/Rate';
import DetailsList from '../../components/shared/DetailsList/DetailsLIst';

const OrderDetails = () => {
    const { order_id } = useParams();
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState([]);
    const [addressDetails, setAddressDetails] = useState([]);

    useEffect(() => {
        if (order_id) {
            let findOrder = orderLists.find(item => item.order_id === `#${order_id}`)
            let infoArr = [
                {
                    id: 1,
                    label: 'Souce',
                    name: findOrder.source
                },
                {
                    id: 2,
                    label: 'Destination',
                    name: findOrder.source
                },
                {
                    id: 3,
                    label: 'Dimension',
                    name: <span className='flex gap-5'>
                        <span className='text-gray-600'>L: <span className='text-black font-medium '>{findOrder?.dimention?.l} M</span>
                        </span>
                        <span className='text-gray-600'>W: <span className='text-black font-medium '>{findOrder?.dimention?.w} M</span>
                        </span>
                        <span className='text-gray-600'>H: <span className='text-black font-medium '>{findOrder?.dimention?.h} M</span>
                        </span>
                    </span>
                },
                {
                    id: 4,
                    label: 'ETA',
                    name: findOrder.eta
                },
                {
                    id: 5,
                    label: 'Order Status',
                    name: <span className={`font-medium uppercase ${findOrder.order_status.toLowerCase() === 'completed' ? 'text-[#23BA27] ' : 'text-[#FF5701] '}`}>{findOrder.order_status}</span>
                },
                {
                    id: 6,
                    label: '',
                    name: <span className='w-[134px] h-[42px] bg-[#00AA00] rounded-lg text-white  flex  items-center justify-center font-bold text-xl'>
                        $ 115
                    </span>
                }
            ]
            setOrderDetails(infoArr)
        }

        let addressArr = [
            {
                id: 1,
                label: 'Receiver Name',
                name: 'Thomas Parker'
            },
            {
                id: 2,
                label: 'Phone',
                name: <div className='flex items-center gap-2'>
                    <img src={usFlag} alt="usa" />
                    <p className='font-medium'>+8 7784500150</p>
                </div>
            },
            {
                id: 3,
                label: 'Address',
                name: '1890 Popular Avenue, USA , 273892'
            }
        ]
        setAddressDetails(addressArr)

    }, [order_id])

    return (
        <div className='px-8  pt-12 lg:pt-0 relative overflow-hidden'>
            <Header customClass='pb-5  lg:pb-10 w-full' titleClass='w-fit whitespace-nowrap' name={<div className='w-full flex gap-2 items-center'>
                <icons.arrowLeft onClick={() => navigate(-1)} />
                <span>#{order_id}</span>
            </div>}>
            </Header>
            {
                <DetailsList infoArr={orderDetails} />
            }
            {
                <DetailsList title='Address DETAILS' infoArr={addressDetails} />
            }
            <DriverDetails driver={driversInfos[0]} />
        </div>
    );
};

export default OrderDetails;



const DriverDetails = ({ driver }) => {
    return (
        <div className='lg:py-8  lg:px-5 rounded-lg bg-white shadow-sm cursor-pointer w-full md:w-1/2 lg:w-full p-2 '>
            <h1 className='uppercase font-bold text-[#191C52]'>DRIVER DETAILS</h1>
            <div className='flex flex-col lg:flex-row items-start  lg:items-center gap-3  justify-between '>
                <div className='flex gap-2 items-center w-fit'>
                    <div className='w-[62px] h-[62px]'>
                        <DriverProfileImg status={driver.online_status} profileImg={driver.profile_img} />
                    </div>
                    <div className='w-fit'>
                        <p className='hidden lg:block uppercase text-gray-500 mb-1 text-sm'>Name</p>
                        <div className='font-medium capitalize w-fit whitespace-nowrap'>{driver.first_name} {driver.last_name}</div>
                        <div className='lg:hidden'>
                            <div className='font-medium'><Rate ratePoint={Number(driver.rating)} /> </div>
                        </div>
                        <div className={`flex items-center justify-center w-[84px]  h-[26px]  lg:hidden  mt-2 ${driver.online_status === 'active' ? 'text-green-600 bg-green-200/50' : 'text-red-600 bg-red-200/50'} text-center w-full  rounded-3xl font-semibold text-xs capitalize`}>{driver.online_status}</div>
                    </div>
                </div>
                <div>
                    <p className='text-gray-500 mb-1 text-sm'>Phone</p>
                    <div className='flex items-center gap-2'>
                        <img src={usFlag} alt="usa" />
                        <div className='font-medium'>{driver.phone}</div>
                    </div>
                </div>
                <div>
                    <p className='text-gray-500 mb-1 text-sm'>Email</p>
                    <div className='font-medium'>{driver.email}</div>
                </div>

                <div className='hidden lg:block'>
                    <p className='text-gray-500 mb-1 text-sm'>Rating</p>
                    <div className='font-medium'><Rate ratePoint={Number(driver.rating)} /> </div>
                </div>
                <div className='min-w-[110px] lg:flex  justify-center hidden'>
                    <div className={`${driver.online_status === 'active' ? 'text-green-600 bg-green-200/50' : 'text-red-600 bg-red-200/50'} text-center w-full py-2 px-5 rounded-3xl font-semibold text-[15px] capitalize`}>{driver.online_status}</div>
                </div>

            </div>
        </div>
    )
}