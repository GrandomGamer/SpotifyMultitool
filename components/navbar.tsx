import Link from 'next/link';
import React, { useState } from "react";
import {Router, useRouter} from 'next/router';
import { FaBeer, FaHome } from 'react-icons/fa';

export default function Navbar({ }) {
    const user = null;
    const userID = null;

    return (
        <div className='navbar bg-neutral pl-3 pr-3 fixed h-20 pt-0 pb-0'>
            <div className='lg:hidden sm:block navbar-start'>
                <p className='pl-1'>TEST</p>
            </div>
            <div className='sm:max-lg:navbar-center sm:block lg:navbar-start'>
                <Link href="/">
                    <img className='object-cover w-96 lg:pr-32' src='/logow.png'></img>
                </Link>
            </div>
            <div className='hidden lg:navbar-center lg:block h-full'>
                <ul className='menu menu-horizontal h-20'>
                    <li>
                        <NavItem to="/" text='Home'></NavItem>
                    </li>
                    <li>
                        <NavItem to="/tracks" text='Tracks'></NavItem>
                    </li>
                    <li>
                        <NavItem to="/playlists" text='Playlists'></NavItem>
                    </li>
                </ul>
            </div>
            <div className='navbar-end pt-1'>
                {user && (
                    <>
                        <NavItem to="/signout" text='{Sign Out}'></NavItem>
                    </>
                )}

                {!user && (
                    <>
                        <Link href="/signout">
                        <div className="avatar">
                            <div className="rounded-full w-15 h-15">
                                <img src="http://daisyui.com/tailwind-css-component-profile-1@56w.png"></img>
                            </div>
                        </div> 
                        </Link>
                    </>
                )}
            </div>
            
        </div>
    );
}

function NavItem({ text, to }: { text: string, to: string}) {

    const router = useRouter()

    return (
        <Link href={to} className={(router.pathname === to ? '!text-primary' : '')+ ' h-20 group text-white bg-transparent transition-all duration-500 hover:text-primary'}>
            <button className='gap-2 inline-flex items-center justify-between'>{text}
            <span className={(router.pathname === to ? '!w-full left-0' : '') + " block w-0 h-0.5 absolute left-2/4 bottom-0 bg-primary group-hover:w-full group-hover:left-0 transition-all duration-500"}></span></button>
        </Link>
    );
}