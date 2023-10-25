import React from 'react';
import ProfileOnHeader from './ProfileOnHeader';

const Header = ({ titleClass = '', customClass, name, children }) => {
    return (
        <header className={`flex flex-col lg:flex-row  lg:items-center justify-between py-10 ${customClass}`}>
            <div className={`text-2xl lg:text-4xl font-bold ${titleClass}`}>{name}</div>
            <div className='flex items-center  gap-10 pr-3 w-full'>
                <div className='w-full flex justify-start lg:justify-end'>
                    {children}
                </div>
                <div className='hidden lg:block w-64'>
                    <ProfileOnHeader />
                </div>
            </div>
        </header>
    );
};

export default Header;


