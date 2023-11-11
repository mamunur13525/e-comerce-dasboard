import React from 'react';
import logo from '../../../assets/images/logo.png';
import profileImg from '../../../assets/images/profile.png';
import { useLocation, useNavigate } from 'react-router-dom';
import icons from '../icons';
import { useState } from 'react';
import MyDropdown from '../Dropdown/Dropdown';
import Modal from '../Modal/Modal';
import logout_png from '../../../assets/images/logout_png.png'
import CustomButton from '../Buttons/CustomButton';
import { Bell } from '../ProfileOnHeader';
import RightSidebar from '../RightSidebar/RightSidebar';
import NotificationComponent from '../NotificationComponent/NotificationComponent';

const DashboardSidebar = () => {
    const [openSideBarMobile, setOpenSideBarMobile] = useState(false);
    let [isModalOpen, setIsModalOpen] = useState(false)
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false)
    const navigate = useNavigate();
    const handleChange = () => {

    }


    let sidebarCssOnMobile = openSideBarMobile ? '-translate-x-0 ' : '-translate-x-[110%] lg:-translate-x-0'
    return (
        <section className=' w-[280px] bg-white h-fit lg:h-screen'>
            <div className='fixed z-10 left-0 top-0 max-w-full bg-white shadow  lg:max-w-[280px] w-full h-fit lg:h-screen lg:py-6 px-4 '>
                <div className='flex items-center justify-between py-3 lg:py-0 cursor-pointer'>
                    <div className='flex items-center gap-5 lg:justify-center lg:pb-3 lg:w-full'>
                        <img onClick={() => setOpenSideBarMobile(true)} className='w-5 h-4 lg:hidden' src={icons.threeBar} alt="bar" />
                        <div className='h-[25px] w-[109px] lg:h-[45px]  lg:w-[196px]'>
                            <img className='w-full h-full' src={logo} alt="logo" />
                        </div>
                    </div>
                    <div className='lg:hidden flex items-center gap-3'>
                        <RightSidebar childClass={'px-0'} isBtn={false} title={'Notifications'} rightSidebarOpen={rightSidebarOpen} setRightSidebarOpen={setRightSidebarOpen}>
                            <NotificationComponent />
                        </RightSidebar>
                        <Bell setRightSidebarOpen={setRightSidebarOpen} />

                        <MyDropdown
                            btnText={<img className='h-[40px] w-[40px]' src={profileImg} alt="profile" />}
                            items={[{ id: 1, name: 'profile', icon: '', handleChange: handleChange }]}
                        />
                    </div>

                </div>
                <div className={`fixed lg:relative w-full h-screen top-0 left-0 px-4 lg:px-0 lg:mr-0 py-4 bg-white duration-300 ${sidebarCssOnMobile}`}>
                    <SidebarItems setOpenSideBarMobile={setOpenSideBarMobile} />
                    <div className=' absolute bottom-3 left-0  w-full px-4'>
                        <li className={`  flex items-center gap-4 cursor-pointer px-3 py-4 font-medium rounded-md hover:bg-blue-900/10`}>
                            <img src={icons.logout} alt="" />
                            <span>Log out</span>
                        </li>
                    </div>
                </div>
                <div className='hidden lg:block absolute bottom-3 left-0  w-full px-4'>
                    <li onClick={() => setIsModalOpen(true)} className={`  flex items-center gap-4 cursor-pointer px-3 py-4 font-medium rounded-md hover:bg-blue-900/10`}>
                        <img src={icons.logout} alt="" />
                        <span>Log out</span>
                    </li>
                </div>
            </div>


            <Modal  isOpen={isModalOpen} setIsOpen={setIsModalOpen} >
                <div className="mt-2 flex flex-col items-center justify-center">
                    <img src={logout_png} alt="log_out_icon" />
                    <h1 className='text-2xl font-bold text-center mt-5 mb-3'>Logout</h1>
                    <p className="text-sm text-gray-500 text-center">
                        Are you sure you want to logout from <br />
                        <span className='pt-1 block'>the portal?</span>
                    </p>
                </div>

                <div className="mt-8 flex justify-between gap-5">
                    <CustomButton hadleClick={() => setIsModalOpen(false)} block={false} btnClass='h-[45px]' text='Cancel' />
                    <CustomButton hadleClick={() => { setIsModalOpen(false); navigate('/') }} btnClass='h-[45px]' text='Logout' />
                </div>
            </Modal>
        </section >
    );
};

export default DashboardSidebar;





const SidebarItems = ({ setOpenSideBarMobile }) => {
    let location = useLocation();
    const navigate = useNavigate();

    const sidebarItems = [
        {
            id: 1,
            name: 'Dashboard',
            path: '/dashboard',
            icon: icons.dashboard,
            activeIcon: icons.dashboardWhite
        },
        {
            id: 2,
            name: 'Orders',
            path: '/orders',
            icon: icons.orders,
            activeIcon: icons.ordersWhite
        },
        {
            id: 3,
            name: 'Company',
            path: '/company',
            icon: icons.company,
            activeIcon: icons.companyWhite
        },
        {
            id: 4,
            name: 'Products',
            path: '/products',
            icon: icons.drivers,
            activeIcon: icons.driversWhite
        },
        {
            id: 5,
            name: 'Devices',
            path: '/devices',
            icon: icons.devices,
            activeIcon: icons.devicesWhite
        },
        {
            id: 6,
            name: 'Accounts/Transaction',
            path: '/accounts-transactions',
            icon: icons.accounts,
            activeIcon: icons.accountsWhite
        },
        {
            id: 7,
            name: 'Settings',
            path: '/settings',
            icon: icons.settings,
            activeIcon: icons.settingsWhite
        }
    ]

    let activePage = location?.pathname;

    const changeRoute = (path) => {
        navigate(path)
        setOpenSideBarMobile(false)
    }
    return (
        <ul className='flex flex-col'>
            <li onClick={() => setOpenSideBarMobile(false)} className={`lg:hidden flex items-center gap-4 px-3 py-4 rounded-md cursor-pointer font-medium w-fit duration-500`}>
                <icons.grClose className='text-3xl' />
                <span>Menu</span>
            </li>
            {
                sidebarItems.map(item => (
                    <li key={item.id} onClick={() => changeRoute(item.path)} className={`flex items-center gap-4 px-3 py-4   rounded-md cursor-pointer ${activePage === item.path ? 'bg-[#191C52] text-white font-semibold' : 'font-medium hover:bg-blue-900/10'}   duration-500`}>
                        {
                            activePage === item.path
                                ?
                                <img src={item.activeIcon} alt="" /> :
                                <img src={item.icon} alt="" />
                        }
                        <span>{item.name}</span>
                    </li>
                ))
            }
        </ul>
    )
}