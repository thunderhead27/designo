import React from 'react';
import tw, { styled } from 'twin.macro';
import { Layout } from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function graphicdesign() {
    return (
        <Layout>
            <div tw="flex flex-col bg-peach h-[320px] tablet:h-[252px] laptop:h-[292px] text-center gap-y-8 place-content-center items-center tablet:rounded-xl">
                <h1 tw="text-5xl text-white font-medium">Graphic Design</h1>
                <p tw="text-white text-lg w-[400px]">We deliver eye-catching branding materials that are tailored to meet your business objectives.</p>
            </div>
            <div tw="flex flex-col items-center tablet:items-start laptop:m-auto laptop:w-1/2">
                <div tw="flex flex-col items-center laptop:flex-row py-[96px] w-full tablet:py-[120px] laptop:py-[160px] gap-y-10 gap-x-10">
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/graphic-design/desktop/image-change.jpg" width={320} height={350} alt="change" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">TIM BROWN</h1>
                            <p tw="w-[300px]">A book cover designed for
                                Tim Brown’s new release, ‘Change’</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/graphic-design/desktop/image-boxed-water.jpg" width={320} height={350} alt="boxed-water" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">BOXED WATER</h1>
                            <p tw="w-[300px]">A simple packaging concept made for Boxed Water</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/graphic-design/desktop/image-science.jpg" width={320} height={350} alt="science" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">SCIENCE!</h1>
                            <p tw="w-[300px]">A poster made in collaboration with the Federal Art Project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div tw="flex flex-col laptop:flex-row laptop:h-[308px] gap-x-6 gap-y-6">
                <div tw="flex flex-col items-center place-content-center h-[250px] tablet:h-[200px] laptop:h-full laptop:w-full bg-[url('/assets/home/mobile/image-app-design.jpg')] tablet:bg-[url('/assets/home/tablet/image-app-design.jpg')] laptop:bg-[url('/assets/home/desktop/image-app-design.jpg')] bg-no-repeat bg-cover bg-center rounded-xl bg-blend-overlay bg-black hover:bg-peach hover:bg-blend-multiply">
                    <h1 tw="text-white text-4xl">APP DESIGN</h1>
                    <Link href="/appdesign">
                        <div tw="flex flex-row items-center gap-x-2">
                            <span tw="text-white tracking-widest">VIEW PROJECTS</span>
                            <div><img src="/assets/shared/desktop/icon-right-arrow.svg" alt="rightArrow" /></div>
                        </div>
                    </Link>
                </div>
                <div tw="flex flex-col items-center place-content-center h-[250px] tablet:h-[200px] laptop:h-full laptop:w-full laptop:row-span-2 laptop:col-span-1 bg-[url('/assets/home/mobile/image-web-design.jpg')] tablet:bg-[url('/assets/home/tablet/image-web-design.jpg')] laptop:bg-[url('/assets/home/desktop/image-web-design-large.jpg')] bg-no-repeat bg-cover bg-center rounded-xl bg-blend-overlay bg-black hover:bg-peach hover:bg-blend-multiply">
                    <h1 tw="text-white text-4xl">WEB DESIGN</h1>
                    <Link href="/webdesign">
                        <div tw="flex flex-row items-center gap-x-2">
                            <span tw="text-white tracking-widest">VIEW PROJECTS</span>
                            <div><img src="/assets/shared/desktop/icon-right-arrow.svg" alt="rightArrow" /></div>
                        </div>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}