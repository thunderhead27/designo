import Image from "next/image";
import Link from "next/link";
import React from 'react';
import tw from 'twin.macro';

export const FooterWithContact = () => {
    return (
        <div tw="flex flex-col absolute px-10 bg-black laptop:px-[165px] h-[815px] tablet:h-[423px] laptop:h-[393px] w-full pt-[253px] tablet:pt-[166px] laptop:pt-[144px] gap-y-10 tablet:gap-y-0">
            <div tw="flex flex-col tablet:flex-row items-center tablet:items-start tablet:justify-between">
                <Link href="/"><Image src="/assets/shared/desktop/logo-light.png" width={202} height={27} /></Link>
                <div tw="tablet:hidden border border-[1px] opacity-10 mt-5 mb-5 w-full"></div>
                <div tw="flex flex-col tablet:flex-row text-white tracking-widest gap-x-10 gap-y-8 text-center tablet:text-start z-20">
                    <Link href="/ourcompany">OUR COMPANY</Link>
                    <Link href="/location">LOCATION</Link>
                    <Link href="/contact">CONTACT</Link>
                </div>
            </div>
            <div tw="hidden tablet:block border border-[1px] opacity-10 mt-10 mb-10"></div>
            <div tw="flex flex-col tablet:flex-row tablet:justify-between gap-y-10 items-center tablet:items-start">
                <div tw="text-white opacity-50">
                    <h2 tw="font-bold">Designo Central Office</h2>
                    <p>3886 Wellington Street</p>
                    <p>Toronto, Ontario M9C 3J5</p>
                </div>
                <div tw="text-white opacity-50">
                    <h2 tw="font-bold">Contact Us (Central Office)</h2>
                    <p>P : +1 253-863-8967</p>
                    <p>M : contact@designo.co</p>
                </div>
                <div tw="flex flex-row gap-x-4">
                    <div tw="h-6 w-6"><Image src="/assets/shared/desktop/icon-facebook.svg" width={24} height={24} /></div>
                    <div tw="h-6 w-6"><Image src="/assets/shared/desktop/icon-youtube.svg" width={24} height={24} /></div>
                    <div tw="h-6 w-6"><Image src="/assets/shared/desktop/icon-twitter.svg" width={24} height={24} /></div>
                    <div tw="h-6 w-6"><Image src="/assets/shared/desktop/icon-pinterest.svg" width={24} height={24} /></div>
                    <div tw="h-6 w-6"><Image src="/assets/shared/desktop/icon-instagram.svg" width={24} height={24} /></div>
                </div>
            </div>
        </div>
    );
};
