import React from 'react';
import HeaderLogo from '../assets/logo192.png';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../localStorage/LocalStorage';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const navigate = useNavigate();
  const { token, id, admin } = useLocalStorage();
  const navigation = [
    { name: 'Event', href: '/productlist', current: true },
    { name: 'Order', href: `/orderlist`, current: false },
    { name: 'Log out', href: '/logout', current: false },
  ];
  const navigation2 = [
    { name: 'Login', href: '/login', current: true },
    { name: 'Signup', href: '/', current: false },
  ];
  return (
    <>
      <Disclosure as="nav" className="bg-[#4338CA] sticky top-0 z-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      className="block h-8 w-auto lg:hidden"
                      src={HeaderLogo}
                      alt="HeaderLogo"
                    />
                    <img
                      className="hidden h-8 w-auto lg:block"
                      src={HeaderLogo}
                      alt="HeaderLogo"
                    />
                  </div>
                  <div className="hidden sm:mx-auto sm:block">
                    <div className="flex space-x-4">
                      {token
                        ? navigation.map((item) => (
                            <a
                              key={item.name}
                              onClick={() => {
                                navigate(item.href);
                              }}
                              className={classNames(
                                item.current
                                  ? 'bg-transparent text-white text-lg'
                                  : 'bg-transparent text-white text-lg',
                                'px-3 py-2 rounded-md text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))
                        : navigation2.map((item) => (
                            <a
                              key={item.name}
                              onClick={() => {
                                navigate(item.href);
                              }}
                              // href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-transparent text-white text-lg'
                                  : 'bg-transparent text-white text-lg',
                                'px-3 py-2 rounded-md text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 left-0 flex justify-end w-full items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block text-white h-6 w-6"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-transparent text-white text-lg'
                        : 'bg-transparent text-white text-lg',
                      'block px-3 py-2 rounded-md text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Header;
