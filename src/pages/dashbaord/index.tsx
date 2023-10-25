import React from 'react';
import AreaCharts from '../../components/shared/Charts/AreaCharts';
import BarCharts from '../../components/shared/Charts/BarCharts';
import PieCharts from '../../components/shared/Charts/PieCharts';
import Header from '../../components/shared/Header';
import icons from '../../components/shared/icons';

const index = () => {
    const statusitems = [
        {
            id: 1,
            icon: icons.van,
            name: 'Driver on job',
            amount: 7,
            bgColor: '#0055D7'
        },
        {
            id: 2,
            icon: icons.ordersWhite,
            name: 'Active Orders',
            amount: 8,
            bgColor: '#FF5701'
        },
        {
            id: 3,
            icon: icons.orderComplete,
            name: 'Completed Orders',
            amount: 128,
            bgColor: '#00AA00'
        },
        {
            id: 4,
            icon: icons.driversWhite,
            name: 'Active Drivers',
            amount: 7,
            bgColor: '#F00FBF'
        },
        {
            id: 5,
            icon: icons.driversWhite,
            name: 'Available Drivers',
            amount: 7,
            bgColor: '#31CBAF'
        },
        {
            id: 6,
            icon: icons.driversWhite,
            name: 'Inactive Drivers',
            amount: 7,
            bgColor: '#FFB822'
        },
    ]
    return (
        <section className='px-8  pt-12 lg:pt-0'>
            <Header name='Dashboard'>

            </Header>
            <div className='flex flex-wrap  gap-5 lg:gap-10 '>
                {
                    statusitems.map(item => (
                        <StatusItem key={item.id} item={item} />
                    ))
                }
            </div>

            <div className='flex flex-col lg:flex-row justify-between gap-10 my-10 '>
                <div className='w-full lg:w-1/2 bg-white shadow-sm p-5 rounded-md'>
                    <div className='flex justify-between items-center pb-6'>
                        <h1 className='text-[22px] font-semibold'>Earnings</h1>
                        <div className='flex items-center cursor-pointer'>
                            <span className='font-semibold text-xs'>Monthly</span>
                            {icons.arrowDown}
                        </div>
                    </div>
                    <div>
                        <BarCharts />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 bg-white shadow-sm p-5 rounded-md'>
                    <div className='flex justify-between items-center pb-6'>
                        <h1 className='text-[22px] font-semibold'>Order Statistics</h1>
                        <div className='flex items-center cursor-pointer'>
                            <span className='font-semibold text-xs'>This Week</span>
                            {icons.arrowDown}
                        </div>
                    </div>
                    <div className='overflow-hidden h-72'>
                        <PieCharts drivers={150}/>
                    </div>
                </div>
            </div>

            <div className='mb-10'>
                <div className='w-full bg-white shadow-sm p-5 rounded-md'>
                    <h1 className='text-[22px] font-semibold pb-6'>Order Statistics</h1>
                    <div>
                        <AreaCharts />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default index;


const StatusItem = ({ item }) => {
    return (
        <div className='bg-white flex-grow lg:w-1/4 w-full flex items-center gap-6 p-6 rounded-lg shadow-sm '>
            <div style={{ background: `${item.bgColor}` }} className='w-16 h-16 rounded-lg p-3 grid place-items-center'>
                <img className='w-[36px]' src={item.icon} alt="profile" />
            </div>
            <div>
                <p className='font-normal text-xl leading-snug'>{item.name}</p>
                <p className='font-bold text-[28px] leading-snug'>{item.amount}</p>
            </div>
        </div>
    )
}




