import React from 'react';
import tw, { styled } from 'twin.macro';
import { Layout } from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function appdesign() {
    return (
        <Layout>
            <div tw="flex flex-col bg-peach h-[320px] tablet:h-[252px] laptop:h-[292px] text-center gap-y-8 place-content-center items-center tablet:rounded-xl">
                <h1 tw="text-5xl text-white font-medium">App Design</h1>
                <p tw="text-white text-lg w-[400px]">Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.</p>
            </div>
            <div tw="flex flex-col items-center tablet:items-start laptop:mr-auto laptop:ml-auto laptop:right-0 laptop:left-0">
                <div tw="flex flex-col items-center laptop:grid laptop:grid-cols-3 laptop:grid-rows-2 py-[96px] w-full tablet:py-[120px] laptop:py-[160px] gap-y-10 gap-x-10">
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/app-design/desktop/image-airfilter.jpg" width={320} height={350} alt="airFilter" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">AIR FILTER</h1>
                            <p tw="w-[300px]">Solving the problem of poor indoor air quality by filtering the air</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/app-design/desktop/image-eyecam.jpg" width={320} height={350} alt="eyecam" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">EYECAM</h1>
                            <p tw="w-[300px]">Product that lets you edit your favorite photos and videos at any time</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/app-design/desktop/image-faceit.jpg" width={320} height={350} alt="faceit" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">FACEIT</h1>
                            <p tw="w-[300px]">Get to meet your favorite internet superstar with the faceit app</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/app-design/desktop/image-todo.jpg" width={320} height={350} alt="todo" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">TODO</h1>
                            <p tw="w-[300px]">A todo app that features cloud sync with light and dark mode</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/app-design/desktop/image-loopstudios.jpg" width={320} height={350} alt="loopstudio" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">LOOPSTUDIOS</h1>
                            <p tw="w-[300px]">A VR experience app made for Loopstudios</p>
                        </div>
                    </div>
                </div>
            </div>
            <div tw="flex flex-col laptop:flex-row laptop:h-[308px] gap-x-6 gap-y-6">
                <div tw="flex flex-col items-center place-content-center h-[250px] tablet:h-[200px] laptop:h-full laptop:w-full laptop:row-span-2 laptop:col-span-1 bg-[url('/assets/home/mobile/image-web-design.jpg')] tablet:bg-[url('/assets/home/tablet/image-web-design.jpg')] laptop:bg-[url('/assets/home/desktop/image-web-design-large.jpg')] bg-no-repeat bg-cover bg-center rounded-xl bg-blend-overlay bg-black hover:bg-peach hover:bg-blend-multiply">
                    <h1 tw="text-white text-4xl">WEB DESIGN</h1>
                    <Link href="/webdesign">
                        <div tw="flex flex-row items-center gap-x-2">
                            <span tw="text-white tracking-widest">VIEW PROJECTS</span>
                            <div><img src="/assets/shared/desktop/icon-right-arrow.svg" alt="rightArrow" /></div>
                        </div>
                    </Link>
                </div>
                <div tw="flex flex-col items-center place-content-center h-[250px] tablet:h-[200px] laptop:h-full laptop:w-full bg-[url('/assets/home/mobile/image-graphic-design.jpg')] tablet:bg-[url('/assets/home/tablet/image-graphic-design.jpg')] laptop:bg-[url('/assets/home/desktop/image-graphic-design.jpg')] bg-no-repeat bg-cover bg-center rounded-xl bg-blend-overlay bg-black hover:bg-peach hover:bg-blend-multiply">
                    <h1 tw="text-white text-4xl">GRAPHIC DESIGN</h1>
                    <Link href="/graphicdesign">
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

