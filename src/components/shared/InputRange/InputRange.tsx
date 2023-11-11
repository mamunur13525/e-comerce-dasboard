import { useEffect, useRef, useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

interface Props{
    button: string,
    buttonStyle: string,
    data: any,
    getRangeValue: Function,
    defaultRange: string
}
const InputRange = ({ button = 'Range', buttonStyle = '', data, getRangeValue, defaultRange }: Props) => {
    const ref = useRef(null)
    const [isOpen, setIsOpen] = useState(false)
    const [minMax, setMinMax] = useState({min: 0, max: 100})
    const [rangeValue, setRangeValue] = useState(minMax.max || defaultRange)




    useEffect(() => {
        setRangeValue(defaultRange)
    }, [defaultRange])
    // // set min and max value
    // useEffect(() => {

    // }, [data])

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
        <div ref={ref} className='relative'>
            <button onClick={() => setIsOpen(!isOpen)} className={twMerge('flex p-2 rounded-sm w-full text-left justify-between uppercase', buttonStyle)}>{button}<FaAngleDown className="ml-2" /></button>
            {
                isOpen && <div className={`absolute left-0 bottom-0 w-full min-w-[150px] translate-y-full z-20 bg-white border border-slate-300 rounded-sm p-2`}>
                    <div className='flex items-center justify-between'>
                        <span>{minMax.min}</span>
                        <span>{minMax.max}</span>
                    </div>
                    <input onChange={(e) => {
                        getRangeValue(e.target.value)
                        setRangeValue(e.target.value)
                    }} value={rangeValue} className='w-full mt-1' type="range" name="price" min={minMax.min} max={minMax.max} />
                </div>
            }
        </div>
    )
}

export default InputRange;