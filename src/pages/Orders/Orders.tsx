import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/shared/Buttons/CustomButton';
import CustomSelect from '../../components/shared/CustomSelect/CustomSelect';
import MyDropdown from '../../components/shared/Dropdown/Dropdown';
import Header from '../../components/shared/Header';
import icons from '../../components/shared/icons';
import RightSidebar from '../../components/shared/RightSidebar/RightSidebar';
import { orderLists } from '../../DummyData/DummyData';

const Orders = () => {
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false)
    const [search, setSearch] = useState('')
    const [sidebarTitle, setSidebarTitle] = useState('')
    const [filterOrdersInfos, setFilterOrdersInfos] = useState([])
    const [filterOptions, setFilterOptions] = useState({ source: '', destination: '', order_status: '', driver: '' })
    
    const filterBtnclick = () => {
        setRightSidebarOpen(true)
        setSidebarTitle('Filter')
    }

    //Apply  Filtering  by value;
    const filterApply = () => {
        let filter = orderLists
            .filter(order => {
                if (filterOptions.source === '') { return order }
                else {
                    return order.source.toLowerCase().includes(filterOptions.source.toLowerCase())
                }
            })
            .filter(order => {
                if (filterOptions.destination === '') { return order }
                else { return order.destination.toLowerCase().includes(filterOptions.destination.toLowerCase()) }
            })
            .filter(order => {
                if (filterOptions.driver === '') { return order }
                else {
                    return order.driver.toLowerCase().includes(filterOptions.driver.toLowerCase())
                }
            })
            .filter((order) => {
                if (filterOptions.order_status === '') { return order }
                else {
                    return order.order_status.toLowerCase().includes(filterOptions.order_status.toLowerCase())
                }
            })

        setFilterOrdersInfos(filter)
        setRightSidebarOpen(false)
    }


    useEffect(() => {
        let filter = orderLists.filter(order => {
            if (search === '') { return order }
            else { return order.order_id.toLowerCase().includes(search.toLowerCase()) }
        })
        setFilterOrdersInfos(filter)
        // eslint-disable-next-line
    }, [search])

    return (
        <div className='px-8  pt-12 lg:pt-0 relative overflow-hidden'>
            <RightSidebar btn={{ text: 'Apply', handleClick: filterApply }} title={sidebarTitle} rightSidebarOpen={rightSidebarOpen}
                setRightSidebarOpen={setRightSidebarOpen}>
                <FilterComponent filter={[filterOptions, setFilterOptions]} />
            </RightSidebar>
            <Header customClass='pb-5  lg:pb-10 w-full' name='Orders'>
                <div className='flex items-center gap-5 mt-9 lg:mt-0 w-full lg:w-fit '>
                    <div className='w-full lg:w-[230px] bg-white border rounded-lg flex items-center gap-2 px-3'>
                        <icons.search className='text-gray-400 text-2xl lg:text-xl' />
                        <input onChange={(e) => setSearch(e.target.value)} className='text-base lg:text-[13px] w-full outline-none text-gray-600 py-4 lg:py-2' placeholder='Search' type="search" name="" id="" />
                    </div>
                    <CustomButton hadleClick={filterBtnclick} block={false} btnClass='lg:w-fit lg:h-[42px] h-[56px] px-5 text-sm font-normal rounded-lg w-[56px] border border-orange-500 text-orange-500' text={<p className='flex items-center gap-2'>
                        <icons.filter /><span className='text-[15px] hidden lg:block'>filters</span>  </p>} />
                </div>
            </Header>
            <div >
                <OrdersLists search={search} filterOrdersInfos={filterOrdersInfos} />
            </div>

        </div>
    );
};
export default Orders;


