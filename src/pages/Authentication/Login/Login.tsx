import React, { useState } from 'react';
import LoginSignupBox from '../../../components/shared/LoginSignupBox/LoginSignupBox';
import bgImage from '../../../assets/images/authentication_bg.png';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { handleSubmit, register } = useForm();
    const [tokenForm, setTokenForm] = useState(false)
    const navigate = useNavigate()

    const formSubmit = (data) => {
        setTokenForm(true)
        console.log(tokenForm)
        navigate('/dashboard')
    }

    return (
        <section style={{ backgroundImage: `url(${bgImage})` }} className={`bg-contain `}>
            <form className='min-h-screen w-full sm:min-w-screen flex justify-center items-center' onSubmit={handleSubmit(formSubmit)}>
                <LoginForm register={register} />
            </form>
        </section>
    );
};

export default Login;

const LoginForm = ({ register }) => {
    const inputFeilds = [
        {
            id: 1,
            name: 'email',
            text: 'Email',
            type: 'email',
            placeholder: 'Email',

        },
        {
            id: 2,
            name: 'pass',
            text: 'Password',
            type: 'password',
            placeholder: 'Password',

        }
    ]
    return (
        <LoginSignupBox title='Login' titleDes='Login with email and password' forgetPass={true} >
            {
                inputFeilds.map(item => (
                    <div key={item.id} className='my-5'>
                        <InputWithText register={register} item={item} />
                    </div>
                )
                )
            }
            <div className='flex items-center gap-2 mt-8'>
                <input className='cursor-pointer' type="checkbox" name="" id="sign_in" />
                <label htmlFor="sign_in" className='text-sm cursor-pointer'>Keep me signed in</label>
            </div>
        </LoginSignupBox>
    )
}


export const InputWithText = ({ register, item }) => {
    const { placeholder, text, type = 'text', name = '' } = item;
    return (
        <div>
            <p className='text-sm font-semibold mb-2'>{text}</p>
            <input {...register(name)} className={`w-full border py-3 px-4  rounded-md text-sm ${item.customClass}`} placeholder={placeholder} type={type} name={name} id={name} required={register.required}/>
        </div>
    )
}

