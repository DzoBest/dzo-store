'use client'

import React from 'react'
import { assets } from '@/public/assets/assets'
import Image from 'next/image'

interface HamXProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HamX = (params: HamXProps) => {

    const { isOpen, setIsOpen } = params;

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    }


    return (
        <div>
            {!isOpen && (
                <button
                    onClick={toggleMenu}
                    className='flex items-center gap-2 hover:text-gray-500 transition-colors duration-300 w-5 h-5 cursor-pointer'
                >
                    <Image src={assets.hamIcon} alt="Close" />
                </button>
            )}
            {isOpen && (
                <button
                    onClick={toggleMenu}
                    className='flex items-center gap-2 hover:text-gray-500 transition-colors duration-300 w-5 h-5 cursor-pointer'
                >
                    X
                </button>
            )}

        </div>
    )
};

export default HamX;
