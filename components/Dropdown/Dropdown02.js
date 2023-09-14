/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

const Dropdown02 = ({width = 56, button, body}) => {
    return (
        <Menu as="div" className="relative text-left h-10 inline-block">
            <Menu.Button className="w-full rounded-md shadow-sm text-sm font-medium text-gray-700 focus:outline-none">
                {button}
            </Menu.Button>
    
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className={`origin-top-right absolute right-0 mt-2 w-${width} focus:outline-none z-40`}>
                    <div className="">
                        {body}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
      )
}
 
export default Dropdown02;