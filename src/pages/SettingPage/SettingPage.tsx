import React from 'react';
import RadioButton from '../../components/shared/Buttons/RadioButton';
import Header from '../../components/shared/Header';

const SettingPage = () => {

    const notificationSettings = [
        {
            id: 1,
            text: 'Notified when driver changes availability',
            checkEnable: true
        },
        {
            id: 2,
            text: 'Notified when order assigned',
            checkEnable: false
        },
        {
            id: 3,
            text: 'Notified when order completed',
            checkEnable: false
        }
    ]

    return (
        <section className='px-8  pt-12 lg:pt-0'>
            <Header name='Settings' />

            <div className='bg-white p-6 shadow-sm rounded-lg'>
                <h1>Notification Settings</h1>
                <div className='mt-5'>
                    {notificationSettings.map(item => (
                        <div key={item.id} className='flex gap-2 mb-2'>
                            <RadioButton checkEnable={item.checkEnable} />
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SettingPage;