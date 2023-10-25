import React, { useEffect, useRef } from 'react';
import CustomButton from '../Buttons/CustomButton';
import icons from '../icons';

const RightSidebar = ({ isBtn = true, childClass = '', children, btn, title, rightSidebarOpen, setRightSidebarOpen }) => {
    const ref = useRef(null);
    useEffect(() => {
        if (rightSidebarOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset';
        }
        const handleClickOutside = (event) => {
            if (rightSidebarOpen && ref.current && !ref.current.contains(event.target)) {
                setRightSidebarOpen(false)

            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
        // eslint-disable-next-line
    }, [ref, rightSidebarOpen]);


    return (
        <>
            <div className={`fixed w-full h-screen  left-0 top-0 bg-gray-900/50 z-20 ${rightSidebarOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} duration-500`}>
            </div>
            <div ref={ref} className={`fixed top-20 lg:top-0 right-0 w-full  lg:w-[500px] pb-7 pt-4 md:pt-7 bg-white text-black shadow-md h-screen z-30 duration-300 rounded-2xl lg:rounded-none ${rightSidebarOpen ? 'lg:translate-x-0 translate-y-0' : 'lg:translate-x-full translate-y-full lg:translate-y-0'}`}>
                <div className='flex justify-between items-center px-7'>
                    <p className='md:text-2xl text-lg font-bold'>{title}</p>
                    <div className='cursor-pointer' onClick={() => setRightSidebarOpen(false)}>
                        <icons.grClose className='text-3xl' />
                    </div>
                </div>
                <div className={`w-full h-[62vh] overflow-y-scroll lg:h-[76vh] my-5 px-7 ${childClass}`}>
                    {children}
                </div>
                {
                    isBtn &&
                    <div className='bg-white pt-3  absolute  w-full left-0 bottom-40  lg:bottom-5 px-10  flex gap-3'>
                        <CustomButton btnClass='h-[56px]' hadleClick={() => setRightSidebarOpen(false)} block={false} text='Cancel' />
                        <CustomButton hadleClick={btn.handleClick} btnClass='h-[56px]' text={btn.text} />
                    </div>
                }
            </div>
        </>
    );
};

export default RightSidebar;