import React from 'react';
import icons from '../shared/icons';
import InputLabel from '../shared/InputLabel/InputLabel';

const CreateDevice = () => {
    return (
        <div>
            <InputLabel label='Device Name' placeholder='Device Name' name='device_name' />
            <InputLabel label='Licence Plate' placeholder='Licence Plate' name='licence_plate' />
            <div>
                <p className='flex justify-between items-center font-semibold text-sm'>
                    <span>Capacity</span>
                    <span className='cursor-pointer text-red-500 flex items-center gap-1'>
                        KG{icons.arrowDown}</span>
                </p>
                <div className='flex  gap-5'>
                    <input className='border rounded-md text-gray-600 px-3 py-2 w-full mt-2 mb-4' placeholder='Length' type='Length' name='Length' />
                    <input className='border rounded-md text-gray-600 px-3 py-2 w-full mt-2 mb-4' placeholder='Width' type='Width' name='Width' />
                    <input className='border rounded-md text-gray-600 px-3 py-2 w-full mt-2 mb-4' placeholder='Height' type='Height' name='Height' />
                </div>
            </div>
            <InputLabel label='Colour' placeholder='Colour' name='color' />
            <InputLabel label='Vehicle Type' placeholder='Vehicle Type' name='vehicle' />
            <InputLabel label='Assign Driver' placeholder='Assign Driver' name='assign_driver' />
        </div>
    );
};

export default CreateDevice;