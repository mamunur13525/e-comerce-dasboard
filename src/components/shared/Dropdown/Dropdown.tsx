import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'


interface Props {
    btnText: any,
    btnCss: string,
    items: any,
    itemCss: string,
    side: string
}
export default function MyDropdown({ btnText, btnCss, items = [], itemCss = '', side = 'right-0' }: Props) {
    return (
        <div className="">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className={btnCss}>
                        {btnText}
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className={`absolute  mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50 ${side}`}>
                        <div className="px-1 py-1 ">
                            {
                                items.map((item: any) => (
                                    <div key={item.id}>
                                        <Menu.Item >
                                            {({ active }) => (
                                                <button
                                                    onClick={() => item.handleChange(item)}
                                                    className={`${active ? 'bg-orange-500 text-white' : 'text-gray-900'
                                                        } group flex w-full items-center rounded-md px-2 py-2 text-sm font-medium capitalize`}
                                                >
                                                    {
                                                        item.icon &&
                                                        <span className="mr-2 h-5 w-5">
                                                            {/* {item.icon} */}
                                                        </span>
                                                    }
                                                    {item.name}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                ))
                            }
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

