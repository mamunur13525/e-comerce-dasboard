import React from 'react';

const CustomButton = ({ hadleClick, type = 'button', text = '', btnClass = 'h-[56px]  border-gray-300 ', block = true, disabled = false }: any) => {

    return (
        <button onClick={hadleClick} disabled={disabled} type={type} className={` hover:shadow-md w-full duration-300 font-semibold ${block ? 'bg-[#FF5701] text-white border-[#FE0000]' : 'border'} text-sm  rounded-lg text-center uppercase ${btnClass} ${disabled === true && ' cursor-not-allowed opacity-60'}`}>
            {text}
        </button>
    )
}

export default CustomButton;
