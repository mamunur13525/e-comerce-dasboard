import React, { useState } from 'react';
import CreateDevice from '../../components/Devices/CreateDevice';
import EditDevice from '../../components/Devices/EditDevice';
import CustomButton from '../../components/shared/Buttons/CustomButton';
import MyDropdown from '../../components/shared/Dropdown/Dropdown';
import Header from '../../components/shared/Header';
import icons from '../../components/shared/icons';
import Modal from '../../components/shared/Modal/Modal';
import RightSidebar from '../../components/shared/RightSidebar/RightSidebar';
import GenerateDevice from '../../components/Devices/GenerateDevice';
import DeactivateToken from '../../components/Devices/DeactivateToken';
import { allDevicesInfo } from '../../DummyData/DummyData';

const Devices = () => {
    const [rightSidebarOpen, setRightSidebarOpen] = useState(false)
    const [sidebarComponent, setSidebarComponent] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalInfo, setModalInfo] = useState('');
    const [sidebarTitle, setSidebarTitle] = useState('')

    const openCreateDevice = () => {
        setRightSidebarOpen(true)
        setSidebarComponent(<CreateDevice />)
        setSidebarTitle('Create a Device')
    }
    const openEditDevice = (info) => {
        setRightSidebarOpen(true)
        setSidebarComponent(<EditDevice deviceInfo={info} />)
        setSidebarTitle('Edit Device')
    }

    const createDevice = () => {
        
    }
    const updateDevice = () => {
        
    }
    const generateToken = () => {

    }
    let btnText = sidebarTitle === 'Create a Device' ? 'Create' : 'Update'
    let handleClick = sidebarTitle === 'Create a Device' ? createDevice : updateDevice
    return (
        <div className='px-8  pt-12 lg:pt-0 relative overflow-hidden'>
            <RightSidebar btn={{ text: btnText, handleClick: handleClick }} title={sidebarTitle} rightSidebarOpen={rightSidebarOpen}
                setRightSidebarOpen={setRightSidebarOpen}  >
                {sidebarComponent}
            </RightSidebar>


            <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} >
                {
                    modalInfo === 'generate_token' && <GenerateDevice />
                }
                {
                    modalInfo === 'deactivate_device' && <DeactivateToken confirmBtnClick={generateToken} setIsModalOpen={setIsModalOpen} />
                }
            </Modal>
            <Header customClass='pb-5  lg:pb-10 w-full' name='Devices'>
                <div className='flex items-center gap-5 mt-9 lg:mt-0 w-full lg:w-fit '>
                    <CustomButton hadleClick={openCreateDevice} btnClass='fixed lg:static right-5 bottom-5 lg:w-fit lg:h-[42px] h-[56px] px-5 text-sm font-semibold rounded-full lg:rounded-md w-[56px]' text={<p className='flex justify-center items-center'><span className='hidden lg:block '>CREATE A DEVICE</span><span className=' lg:hidden'>{<icons.plus className={'text-4xl'} />}</span></p>} />

                    <div className='w-full lg:w-[230px] bg-white border rounded-lg flex items-center gap-2 px-3'>
                        <icons.search className='text-gray-400 text-2xl lg:text-xl' />
                        <input className='text-base lg:text-[13px] w-full outline-none text-gray-600 py-4 lg:py-2' placeholder='Search' type="search" name="" id="" />
                    </div>
                </div>
            </Header>
            <div className='flex justify-around flex-wrap lg:justify-between gap-y-4 pb-10'>
                {
                    allDevicesInfo.map(device => (
                        <SignleDevices key={device.id} setModalInfo={setModalInfo} setIsModalOpen={setIsModalOpen} openEditDevice={openEditDevice} device={device} />
                    ))
                }
            </div>
        </div>
    );
};

export default Devices;


const SignleDevices = ({ setModalInfo, device, openEditDevice, setIsModalOpen }) => {
    const editDevice = () => {
        openEditDevice(device)
    }
    const generateToken = () => {
        setIsModalOpen(true)
        setModalInfo('generate_token')
    }
    const deactivateDevice = () => {
        setIsModalOpen(true)
        setModalInfo('deactivate_device')

    }


    const items = [
        {
            id: 1,
            name: 'Edit Device',
            icon: '',
            handleChange: editDevice
        },
        {
            id: 2,
            name: 'Generate Token',
            icon: '',
            handleChange: generateToken
        },
        {
            id: 3,
            name: 'Deactivate Device',
            icon: '',
            handleChange: deactivateDevice
        }
    ]

    return (
        <div className='w-full md:w-1/2 2xl:w-1/3 h-[328px] '>
            <div className='bg-white shadow rounded-lg p-5 mx-2'>
                <header className='flex justify-between'>
                    <h1 className='uppercase font-bold'>{device.name}</h1>
                    <MyDropdown
                        btnText={icons.threeBarIcon}
                        items={items}
                    />
                </header>
                <div className='flex items-center gap-5 my-5'>
                    <div className='w-1/2'>
                        <p className='text-sm text-gray-600'>Licence Plate</p>
                        <p className='font-medium uppercase'>{device.licence_plate} </p>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-sm text-gray-600'>Licence Plate</p>
                        <p className={`font-medium uppercase ${device.status.toLowerCase() === 'active' ? 'text-green-600 ' : 'text-red-600 '}`}>{device.status}</p>
                    </div>
                </div>
                <div className='flex items-center gap-5 my-5'>
                    <div className='w-1/2'>
                        <p className='text-sm text-gray-600'>Colour</p>
                        <p className='font-medium capitalize'>{device.colour} </p>
                    </div>
                    <div className='w-1/2'>
                        <p className='text-sm text-gray-600'>Vehicle Type</p>
                        <p className='font-medium capitalize'>{device.vahicle_type}</p>
                    </div>
                </div>
                <div className='w-full mb-3'>
                    <p className='text-sm text-gray-600'>Capacity</p>
                    <div className='flex gap-5'>
                        <p className='text-gray-600'>L: <span className='text-black font-medium '>{device.capacity.l} M</span>
                        </p>
                        <p className='text-gray-600'>W: <span className='text-black font-medium '>{device.capacity.w} M</span>
                        </p>
                        <p className='text-gray-600'>H: <span className='text-black font-medium '>{device.capacity.h} M</span>
                        </p>
                    </div>
                </div>
                <div className='w-full'>
                    <p className='text-sm text-gray-600'>Driver</p>
                    <p className='font-medium capitalize'>{device.driver} </p>
                </div>
            </div>
        </div>
    )
}



