import React from 'react';
import CustomSelect from '../shared/CustomSelect/CustomSelect';
import icons from '../shared/icons';
import InputLabel from '../shared/InputLabel/InputLabel';

const EditDevice = ({ deviceInfo = {} }) => {
    const vehicleTypes = [
        { id: 1, name: 'Vehicle Types Status', unavailable: false },
        { id: 2, name: 'Order Status 2', unavailable: false },
        { id: 3, name: 'Order Status 3', unavailable: false },
        { id: 4, name: 'Order Status 4', unavailable: true },
        { id: 5, name: 'Order Status 5', unavailable: false },
    ]
    const assignDrivers = [
        { id: 1, name: 'Order Status', unavailable: false },
        { id: 2, name: 'Order Status 2', unavailable: false },
        { id: 3, name: 'Order Status 3', unavailable: false },
        { id: 4, name: 'Order Status 4', unavailable: true },
        { id: 5, name: 'Order Status 5', unavailable: false },
    ]
    return (
        <div>
            <InputLabel defaultValue={deviceInfo.name} label='Device Name' placeholder='Device Name' name='device_name' />
            <InputLabel defaultValue={deviceInfo.licence_plate} label='Licence Plate' placeholder='Licence Plate' name='licence_plate' />
            <div>
                <p className='flex justify-between items-center font-semibold text-sm'>
                    <span>Capacity</span>
                    <span className='cursor-pointer text-red-500 flex items-center gap-1'>
                        KG{icons.arrowDown}</span>
                </p>
                <div className='flex  gap-5'>
                    <input defaultValue={deviceInfo.capacity.l} className='border rounded-md text-gray-600 px-3 py-2 w-full mt-2 mb-4' placeholder='Length' type='Length' name='Length' />
                    <input defaultValue={deviceInfo.capacity.w} className='border rounded-md text-gray-600 px-3 py-2 w-full mt-2 mb-4' placeholder='Width' type='Width' name='Width' />
                    <input defaultValue={deviceInfo.capacity.h} className='border rounded-md text-gray-600 px-3 py-2 w-full mt-2 mb-4' placeholder='Height' type='Height' name='Height' />
                </div>
            </div>
            <InputLabel defaultValue={deviceInfo.colour} label='Colour' placeholder='Colour' name='color' />

            <CustomSelect label='Vehicle Type' items={vehicleTypes} />
            <CustomSelect label='Assign Driver' items={assignDrivers} />

        </div>
    );
};

export default EditDevice;