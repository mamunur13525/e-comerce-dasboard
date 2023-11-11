import { useEffect, useState } from "react"

interface Props{
    css: string,
    selectCss: string,
    titleCss: string,
    title: string,
    name: string,
    options: any,
    getValue: Function,
    defaultValue: string
}
export default function ManualSelect({ css = "", selectCss = '', titleCss = '', title = "", name = "", options, getValue, defaultValue }: Props) {

    const [selectedValue, setSelectedValue] = useState(defaultValue)

    const selected = (e: any) => {
        getValue({title: name, value: e.target.value})
        setSelectedValue(e.target.value)
    }

    return (
        <div className={`${css} flex flex-col`}>
            <label className={`${titleCss} text-sm font-semibold`} htmlFor={name}>{title}</label>
            <select onChange={(e) => selected(e)} defaultValue={defaultValue} value={selectedValue} className={`border text-left rounded-md text-gray-600 px-3 py-[15px] w-full mt-2 mb-4 flex items-center outline-none cursor-pointer ${selectCss}`} name={name} id={name}>
                <option hidden value={title}>Select {title}</option>
                {
                    options.map((data: any) => <option key={Math.random()} value={data}>{data}</option>)
                }
            </select>
        </div>
    )
}