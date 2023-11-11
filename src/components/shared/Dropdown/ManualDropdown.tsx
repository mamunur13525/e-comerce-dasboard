import { useEffect, useRef, useState } from 'react'
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface Props{
    button: string,
    buttonStyle: string,
    items: any,
    getValue: Function,
    defaultValue: string,
    selectedValue: string,
    searchField: boolean,
    searchValue: Function,
    searchDefaultValue: string
}
const ManualDropdown = ({ button, buttonStyle, items, getValue, selectedValue, searchField = false, searchValue, searchDefaultValue = '' }: Props) => {
    const ref = useRef(null);
    const [isOpen, setIsOpen] = useState(false)
    const [searchInput, setSearchInput] = useState(searchDefaultValue || '')

    // useEffect(() => {
    //     setSearchInput(searchDefaultValue)
    // }, [searchDefaultValue])

    const selectHandler = (e: any) => {
        getValue(e)
    }

    // outside click handler
    useEffect(() => {
        const handleOutSideClick = (event: any) => {
            if (!ref.current?.contains(event.target)) {
                setIsOpen(false)
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);
    return (
        <div className="text-left relative" ref={ref}>
            <button onClick={() => setIsOpen(!isOpen)} className={twMerge('flex p-2 rounded-sm w-full justify-between uppercase', buttonStyle)}>{button} <FaAngleDown className="ml-2" /></button>
            {
                isOpen && 
                <div className='absolute left-0 bottom-0 flex flex-col border rounded-sm border-slate-300 translate-y-full z-50 shadow-md w-full bg-white'>
                    {
                        searchField && <div className='relative flex items-center'>
                            <input onChange={(e) => {
                                searchValue(e.target.value)
                                setSearchInput(e.target.value)
                            }} value={searchInput} className='p-[6px_8px] outline-none text-sm' type="text" placeholder='Search in Category' />
                            <FaTimes onClick={() => {
                                searchValue('')
                                setSearchInput('')
                            }} className={`absolute right-0 mr-2 cursor-pointer p-[2px] w-4 h-4 ${searchDefaultValue ? 'block' : 'hidden'}`} />
                        </div>
                    }
                    {
                        items.map((item: any) => <span onClick={() => {
                            selectHandler(item)
                            setIsOpen(false)
                        }} className={`p-2 cursor-pointer hover:bg-slate-200 ${selectedValue === item && 'bg-slate-200'}`} key={Math.random()}>{item}</span>)
                    }
                </div>
            }
        </div>
    )
}

export default ManualDropdown;