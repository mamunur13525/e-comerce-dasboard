
import { useState, useEffect, useMemo } from 'react';
import debounce from "lodash/debounce";
import CustomButton from '../shared/Buttons/CustomButton';
import { twMerge } from 'tailwind-merge';
import Modal from '../shared/Modal/Modal';
import ManualSelect from '../shared/CustomSelect/ManualSelect';
import NewInput from '../shared/InputLabel/NewInput';
import UploadImage from '../shared/UploadImage/UploadImage';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import Spinner from '../shared/Loader/Spinner';
import { FaAngleDown, FaArrowDown, FaTimes } from 'react-icons/fa';
import ManualDropdown from '../shared/Dropdown/ManualDropdown';
import InputRange from '../shared/InputRange/InputRange';

interface Props{
   isModalOpen:boolean,
   setIsModalOpen:Function,
   modalType: string,
   setModalType: Function,
   searchValue: string,
   setSearchValue: Function
}


const headerList = [
    { id: 1, name: "Image", class: "" },
    { id: 2, name: "Title", class: "" },
    { id: 4, name: "Category", class: "" },
    { id: 5, name: "Price", class: "" },
    { id: 6, name: "Discount", class: "" },
    { id: 7, name: "actions", class: "text-center" }
];

const selectData = [
    {
        id: 1,
        title: "Product Category",
        name: 'category',
        options: ['fruits', 'vegetables', 'nuts']
    },
    {
        id: 2,
        title: "Product Weight Category",
        name: 'weight_category',
        options: ['kg', 'ton']
    },
    {
        id: 3,
        title: "Product Rating",
        name: 'rating',
        options: [1, 2, 3, 4, 5]
    },
    {
        id: 4,
        title: "Currency",
        name: 'currency',
        options: ['usd', 'taka']
    }
]

