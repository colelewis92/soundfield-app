import { React } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../media/SoundfieldLong.png'

const navigation = [
  { name: 'Home', to: '/', current: true },
  { name: 'About', to: '/about', current: false },
  { name: 'Contact', to: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <Disclosure as="nav" className="bg-neutral-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-neutral-400 hover:bg-neutral-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div className="nav-logo">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={logo}
                      alt="Soundfield"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={logo}
                      alt="Soundfield"
                    />
                  </div>
                </div>
              </div>
              <div className="hidden sm:block absolute inset-y-0 right-0 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className={classNames(
                        item.to === location.pathname ? 'bg-neutral-900 text-white' : 'text-neutral-300 hover:bg-neutral-700 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            {({ close }) => (
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.to}
                  className={classNames(
                    item.to === location.pathname ? 'bg-neutral-900 text-white' : 'text-neutral-300 hover:bg-neutral-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                  onClick={() => close()}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
