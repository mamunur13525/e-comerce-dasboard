import React from 'react';
import lock from '../../assets/images/lock.svg';

const GenerateDevice = () => {
    return (
        <div>
            <div className="mt-2 flex flex-col items-center justify-center">
                <div>
                    <img src={lock} alt="close" />
                </div>
                <h1 className='text-2xl font-bold text-center mt-6 mb-3'>Token</h1>
                <p className="text-sm text-gray-500 text-center mb-4">
                    Device Name: <span className='text-orange-600 uppercase font-bold'>IMPORT 1982923</span>
                </p>
            </div>
            <div className='bg-gray-300 rounded-md
       h-[80px] lg:h-[120px] px-4 flex items-center justify-center '>
                <h1 className='font-bold text-4xl lg:text-5xl text-center'>845 007</h1>
            </div>
            <p className='text-gray-600 mt-6 text-center'>
                <span>Please note:</span>
                <span className='text-gray-500'>This code will expire in 10 min.</span>
            </p>
        </div>
    );
};

export default GenerateDevice;