export default function ProductsTable({isModalOpen,setIsModalOpen, modalType, setModalType, searchValue, setSearchValue}:Props) {
    const [productsData, setProductsData] = useState([])
    const [loading, setLoading] = useState(true)
    const [sortCategoryLoading, setSortCategoryLoading] = useState(false)
    const [catSearch, setCatSearch] = useState('')
    const [discountRange, setDiscountRange] = useState('100')

    // cloudinary image button
    const [imageUploadType, setImageUploadType] = useState('')

    //for delete modal
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [deleteData, setDeleteData] = useState([])

    // for edit product modal
    const [editProductData, setEditProductData] = useState({})

    // for checking if all data is loaded
    const [allLoaded, setAllLoaded] = useState(false)

    // check area
    const [selectedProducts, setSelectedProducts] = useState([])
    const [selectAllCheck, setSelectAllCheck] = useState(false)

    const [formData, setFormData] = useState({})
    const [imageData, setImageData] = useState('')
    const [mainImage, setMainImage] = useState('')
    const [nestedImages, setNestedImages] = useState([])

    // reacr router query params
    const [params, setParams] = useSearchParams()
    const [offset, setOffset] = useState(parseInt(params.get('offset')) || 0)
    const [sortCategory, setSortCategory] = useState(params.get('cat') || 'all')
    const [searchParam, setSearchParam] = useState(params.get('search'))
    
    // set initial search value from query
    useEffect(() => {
        setSearchValue(searchParam || '')
    }, [])

    

    // for srting category
    const sortCategoryHandler = (e: any) => {
        if(sortCategory !== e) {
            setSortCategoryLoading(true)
        }
        if(e !== 'all') {
            setSortCategory(e)
            setParams(prm => {
                prm.set('cat', e)
                return prm
            })
        }
        else {
            setSortCategory('all')
            setParams(prm => {
                prm.delete('cat')
                return prm
            })
        }
    }

    const valueHandler = (e: any) => {
        const newData: any = {...formData}
        newData[e.title] = e.value
        delete newData.undefined
        setFormData(newData)
    }

    // for adding nested images
    useEffect(() => {
        if(imageData) {
            const newData: any = [...nestedImages, imageData]
            setNestedImages(newData)
            setImageData('')
            if(formData?.nestedImages && imageUploadType === 'nested') {
                setFormData((prevData) => {
                    const newFormData = {...prevData}
                    newFormData.nestedImages = newData
                    return newFormData
                })
            }
        }
    }, [imageData])

    // for changing main image
    useEffect(() => {
        if(formData?.item_img) {
            const newFormData = {...formData}
            newFormData.item_img = mainImage
            setFormData(newFormData)
        }
    }, [mainImage])

    // get initial products data
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/products-list', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({offset: 0, limit: offset + 10, sortCategory, search: searchValue, catSearch, discountRange})
        })
        .then(res => res.json())
        .then(result => {
            if(result.status === 'success') {
                setAllLoaded(result.allLoaded)
                setProductsData((prevData) => {
                    const newData = JSON.stringify(result.data) === '[]' ? result.data : prevData
                    return result.data || newData
                })
                setSortCategoryLoading(false)
            }
            else {
                console.log('error')
                toast.error(result?.message || 'Something is wrong')
            }
        })
        .catch(
            (error) => {
                console.log(error)
            }
        )
        .finally(
            () => {
                setLoading(false)
            }
        )
    }, [sortCategory, searchValue, catSearch, discountRange])

    const formSubmit = (e: any) => {
        e.preventDefault()
        if(formData.item_name && formData.description && formData.base_price && formData.quantity && formData.weight_category && formData.rating && formData.category && formData.discount && formData.currency) {
            if(mainImage && nestedImages[0]) {
                const newCollectedData = {...formData, item_img: mainImage, nestedImages: nestedImages}
                fetch('http://localhost:5000/upload-product', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({offset: offset, limit: 10, data: newCollectedData})
                })
                .then(res => res.json())
                .then(result => {
                    if(result.status === 'success') {
                        setAllLoaded(result.allLoaded)
                        setProductsData((prevData) => {
                            return result?.data ? result.data : prevData
                        })
                        setFormData({})
                        sortCategoryHandler('all')
                        setSearchValue('')
                        setIsModalOpen(false)
                    }
                    else {
                        toast.error(result?.message || 'Something is wrong')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
            }
            else {
                alert('Please select Images')
            }
        }
        else {
            alert('All field must be filled')
        }
    }

    // all check handler
    const allCheckHandler = (e: any) => {
        if(e.target.checked === true) {
            setSelectAllCheck(true)
            setSelectedProducts([...productsData])
        }
        else if(e.target.checked === false) {
            setSelectAllCheck(false)
            setSelectedProducts([])
        }
    }
    useEffect(() => {
        if(selectedProducts?.length === productsData?.length) {
            setSelectAllCheck(true)
        }
        else {
            setSelectAllCheck(false)
        }
    }, [selectedProducts, productsData])


    // load more handle
    const loadMoreHandler = (e: any) => {
        e.preventDefault()
        setLoading(true)

        const newOffset = offset + 10
        console.log(newOffset)

        fetch('http://localhost:5000/products-list', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({offset: newOffset, sortCategory: sortCategory ? sortCategory : 'all'})
        })
        .then(res => res.json())
        .then((result: any) => {
            if(result.status === 'success') {
                setAllLoaded(result.allLoaded)
                setParams(prm => {
                    prm.set('offset', `${newOffset}`)
                    return prm
                })
                setOffset(newOffset)
                setProductsData((prevData) => {
                    return prevData.concat(result.data ? result.data : [])
                })
            }
            else {
                toast.error(result?.message || 'Something is wrong')
            }
        })
        .catch(
            (error) => {
                console.log(error)
            }
        )
        .finally(
            () => {
                setLoading(false)
            }
        )
    } 


    // for deleteing all selected items 
    const deleteSelectedHandler = (e: any) => {
        e.preventDefault()
        setDeleteData(selectedProducts)
        setIsDeleteModalOpen(true)
    }

    const removeSelectedProduct = (e: any) => {
        const newData = selectedProducts?.filter(((product: any) => product._id !== e._id))
        setSelectedProducts(newData)
        setDeleteData(newData)
    }

    // for deleting a product
    const deleteHandler = (e: any) => {
        e.preventDefault()
        setLoading(true)
        fetch('http://localhost:5000/delete-products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({offset: offset, limit: 10, data: deleteData})
        })
        .then(res => res.json())
        .then((result: any) => {
            console.log(result)
            if(result.status === 'success') {
                setAllLoaded(result.allLoaded)
                setSelectedProducts([])
                setProductsData(result.data ? result.data : productsData)
                setDeleteData([])
                sortCategoryHandler('all')
                setSearchValue('')
                setIsDeleteModalOpen(false)
                toast.error(`${result.deletedCount} items has been deleted.`)
            }
            else {
                toast.error(result?.message || 'Something is wrong')
            }
        })
        .catch(
            (error) => {
                console.log(error)
            }
        )
        .finally(
            () => {
                setLoading(false)
            }
        )
    }

    // remove nested image
    const removeNestedImage = (e: any) => {
        const data = {...formData}
        const newNestedImages = [...data.nestedImages]
        newNestedImages.splice(e, 1);
        data.nestedImages = newNestedImages
        setFormData(data)
        setNestedImages(newNestedImages)
    }

    // close modal clear everything
    useEffect(() => {
        if(isModalOpen === false) {
            setFormData([])
            setEditProductData([])
            setNestedImages([])
            setImageData('')
            setMainImage('')
        }
    }, [isModalOpen])

    // update product
    const updateProductHandler = (e: any) => {
        e.preventDefault()
        fetch('http://localhost:5000/update-product', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({offset: offset, limit: 10, data: formData})
        })
        .then(res => res.json())
        .then((result: any) => {
            if(result.status === 'success') {
                setAllLoaded(result.allLoaded)
                setSelectedProducts([])
                setProductsData(result.data ? result.data : productsData)
                sortCategoryHandler('all')
                setSearchValue('')
                setIsModalOpen(false)
                setImageUploadType('')
                toast.success(`1 item has been updated.`)
            }
            else {
                toast.error(result?.message || 'Something is wrong')
            }
        })
        .catch(
            (error) => {
                console.log(error)
            }
        )
    }


    // search section
    useEffect(() => {
        if(searchValue) {
            setParams(prm => {
                prm.set('search', searchValue)
                return prm
            })
        }
        else {
            setParams(prm => {
                prm.delete('search')
                return prm
            })
        }
    }, [searchValue])

    // category search field
    const debouncedResults = useMemo(() => {
        return debounce((e: any) => {setCatSearch(e)}, 500);
    }, []);

    // discount range
    const discountDebouncedResults = useMemo(() => {
        return debounce((e: any) => {setDiscountRange(e)}, 500);
    }, []);
    return (
        <>
            {
                <Spinner parentStyle={`fixed left-[50%] duration-300 z-50 ${sortCategoryLoading ? 'top-[140px]' : 'top-[-40px]'}`} className='fill-blue-600 shadow-[0_0_15px_gray] rounded-full'/>
            }
            {/* Delete product modal */}
            <Modal title='' outsideClick={true} isOpen={isDeleteModalOpen} setIsOpen={setIsDeleteModalOpen} customClass='max-w-[80vw]' >
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-lg font-semibold underline mb-5'>Are you sure you want to delete this Product</h1>
                    <table className="table-auto w-full">
                        <thead className="text-xs uppercase border-b">
                            <tr>
                                <th>
                                    IMAGE
                                </th>
                                <th>
                                    TITLE
                                </th>
                                <th>
                                    CATEGORY
                                </th>
                                <th>
                                    PRICE
                                </th>
                                <th>
                                    DISCOUNT
                                </th>
                                <th>
                                    Quantity
                                </th>
                                {
                                    deleteData.length !== 1 && <th>
                                        Action
                                    </th>
                                }
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-slate-200 -700/50 ">
                            {
                                deleteData?.map((product: any) => {
                                    return <tr>
                                        <td>
                                            <img className='h-14' src={product.item_img} alt="" />
                                        </td>
                                        <td>
                                            {product.item_name}
                                        </td>
                                        <td>
                                            {product.category}
                                        </td>
                                        <td>
                                            {product.base_price} {product.currency === 'taka' ? 'tk' : 'usd'}
                                        </td>
                                        <td>
                                            {product.discount}%
                                        </td>
                                        <td>
                                            {product.quantity} {product.weight_category}
                                        </td>
                                        {
                                            deleteData.length !== 1 && <td>
                                                <div onClick={() => removeSelectedProduct(product)} className='w-5 h-5 ml-4 flex justify-center items-center p-[2px] rounded-full cursor-pointer duration-300 hover:bg-slate-300'>
                                                    <FaTimes className="w-full h-full text-slate-800" />
                                                </div>
                                            </td>
                                        }
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                    <CustomButton hadleClick={deleteHandler} block={false} btnClass='h-[45px] bg-red-500 text-white w-[49%] mt-3' text='DELETE' />
                </div>
            </Modal>
            {/* Create New Product Modal */}
            <Modal title='' outsideClick={false} isOpen={isModalOpen} setIsOpen={setIsModalOpen} customClass='max-w-[80vw]' >
                <div className='flex justify-between items-start'>
                    <form onSubmit={formSubmit} className='flex flex-wrap justify-between items-start'>
                        <NewInput placeholder={'Product Name'} type={'text'} label={'Product Name'} name={'item_name'} customClass={"w-full sm:w-[49%]"} optional={undefined} defaultValue={modalType !== 'new product' ? formData?.item_name : ''} changeFunc={valueHandler} inputCss={''} required={true} />
                        {
                            selectData.map(data => <ManualSelect key={data.id} getValue={valueHandler} css="w-[49%]" title={data.title} name={data.name} options={data.options} selectCss={''} titleCss={''} defaultValue={modalType !== 'new product' ? formData[data.name] : `select ${data.title}`} />)
                        }
                        <NewInput placeholder={'Item Price'} type={'number'} label={'Item Price'} name={'base_price'} customClass={"w-full sm:w-[49%]"} optional={undefined} defaultValue={modalType !== 'new product' ? formData?.base_price : ''} changeFunc={valueHandler} inputCss={''} required={true} />
                        <NewInput placeholder={'Quantity'} type={'number'} label={'Quantity'} name={'quantity'} customClass={"w-full sm:w-[49%]"} optional={undefined} defaultValue={modalType !== 'new product' ? formData?.quantity : ''} changeFunc={valueHandler} inputCss={''} required={true} />
                        <NewInput placeholder={'Discount'} type={'number'} label={'Discount (%)'} name={'discount'} customClass={"w-full sm:w-[49%]"} optional={undefined} defaultValue={modalType !== 'new product' ? formData?.discount : ''} changeFunc={valueHandler} inputCss={''} required={true} />
                        <NewInput placeholder={'Description'} type={'text'} label={'Description'} name={'description'} customClass={"w-full sm:w-[49%]"} optional={undefined} defaultValue={modalType !== 'new product' ? formData?.description : ''} changeFunc={valueHandler} inputCss={''} required={true} />
                        {
                            modalType === 'new product' && mainImage && <UploadImage multiple={true} crop={false} setImageData={setImageData} btnName={'Upload Nested Images'} btnClass={'w-[49%] h-12 mt-2'} />
                        }
                        {
                            modalType === 'new product' && mainImage === '' && <UploadImage multiple={false} crop={false} setImageData={setMainImage} btnName={'Upload Main Image'} btnClass={'w-[49%] h-12 mt-2'} />
                        }
                        <div className="flex justify-between gap-5 w-full">
                            {
                                modalType === 'new product' ? 
                                <CustomButton type="submit" block={false} btnClass='h-[45px] bg-green-500 text-white w-[49%]' text='Upload' />
                                :
                                modalType === 'edit product' && 
                                <CustomButton type="submit" hadleClick={updateProductHandler} disabled={JSON.stringify(editProductData) === JSON.stringify(formData) ? true : false} block={false} btnClass='h-[45px] bg-green-500 text-white w-[49%]' text='Update' />
                            }
                            <CustomButton hadleClick={() => setIsModalOpen(false)} block={false} btnClass='h-[45px] bg-red-500 text-white w-[49%]' text='Cancel' />
                        </div>
                    </form>
                    {
                        modalType === 'new product' ? 
                        mainImage && 
                        <div className='w-[70%] flex flex-wrap justify-between h-[500px] overflow-auto ml-2'>
                            <p className='w-full'>Main Image</p>
                            <img src={mainImage} className='w-3/5 mt-2 h-fit mx-2' alt="" />
                            <p className='w-full mt-3'>Nested Images</p>
                            {
                                nestedImages.map(image => <img src={image} className='w-[48%] mt-2 h-fit' alt="" />)
                            }
                        </div>
                        :
                        modalType === 'edit product' && formData?.item_img &&
                        <div className='w-[70%] flex flex-wrap justify-between h-[500px] overflow-auto ml-2'>
                            <p className='w-full flex justify-between items-center'>Main Image {
                                imageUploadType === 'main' ? <UploadImage multiple={false} crop={false} setImageData={setMainImage} btnName={'Change'} btnClass={'w-[49%] h-12 mt-2'} /> : <span onClick={() => setImageUploadType('main')} className='text-blue-500 hover:underline cursor-pointer'>Change</span>
                            }</p>
                            <img src={formData?.item_img} className='w-3/5 mt-2 h-fit mx-2' alt="" />
                            <p className='w-full mt-3 flex justify-between items-center'>Nested Images {
                                imageUploadType === 'nested' ? <UploadImage multiple={true} crop={false} setImageData={setImageData} btnName={'Add'} btnClass={'w-[49%] h-12 mt-2'} /> : <span onClick={() => setImageUploadType('nested')} className='text-blue-500 hover:underline cursor-pointer'>Add Images</span>
                            }</p>
                            {
                                formData?.nestedImages.map((image: string, index: any) => 
                                    <div className='w-[48%] mt-2 relative group/image'>
                                        <img src={image} className='w-full h-full object-cover' alt="" />
                                        <div onClick={() => removeNestedImage(index)} className='absolute w-full h-full duration-300 hidden justify-center items-center group-hover/image:flex bg-[#c1c1c1a6] top-0 cursor-pointer'>
                                            <FaTimes />
                                        </div>
                                    </div>)
                            }
                        </div>
                    }
                </div>
            </Modal>
            {/*End Create New Modal */}
            <p className='ml-2'>Total: <strong>{productsData?.length || 0}</strong></p>
            <p className='ml-2'>Selected: <strong>{selectedProducts?.length || 0}</strong></p>
            <div className=" bg-white  rounded-xl border  relative mt-3">
                <div className="overflow-x-auto pb-4">
                    <table className="table-auto w-full">
                        <thead className="text-xs uppercase border-b">
                            <tr>
                                <th className="px-2 py-5 pl-5 text-left whitespace-nowrap font-normal">
                                    <input checked={selectAllCheck} onChange={(e) => allCheckHandler(e)} type='checkbox' />
                                </th>
                                <th className="px-2  last:pr-5 py-5 whitespace-nowrap font-normal w-[150px]" >
                                    <div className={"text-left text-[11px] -400 text-slate-700"}>IMAGE</div>
                                </th>
                                <th className="px-2  last:pr-5 py-5 whitespace-nowrap font-normal w-[150px]" >
                                    <div className={"text-left text-[11px] -400 text-slate-700"}>TITLE</div>
                                </th>
                                <th className="px-2  last:pr-5 py-5 whitespace-nowrap font-normal w-[200px]" >
                                    <ManualDropdown button={`${catSearch ? '' : 'CATEGORY - '}${sortCategory} ${catSearch && `- ${catSearch}`}`} buttonStyle="hover:underline" items={['all', 'fruits', 'vegetables', 'nuts']} getValue={sortCategoryHandler} selectedValue={sortCategory} searchField={true} searchDefaultValue={catSearch} searchValue={debouncedResults} />
                                </th>
                                <th className="px-2  last:pr-5 py-5 whitespace-nowrap font-normal w-[125px]" >
                                    {/* <div className={"text-left text-[11px] -400 text-slate-700"}>PRICE</div> */}
                                    <InputRange button={`Price`} buttonStyle='hover:underline' data={productsData} />
                                </th>
                                <th className="px-2  last:pr-5 py-5 whitespace-nowrap font-normal w-[170px]" >
                                    {/* <div className={"text-left text-[11px] -400 text-slate-700"}>DISCOUNT</div> */}
                                    <InputRange button={`Discount ${discountRange !== '100' ? `(0 - ${discountRange}%)` : ''}`} buttonStyle='hover:underline' data={productsData} getRangeValue={discountDebouncedResults} defaultRange={discountRange} />
                                </th>
                                <th className="px-2  last:pr-5 py-5 whitespace-nowrap font-normal" >
                                    <div className={"text-[11px] -400 text-slate-700 text-center"}>
                                        {
                                            selectedProducts[0]?.item_name ? <CustomButton hadleClick={deleteSelectedHandler} block={false} btnClass='h-[45px] bg-red-500 text-white w-full' text='DELETE' /> : 'Action'
                                        }
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-slate-200 -700/50 ">
                            {
                                productsData[0]?.item_name && productsData.map((product: any) => <DocumentItem setIsDeleteModalOpen={setIsDeleteModalOpen} selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} key={product._id} data={product} setDeleteData={setDeleteData} setIsModalOpen={setIsModalOpen} setModalType={setModalType} setEditProductData={setEditProductData} setFormData={setFormData} setNestedImages={setNestedImages} />)
                            }
                        </tbody>
                    </table>
                    {
                        loading ? <div className='flex justify-center w-full mt-3'>
                            <Spinner className='fill-blue-600'/>
                        </div> 
                        : 
                        (allLoaded === false && <form onSubmit={loadMoreHandler} className='w-full flex justify-center mt-3'>
                            <CustomButton type="submit" btnClass='w-48 h-[45px] px-10 bg-green-500 text-white w-[49%]' text='Load More' />
                        </form>)
                    }
                </div>
            </div>
        </>
    );
}


interface Props{
    data: any,
    selectedProducts: any,
    setSelectedProducts: Function,
    setIsDeleteModalOpen: Function,
    setDeleteData: Function,
    setIsModalOpen: Function,
    setModalType: Function,
    setEditProductData: Function,
    setFormData: Function,
    setNestedImages: Function
}
function DocumentItem({ data, selectedProducts, setSelectedProducts, setIsDeleteModalOpen, setDeleteData, setIsModalOpen, setModalType, setEditProductData, setFormData, setNestedImages }: Props) {

    const [checked, setChecked] = useState(false)

    useEffect(() => {
        const selected = selectedProducts?.find((product: any) => product._id === data._id)
        if( selected ) {
            setChecked(true)
        }
        else {
            setChecked(false)
        }
    }, [selectedProducts])

    const checkHandler = (e: any) => {
        if(e.target.checked === true) {
            setChecked(true)
            setSelectedProducts([...selectedProducts, data])
        }
        else if (e.target.checked === false) {
            setChecked(false)
            const newData = selectedProducts?.filter((product: any) => product._id !== data._id)
            setSelectedProducts(newData)
        }
    }
    return (
        <tr className={`hover:bg-[#F7F7F7] duration-100 cursor-pointer relative h-20 py-2 ${checked ? 'bg-[#F7F7F7]' : ''}`}>
            <td className="px-2 first:pl-5 last:pr-5 whitespace-nowrap">
                <input onChange={(e) => checkHandler(e)} checked={checked} type='checkbox' />
            </td>
            <td className="px-2 first:pl-5 last:pr-5 whitespace-nowrap">
                <img className='h-14' src={data.item_img} alt="" />
            </td>
            <td className="px-2 whitespace-nowrap">
                <div>
                    <p className="-300 text-black font-semibold">
                        {data?.item_name || "--"}
                    </p>
                </div>
            </td>

            <td className="px-2 whitespace-nowrap">
                <div>
                    <p className=" -300 text-black ">
                        {data?.category || "0"}
                    </p>
                </div>
            </td>
            <td className="px-2 whitespace-nowrap">
                <p className=" -300 text-black  overflow-hidden text-ellipsis  max-w-[300px] w-fit">
                    {data?.base_price} {data?.currency === 'taka' ? 'tk' : data.currency}
                </p>
            </td>
            <td className="px-2 whitespace-nowrap">
                <div className="flex flex-col w-fit">
                    <div className="w-fit ">
                        <p className=" -300 text-black  text-left">
                            {data?.discount}%
                        </p>
                    </div>
                </div>
            </td>
            <td className="px-2 whitespace-nowrap">
                <div className="flex justify-center">
                    <CustomButton hadleClick={() => {
                        setIsModalOpen(true)
                        setModalType('edit product')
                        setEditProductData(data)
                        setFormData(data)
                        setNestedImages(data.nestedImages)
                    }} block={false} btnClass='h-[45px] bg-green-500 text-white w-[49%]' text='Edit' />
                    <CustomButton hadleClick={
                        () => {
                            setIsDeleteModalOpen(true)
                            setDeleteData([data])
                        }
                    } block={false} btnClass='h-[45px] bg-red-500 text-white w-[49%]' text='Delete' />
                </div>
            </td>
        </tr>
    );
}
