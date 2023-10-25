import React, { useState } from 'react';
import LoginSignupBox from '../../../components/shared/LoginSignupBox/LoginSignupBox';
import bgImage from '../../../assets/images/authentication_bg.png';
import { InputWithText } from '../Login/Login';
import { useForm } from "react-hook-form";


const ResetPassword = () => {
    const { handleSubmit, register } = useForm();
    const [tokenForm, setTokenForm] = useState(false)

    const formSubmit = (data) => {
        setTokenForm(true)
        console.log(tokenForm)
    }

    return (
        <section style={{ backgroundImage: `url(${bgImage})` }} className={`bg-contain `}>
            <form className='h-screen w-full sm:w-screen flex justify-center items-center' onSubmit={handleSubmit(formSubmit)}>
                <ResetForm register={register} />
            </form>
        </section>
    );
};

export default ResetPassword;

const ResetForm = ({ register }) => {
    const inputFeilds = [
        {
            id: 1,
            name: 'password',
            text: 'New Password',
            type: 'password',
            placeholder: 'New Password',

        },
        {
            id: 2,
            name: 'con_pass',
            text: 'Confirm Password',
            type: 'password',
            placeholder: 'Confirm Password',

        }
    ]
    return (
        <LoginSignupBox title='Reset Password' titleDes='Enter new password' btnText='Submit'>
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


