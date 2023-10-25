import React from 'react';

const CustomButton = ({ hadleClick, type = 'button', text = '', btnClass = 'h-[56px]  border-gray-300 ', block = true }) => {
    
    return (
        <button onClick={hadleClick} type={type} className={` hover:shadow-md w-full   font-semibold ${block ? 'bg-[#FF5701] text-white border-[#FE0000]' : 'border'} text-sm  rounded-lg text-center uppercase ${btnClass}`}>
            {text}
        </button>
    )
}

export default CustomButton;
