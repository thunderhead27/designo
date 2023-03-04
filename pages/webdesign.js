import React from 'react';
import tw, { styled } from 'twin.macro';
import { Layout } from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

export default function webdesign() {
    return (
        <Layout>
            <div tw="flex flex-col bg-peach h-[320px] tablet:h-[252px] laptop:h-[292px] text-center gap-y-8 place-content-center items-center tablet:rounded-xl">
                <h1 tw="text-5xl text-white font-medium">Web Design</h1>
                <p tw="text-white text-lg w-[400px]">We build websites that serve as powerful marketing tools
                    and bring memorable brand experiences.</p>
            </div>
            <div tw="flex flex-col items-center tablet:items-start laptop:mr-auto laptop:ml-auto laptop:right-0 laptop:left-0">
                <div tw="flex flex-col items-center laptop:grid laptop:grid-cols-3 laptop:grid-rows-2 py-[96px] w-full tablet:py-[120px] laptop:py-[160px] gap-y-10 gap-x-10">
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/web-design/desktop/image-express.jpg" width={320} height={350} alt="express" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">EXPRESS</h1>
                            <p tw="w-[300px]">A multi-carrier shipping website for ecommerce businesses</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/web-design/desktop/image-transfer.jpg" width={320} height={350} alt="transfer" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">TRANSFER</h1>
                            <p tw="w-[300px]">Site for low-cost money transfers and sending money within seconds</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/web-design/desktop/image-photon.jpg" width={320} height={350} alt="photon" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">PHOTON</h1>
                            <p tw="w-[300px]">A state-of-the-art music player with high-resolution audio and DSP effects</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/web-design/desktop/image-builder.jpg" width={320} height={350} alt="builder" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">BUILDER</h1>
                            <p tw="w-[300px]">Connects users with local contractors based on their location</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/web-design/desktop/image-blogr.jpg" width={320} height={350} alt="blogr" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">BLOGR</h1>
                            <p tw="w-[300px]">Blogr is a platform for creating an online blog or publication</p>
                        </div>
                    </div>
                    <div tw="flex flex-col tablet:flex-row laptop:flex-col bg-[#FDF3F0] w-[320px] h-[478px] tablet:h-[320px] laptop:h-[478px] tablet:w-full laptop:w-[320px] rounded-xl items-center">
                        <Image tw="tablet:flex-row laptop:flex-col w-[320px] tablet:w-[339px] tablet:h-full laptop:h-[478px] laptop:w-[320px] rounded-t-xl tablet:rounded-r-none tablet:rounded-l-xl laptop:rounded-t-xl laptop:rounded-b-none" src="/assets/web-design/desktop/image-camp.jpg" width={320} height={350} alt="camp" />
                        <div tw="flex flex-col text-center tablet:pl-16 laptop:pl-0 gap-y-4 py-10 tablet:place-content-center">
                            <h1 tw="text-3xl tracking-widest text-peach">CAMP</h1>
                            <p tw="w-[300px]">Get expert training in coding, data, design, and digital marketing</p>
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
};
