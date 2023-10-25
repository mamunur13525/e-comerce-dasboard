import React, { useState, useEffect, useRef } from 'react';
import CustomButton from '../../components/shared/Buttons/CustomButton';
import Header from '../../components/shared/Header';
import icons from '../../components/shared/icons';
import RightSidebar from '../../components/shared/RightSidebar/RightSidebar';
import { driversInfos } from '../../DummyData/DummyData';
import usaFlag from '../../assets/images/usa.svg';
import Rate from '../../components/shared/Rating/Rate';
import AddNewDriver from '../../components/Drivers/AddNewDriver';
import DriverInfo from '../../components/Drivers/DriverInfo';
import DriverProfileImg from '../../components/Drivers/DriverProfileImg';
import InputLabel from '../../components/shared/InputLabel/InputLabel';

const Drivers = () => {
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false)
    const [sidebarComponent, setSidebarComponent] = useState(null)
    const [sidebarTitle, setSidebarTitle] = useState('')
    const [search, setSearch] = useState('');
    const [isBtn, setBtn] = useState({ status: false, text: '' })
    const searchRef = useRef(null);
    const [filterDriversInfos, setFilterDriversInfos] = useState([])
    const [filterOptions, setFilterOptions] = useState({ name: '', email: '', phone: '', rating: '', status: '' })
    const [driverInfos, setDriverInfos] = useState({});


    const createDriver = () => {

    }


    const openAddNewDriver = () => {
        setRightSidebarOpen(true)
        setSidebarTitle('Add new driver')
        setBtn({ status: true, text: 'Add' })
    }
    const driverClick = (driverInfo) => {

        setDriverInfos(driverInfo)
        setRightSidebarOpen(true)
        setSidebarTitle('Driver details')
        setBtn({ status: false, text: '' })
    }
    const filterBtnclick = () => {
        setRightSidebarOpen(true)
        setSidebarTitle('Filter')
        setBtn({ status: true, text: 'Apply' })
    }

    //Apply  Filtering  by value;
    const filterApply = () => {
        let filter = driversInfos
            .filter(driver => {
                if (filterOptions.name === '') { return driver }
                else {
                    return `${driver.first_name} ${driver.last_name}`.toLowerCase().includes(filterOptions.name.toLowerCase())
                }
            })
            .filter(driver => {
                if (filterOptions.email === '') { return driver }
                else { return driver.email.toLowerCase().includes(filterOptions.email.toLowerCase()) }
            })
            .filter(driver => {
                if (filterOptions.phone === '') { return driver }
                else {
                    return driver.phone.toLowerCase().includes(filterOptions.phone.toLowerCase())
                }
            })
            .filter((driver) => {
                if (filterOptions.rating === '') { return driver }
                else {
                    return `${Math.round(driver.rating)}`.includes(filterOptions.rating.toLowerCase())
                }
            })
            .filter((driver) => {
                if (filterOptions.status === '') { return driver }
                else {
                    return driver.status.toLowerCase().includes(filterOptions.status.toLowerCase())
                }
            })

        setFilterDriversInfos(filter)
        setRightSidebarOpen(false)
    }


    useEffect(() => {
        let filter = driversInfos.filter(item => {
            if (search === '') return item
            else {
                return `${item.first_name} ${item.last_name}`.toLowerCase().includes(search.toLowerCase())
            }
        })
        setFilterDriversInfos(filter)
        // eslint-disable-next-line
    }, [search])

    let sideBarBtnClick = sidebarTitle === 'Filter' ? filterApply : createDriver;
    return (
        <div className='px-8  pt-12 lg:pt-0 relative overflow-hidden'>

            <RightSidebar childClass={isBtn.status ? 'h-[79vh] lg:h-[89vh]' : 'h-[78vh]'} isBtn={isBtn.status} btn={{ text: isBtn.text, handleClick: sideBarBtnClick }} title={sidebarTitle} rightSidebarOpen={rightSidebarOpen}
                setRightSidebarOpen={setRightSidebarOpen}  >
                {
                    sidebarTitle === 'Filter' && <FilterCoponent filterOptions={filterOptions} setFilterOptions={setFilterOptions} />}
                {
                    sidebarTitle === 'Add new driver' && <AddNewDriver />
                }
                {
                    sidebarTitle === 'Driver details' &&
                    <DriverInfo setRightSidebarOpen={setRightSidebarOpen} info={driverInfos} />
                }
            </RightSidebar>

            <Header customClass='pb-5  lg:pb-10 w-full' name='Drivers'>
                <div className='flex items-center gap-5 mt-9 lg:mt-0 w-full lg:w-fit '>
                    <CustomButton hadleClick={openAddNewDriver} btnClass='fixed lg:static right-5 bottom-5 lg:w-fit lg:h-[42px] h-[56px] px-5 text-sm font-semibold rounded-full lg:rounded-lg w-[56px] lg:shadow-none' text={<p className='flex justify-center items-center'><span className='hidden lg:block '>Add new driver</span><span className=' lg:hidden'>{<icons.plus className={'text-4xl'} />}</span></p>} />

                    <div className='w-full lg:w-[230px] bg-white border rounded-lg flex items-center gap-2 px-3'>
                        <icons.search className='text-gray-400 text-2xl lg:text-xl' />
                        <input ref={searchRef} onChange={(e) => setSearch(e.target.value)} className='text-base lg:text-[13px] w-full outline-none text-gray-600 py-4 lg:py-2' placeholder='Search' type="search" name="" id="" />
                    </div>
                    <CustomButton hadleClick={filterBtnclick} block={false} btnClass='lg:w-fit lg:h-[42px] h-[56px] px-5 text-sm font-normal rounded-lg w-[56px] border border-orange-500 text-orange-500' text={<p className='flex items-center gap-2'>
                        <icons.filter /><span className='text-[15px] hidden lg:block'>filters</span>  </p>} />

                </div>
            </Header>

            <div>
                <DriversAll filterDriversInfos={filterDriversInfos} search={search} driverClick={driverClick} />
            </div>

        </div>
    );
};

