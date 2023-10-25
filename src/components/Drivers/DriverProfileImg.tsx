import React from 'react';

const DriverProfileImg = ({ profileImg, status }) => {
    return (
        <div className='w-full h-full relative'>
            <img className='w-full h-full' src={profileImg} alt="profile_img" />
            {
                status === 'active' &&
                <span className='w-4 h-4  bg-green-500 rounded-full block absolute top-0 right-0  border-[3px] border-white shadow-sm'>
                </span>
            }
        </div>
    );
};

export default DriverProfileImg;