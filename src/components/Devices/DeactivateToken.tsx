import React from 'react';
import closeSvg from '../../assets/images/close.svg';
import CustomButton from '../shared/Buttons/CustomButton';

const DeactivateToken = ({ confirmBtnClick, setIsModalOpen }) => {
    return (
        <div>
            <div className="mt-2 flex flex-col items-center justify-center">
                <div>
                    <img src={closeSvg} alt="close" />
                </div>
                <h1 className='text-2xl font-bold text-center mt-5 mb-3'>Deactivate Device</h1>
                <p className="text-sm text-gray-500 text-center">
                    Are you sure you want to deactivate the
                    <br />
                    <span className='pt-1 block'>device.</span>
                </p>
            </div>

            <div className="mt-8 flex justify-between gap-5">
                <CustomButton hadleClick={() => setIsModalOpen(false)} block={false} btnClass='h-[56px] lg:h-[45px]' text='Cancel' />
                <CustomButton hadleClick={confirmBtnClick} btnClass='h-[56px] lg:h-[45px]' text='Confirm' />
            </div>
        </div>
    );
};

export default DeactivateToken;