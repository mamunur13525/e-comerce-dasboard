import ProductsTable from "../../components/Tables/ProductsTable";
import debounce from "lodash/debounce";
import CustomButton from "../../components/shared/Buttons/CustomButton"
import Header from "../../components/shared/Header"
import icons from '../../components/shared/icons';
import { useState, useMemo } from 'react';

const Products = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    // for checking modal type
    const [modalType, setModalType] = useState('')

    const openCreateDevice = () => {
        console.log('button click ')
        setIsModalOpen(true)
        setModalType('new product')
    }

    // search section
    const debouncedResults = useMemo(() => {
        return debounce((e: any) => {setSearchValue(e.target.value)}, 500);
    }, []);
    return (
        <div>
            <Header customClass='pb-5  lg:pb-10 w-full' name='Products'>
                <div className='flex items-center gap-5 mt-9 lg:mt-0 w-full lg:w-fit '>
                    <CustomButton hadleClick={openCreateDevice} btnClass='fixed lg:static right-5 bottom-5 lg:w-fit lg:h-[42px] h-[56px] px-5 text-sm font-semibold rounded-full lg:rounded-md w-[56px]' text={<p className='flex justify-center items-center'><span className='hidden lg:block '>CREATE A Product
                    </span><span className=' lg:hidden'>{<icons.plus className={'text-4xl'} />}</span></p>} />

                    <div className='w-full lg:w-[230px] bg-white border rounded-lg flex items-center gap-2 px-3'>
                        <icons.search className='text-gray-400 text-2xl lg:text-xl' />
                        <input onChange={(e) => debouncedResults(e)} defaultValue={searchValue} className='text-base lg:text-[13px] w-full outline-none text-gray-600 py-4 lg:py-2' placeholder='Search' type="search" name="" id="" />
                    </div>
                </div>
            </Header>

            <div>
                <ProductsTable searchValue={searchValue} setSearchValue={setSearchValue} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} modalType={modalType} setModalType={setModalType} />
            </div>
        </div>
    )
}

export default Products