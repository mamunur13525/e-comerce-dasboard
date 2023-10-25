import React from 'react';

const InputLabel = ({ customClass, optional, defaultValue = '', placeholder = '', type = '', label = '', name = '', changeFunc }) => {
    return (
        <div className={customClass}>
            <p className='font-semibold text-sm'>{label} <span className='text-gray-400 font-normal'>{optional ? `(Optional)` : ''}</span></p>
            <input onChange={(e) => changeFunc([name], e.target.value)} defaultValue={defaultValue} className='border rounded-md text-gray-600 px-3 py-[15px] w-full mt-2 mb-4' placeholder={placeholder} type={type} name={name} />
        </div>
    );
};

export default InputLabel;