const FilterComponent = ({ filter }) => {
    const [filterOptions, setFilterOptions] = filter;
    const source = [
        { id: 1, name: 'Source', value: 'source', mainValue: '' },
        { id: 2, name: 'lagos 1', value: 'source', mainValue: 'lagos 1' },
        { id: 3, name: 'lagos 2', value: 'source', mainValue: 'lagos 2' },
        { id: 4, name: 'lagos 3', value: 'source', mainValue: 'lagos 3' },
        { id: 5, name: 'lagos 4', value: 'source', mainValue: 'lagos 4' },
    ]
    const destination = [
        { id: 1, name: 'Destination', value: 'destination', mainValue: '' },
        { id: 2, name: 'Moscow', value: 'destination', mainValue: 'Moscow' },
        { id: 3, name: 'New York', value: 'destination', mainValue: 'new york' },
        { id: 4, name: 'Texas', value: 'destination', mainValue: 'Texas' },
        { id: 5, name: 'Florida', value: 'destination', mainValue: 'Florida' },
    ]
    const driver = [
        { id: 1, name: 'Driver', value: 'driver', mainValue: '' },
        { id: 2, name: 'Phillips', value: 'driver', mainValue: 'Phillips' },
        { id: 3, name: 'Adam', value: 'driver', mainValue: 'Adam' },
        { id: 4, name: 'Sam', value: 'driver', mainValue: 'Sam' },
        { id: 5, name: 'Smith', value: 'driver', mainValue: 'Smith' },
    ]
    const orderStatus = [
        { id: 1, name: 'Order Status', value: 'order_status', mainValue: '' },
        { id: 2, name: 'Processing', value: 'order_status', mainValue: 'Processing' },
        { id: 3, name: 'Completed', value: 'order_status', mainValue: 'Completed' },
    ]
    const changeFunc = (value) => {
        let cloneObj = { ...filterOptions };
        setFilterOptions({ ...cloneObj, [value.value]: value.mainValue })
    }

    return (
        <div>
            <CustomSelect changeFunc={changeFunc} label='Source' items={source} />
            <CustomSelect changeFunc={changeFunc} label='Destination' items={destination} />
            <CustomSelect changeFunc={changeFunc} label='Driver' items={driver} />
            <CustomSelect changeFunc={changeFunc} label='Order Status' items={orderStatus} />
        </div>
    )
}


const OrdersLists = ({ search, driverClick, filterOrdersInfos }) => {


    return (
        <div className='pb-10'>
            <div className='flex justify-around flex-wrap lg:justify-between gap-y-8 pb-10'>
                {
                    filterOrdersInfos.length ?
                        filterOrdersInfos.map(order => (
                            <SignleOrder key={order.id} order={order} />
                        ))
                        :
                        <p className='text-center'>No result Found!</p>
                }
            </div>
        </div>
    )
}


const SignleOrder = ({ order }) => {
    const navigate = useNavigate();
    const items = []

    return (
        <div onClick={() => navigate(`/order/${order.order_id.replace('#', '')}`)} className='cursor-pointer w-full md:w-1/2 2xl:w-1/3 h-[328px] '>
            <div className='bg-white shadow rounded-lg p-5 mx-2'>
                <header className='flex justify-between'>
                    <h1 className='uppercase font-bold'>{order.order_id}</h1>
                    <MyDropdown
                        btnText={icons.threeBarIcon}
                        items={items}
                    />
                </header>
                <div className='flex items-center gap-5 my-5'>
                    <div className='w-1/2'>
                        <p className='text-sm text-gray-600'>Receiver Name</p>
                        <p className='font-medium uppercase'>{order.receiver_name} </p>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-sm text-gray-600'>Order Status</p>
                        <p className={`font-medium uppercase ${order.order_status.toLowerCase() === 'completed' ? 'text-[#23BA27] ' : 'text-[#FF5701] '}`}>{order.order_status}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 my-5'>
                    <div className='w-1/2'>
                        <p className='text-sm text-gray-600'>Source</p>
                        <p className='font-medium capitalize'>{order.source} </p>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-sm text-gray-600'>Destination</p>
                        <p className='font-medium capitalize'>{order.destination}</p>
                    </div>
                </div>
                <div className='w-full mb-3'>
                    <p className='text-sm text-gray-600'>Dimension</p>
                    <div className='flex gap-5'>
                        <p className='text-gray-600'>L: <span className='text-black font-medium '>{order?.dimention?.l} M</span>
                        </p>
                        <p className='text-gray-600'>W: <span className='text-black font-medium '>{order?.dimention?.w} M</span>
                        </p>
                        <p className='text-gray-600'>H: <span className='text-black font-medium '>{order?.dimention?.h} M</span>
                        </p>
                    </div>
                </div>
                <div className='flex items-center gap-5 my-5'>
                    <div className='w-1/2'>
                        <p className='text-sm text-gray-600'>Driver</p>
                        <p className='font-medium capitalize'>{order.driver} </p>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-sm text-gray-600'>ETA</p>
                        <p className='font-medium capitalize'>{order.eta}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



