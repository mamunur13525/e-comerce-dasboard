import React from 'react';
import LoginSignupBox from '../../../components/shared/LoginSignupBox/LoginSignupBox';
import bgImage from '../../../assets/images/authentication_bg.png';
import { InputWithText } from '../Login/Login';
import { HiArrowLeft } from 'react-icons/hi'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
    const { handleSubmit, register } = useForm();
    const [tokenForm, setTokenForm] = useState(false)

    const formSubmit = (data) => {
        if(data.email){
            setTokenForm(true)
        }
    }

    return (
        <section style={{ backgroundImage: `url(${bgImage})` }} className={`bg-contain `}>
            <form className='h-screen w-full sm:w-screen flex justify-center items-center' onSubmit={handleSubmit(formSubmit)}>
                {
                    tokenForm ?
                        <TokenForm register={register} formSubmit={formSubmit} />
                        :
                        <ForgetPassForm register={register} formSubmit={formSubmit} />
                }
            </form>
        </section>
    );
};

export default ForgetPassword;

const TokenForm = ({ formSubmit, register }) => {
    const navigate = useNavigate()
    const inputFeilds = [
        {
            id: 1,
            name: 'token',
            text: 'Token',
            type: 'text',
            placeholder: 'XXX - XX',
            customClass: 'text-center',
            required:true
        }
    ]

    return (
        <LoginSignupBox
            formSubmit={formSubmit}
            title={
                <span className='flex items-center gap-2'>
                    <HiArrowLeft onClick={() => navigate(-1)} className='text-2xl md:text-3xl' />
                    <span>Enter Token</span>
                </span>
            }
            titleDes={<span>We have sent token on your given email <strong> joy@gmail.com</strong> Please enter received token to reset password</span>}
            btnText='Submit'
        >
            {
                inputFeilds.map(item => (
                    <div key={item.id} className='my-5'>
                        <InputWithText register={register} item={item} />
                    </div>
                )
                )
            }

        </LoginSignupBox>
    )
}


const ForgetPassForm = ({ formSubmit, register }) => {
    const navigate = useNavigate();
    const inputFeilds = [
        {
            id: 1,
            name: 'email',
            text: 'Email',
            type: 'email',
            placeholder: 'Email',

        }
    ]

    return (
        <LoginSignupBox
            formSubmit={formSubmit}
            title={
                <span className='flex items-center gap-3'>
                    <HiArrowLeft onClick={() => navigate(-1)} className='text-2xl md:text-3xl' />
                    <span>Forget Password</span>
                </span>
            }
            titleDes='Enter your registered email.'
            btnText='Submit'
        >
            {
                inputFeilds.map(item => (
                    <div key={item.id} className='my-5'>
                        <InputWithText register={register} item={item} />
                    </div>
                )
                )
            }
            <p className='font-semibold text-sm mt-6'>Receive Token</p>
            <div className='flex gap-3'>
                <div className='flex items-center gap-2 mt-2'>
                    <input className='cursor-pointer' type="checkbox" name="" id="email" />
                    <label htmlFor="email" className='text-sm cursor-pointer'>Email</label>
                </div>
                <div className='flex items-center gap-2 mt-2'>
                    <input className='cursor-pointer' type="checkbox" name="" id="phone" />
                    <label htmlFor="phone" className='text-sm cursor-pointer'>Phone</label>
                </div>
            </div>
        </LoginSignupBox>
    )
}


