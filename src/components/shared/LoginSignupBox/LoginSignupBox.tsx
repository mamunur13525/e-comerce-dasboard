import React from 'react';
import CustomButton from '../Buttons/CustomButton';
import logo from '../../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const LoginSignupBox = ({ formSubmit, title = '', titleDes = '', children, btnType = 'submit', btnText = 'Login', btnClass = '', forgetPass = false }) => {
    const navigate = useNavigate();

    return (
        <div className='bg-white shadow rounded-lg px-10 py-12 w-[90%] md:w-[520px]'>
            <div className='h-[40px]  w-[174px]'>
                <img className='w-full h-full' src={logo} alt="logo" />
            </div>
            <h1 className='text-2xl md:text-4xl font-semibold mt-7 mb-4'>{title}</h1>
            <p className='text-[#212121] mb-7 leading-7'>{titleDes}</p>
            {children}
            <CustomButton type={btnType} text={btnText} btnClass={`mt-4 h-[50px] ${btnClass}`} />
            {
                forgetPass &&
                <p onClick={() => navigate('/forget-password')} className='cursor-pointer text-[#212121] font-semibold text-lg mt-8 text-center'>Forget password</p>
            }
        </div>
    )
}
export default LoginSignupBox;


