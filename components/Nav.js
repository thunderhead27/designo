import Link from "next/link";
import React from 'react';
import tw, { styled } from 'twin.macro';
import Image from "next/image";
import { Spin as Hamburger } from "hamburger-react";

export const Nav = ({ isOpen, setOpen }) => {
    return (
        <div tw="flex flex-row justify-between py-8 tablet:py-16 items-center px-6 tablet:px-10 laptop:px-[165px]">
            <Link href="/"><Image src="/assets/shared/desktop/logo-dark.png" width={196} height={24} /></Link>
            <div tw="flex-row hidden tablet:flex font-sans text-darkGray tracking-widest gap-x-10">
                <Link href="/ourcompany">OUR COMPANY</Link>
                <Link href="/location">LOCATION</Link>
                <Link href="/contact">CONTACT</Link>
            </div>
            <div tw="block tablet:hidden"><Hamburger toggled={isOpen} toggle={setOpen} /></div>
        </div>
    );
};
