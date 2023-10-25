import React, { useState } from 'react';
import uploadProfileImg from '../../assets/images/uploadProfileImg.svg';
import icons from '../shared/icons';
import InputLabel from '../shared/InputLabel/InputLabel';
import CustomSelect from '../shared/CustomSelect/CustomSelect'
import CountryPhone from './CountryPhone';

const AddNewDriver = () => {
    const [profileImg, setProfileImg] = useState(null);

    const countries = [
        { id: 1, name: 'Order Status', unavailable: false },
        { id: 2, name: 'Order Status 2', unavailable: false },
        { id: 3, name: 'Order Status 3', unavailable: false },
        { id: 4, name: 'Order Status 4', unavailable: true },
        { id: 5, name: 'Order Status 5', unavailable: false },
    ]
    const states = [
        { id: 1, name: 'Order Status', unavailable: false },
        { id: 2, name: 'Order Status 2', unavailable: false },
        { id: 3, name: 'Order Status 3', unavailable: false },
        { id: 4, name: 'Order Status 4', unavailable: true },
        { id: 5, name: 'Order Status 5', unavailable: false },
    ]
    const city = [
        { id: 1, name: 'City', unavailable: false },
        { id: 2, name: 'City 2', unavailable: false },
        { id: 3, name: 'City 3', unavailable: false },
        { id: 4, name: 'City 4', unavailable: true },
        { id: 5, name: 'City 5', unavailable: false },
    ]

    return (
        <div>
            <div className='flex justify-center py-3'>
                {
                    profileImg ?
                        <div className='relative border p-1 border-orange-500 rounded-full'>
                            <img className='w-[110px]  h-[110px] rounded-full shadow' src={profileImg} alt='profile_image' />
                            <icons.grClose onClick={() => setProfileImg(null)} className='absolute top-0 right-2 bg-orange-500 text-white text-3xl p-1  rounded-full cursor-pointer' />
                        </div>
                        :
                        <label htmlFor='profile_img' className='w-fit'>
                            <img className='cursor-pointer w-[110px]  h-[110px]' src={uploadProfileImg} alt="" />
                            <input onChange={(e) => setProfileImg(URL.createObjectURL(e.target.files[0]))} className='hidden' type="file" name="profile_img" id="profile_img" />
                        </label>
                }
            </div>
            <InputLabel defaultValue='' label='First Name' placeholder='First Name' name='first_name' />
            <InputLabel defaultValue='' label='Last Name' placeholder='Last Name' name='last_name' />
            <div>
                <p className='font-semibold text-sm'>Phone  Number</p>
                <CountryPhone />
            </div>
            <InputLabel defaultValue='' label='Email' optional={true} placeholder='Email' name='email' />
            <h1 className='font-semibold text-xl mb-4 mt-6'>Address</h1>
            <InputLabel defaultValue='' label='Street' placeholder='Street' name='street' />
            <div className='flex gap-2'>
                <CustomSelect label='Country' items={countries} />
                <CustomSelect label='State' items={states} />
            </div>
            <div className='flex gap-2'>
                <CustomSelect label='City' items={city} />
                <InputLabel customClass='w-full' defaultValue='' label='Postcode/Zip' placeholder='Postcode/Zip' name='postalcode_zip' />
            </div>
            <DocumentsUpload />
        </div>
    );
};

export default AddNewDriver;


const DocumentsUpload = () => {
    const [files, setFiles] = useState(null);

    return (
        <>
            <h1 className='font-semibold text-xl mb-4 mt-6'>Documents</h1>
            <label htmlFor='documents' className='cursor-pointer flex flex-col border h-[122px] border-dashed justify-items-center items-center justify-center rounded-lg border-gray-400 gap-3'>
                <input onChange={(e) => setFiles([...e.target.files])} className='hidden' type="file" name="documents" id="documents" multiple />
                <img src={icons.upload} alt="upload" />
                <p className='text-gray-500'>Drag & drop or <span className='font-bold text-blue-500'>browse</span> files to upload!</p>
            </label>
            <div className='flex flex-col gap-3 my-4'>
                {
                    files !== null && files.map((file, ind) => (
                        <div className='w-full flex items-center relative   gap-3 px-4 py-3  rounded-lg border'>
                            <div className='w-full flex gap-3'>
                                <img src={icons.docFile} alt="doc" />
                                <p className='font-medium w-[75%] lg:w-[85%] overflow-clip whitespace-nowrap '>{file.name}</p>
                            </div>
                            <div className='absolute right-3  top-3'>
                                {
                                    ind === 0 ?
                                        <icons.checkCircle className='text-2xl  ' />
                                        :
                                        <icons.closeCircle className='text-2xl  text-gray-400 cursor-not-allowed' />
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}