export default Drivers;


const DriversAll = ({ filterDriversInfos, driverClick }) => {

    return (
        <div className='pb-10'>
            <ul className='flex flex-wrap lg:flex-col gap-y-4'>
                {
                    filterDriversInfos.length ? filterDriversInfos.map(driver => (
                        <DriverLi onClick={driverClick} key={driver.id} driver={driver} />
                    ))
                        :
                        <p className='text-center'>No result Found!</p>
                }
            </ul>
        </div>
    )
}


const DriverLi = ({ onClick, driver }) => {

    return (
        <li onClick={() => onClick(driver)} className=' w-full md:w-1/2 lg:w-full p-2 lg:p-0'>
            <div className='flex flex-col lg:flex-row items-start  lg:items-center gap-3  justify-between p-5  rounded-lg bg-white shadow-sm cursor-pointer'>
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
                        <p className={`flex items-center justify-center w-[84px]  h-[26px]  lg:hidden  mt-2 ${driver.online_status === 'active' ? 'text-green-600 bg-green-200/50' : 'text-red-600 bg-red-200/50'} text-center w-full  rounded-3xl font-semibold text-xs capitalize`}>{driver.online_status}</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-500 mb-1 text-sm'>Phone</p>
                    <div className='flex items-center gap-2'>
                        <img src={usaFlag} alt="usa" />
                        <p className='font-medium'>{driver.phone}</p>
                    </div>
                </div>
                <div>
                    <p className='text-gray-500 mb-1 text-sm'>Email</p>
                    <p className='font-medium'>{driver.email}</p>
                </div>

                <div className='hidden lg:block'>
                    <p className='text-gray-500 mb-1 text-sm'>Rating</p>
                    <div className='font-medium'><Rate ratePoint={Number(driver.rating)} /> </div>
                </div>
                <div className='min-w-[110px] lg:flex  justify-center hidden'>
                    <span className={`${driver.online_status === 'active' ? 'text-green-600 bg-green-200/50' : 'text-red-600 bg-red-200/50'} text-center w-full py-2 px-5 rounded-3xl font-semibold text-[15px] capitalize`}>{driver.online_status}</span>
                </div>

            </div>
        </li>
    )
}




const FilterCoponent = ({ filterOptions, setFilterOptions }) => {
    const changeFunc = (name, value) => {
        let cloneObj = { ...filterOptions };
        setFilterOptions({ ...cloneObj, [name]: value })
    }

    return (
        <div>
            <InputLabel changeFunc={changeFunc} label='Name' placeholder='Name' name='name' />
            <InputLabel changeFunc={changeFunc} label='Email' placeholder='Email' name='email' />
            <InputLabel changeFunc={changeFunc} label='Phone' placeholder='Phone' name='phone' />
            <InputLabel changeFunc={changeFunc} label='Rating' placeholder='Rating' name='rating' />
            <InputLabel changeFunc={changeFunc} label='Status' placeholder='Status' name='status' />
        </div>
    )
}
