import React from 'react';
import tw, { styled } from 'twin.macro';
import { Layout } from "../components/Layout";
import Image from "next/image";

export default function location() {
    return (
        <Layout>
            <div tw="laptop:mr-auto laptop:ml-auto laptop:right-0 laptop:left-0">
                <div tw="flex flex-col laptop:flex-row-reverse gap-y-8 gap-x-8 mb-10 tablet:mb-[120px] laptop:mb-8">
                    <div tw="h-[320px] tablet:h-[326px] laptop:w-[350px] bg-[url('/assets/locations/desktop/image-map-canada.png')] tablet:bg-[url('/assets/locations/tablet/image-map-canada.png')] laptop:bg-[url('/assets/locations/desktop/image-map-canada.png')] bg-cover bg-no-repeat bg-center tablet:rounded-xl"></div>
                    <div tw="flex flex-col place-content-center bg-[#FDF3F0] h-[375px] laptop:h-[326px] laptop:w-[730px] tablet:rounded-xl tablet:pl-[75px]">
                        <div tw="flex flex-col items-center tablet:items-start gap-y-6">
                            <div>
                                <h1 tw="text-peach text-4xl tablet:text-5xl">Canada</h1>
                            </div>
                            <div tw="flex flex-col tablet:flex-row gap-x-8">
                                <div>
                                    <h2 tw="font-bold text-xl">Designo Central Office</h2>
                                    <p>3886 Wellington Street</p>
                                    <p>Toronto, Ontario M9C 3J5</p>
                                </div>
                                <div>
                                    <h2 tw="font-bold text-xl">Contact</h2>
                                    <p>P : +1 253-863-8967</p>
                                    <p>M : contact@designo.co</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div tw="flex flex-col laptop:flex-row-reverse gap-y-8 gap-x-8 mb-10 tablet:mb-[120px] laptop:mb-8">
                    <div tw="h-[320px] tablet:h-[326px] laptop:w-[350px] bg-[url('/assets/locations/desktop/image-map-australia.png')] tablet:bg-[url('/assets/locations/tablet/image-map-australia.png')] laptop:bg-[url('/assets/locations/desktop/image-map-australia.png')] bg-cover bg-no-repeat bg-center tablet:rounded-xl"></div>
                    <div tw="flex flex-col place-content-center bg-[#FDF3F0] h-[375px] laptop:h-[326px] laptop:w-[730px] tablet:rounded-xl tablet:pl-[75px]">
                        <div tw="flex flex-col items-center tablet:items-start gap-y-6">
                            <div>
                                <h1 tw="text-peach text-4xl tablet:text-5xl">Australia</h1>
                            </div>
                            <div tw="flex flex-col tablet:flex-row gap-x-8">
                                <div>
                                    <h2 tw="font-bold text-xl">Designo AU Office</h2>
                                    <p>19 Balonne Street</p>
                                    <p>New South Wales 2443</p>
                                </div>
                                <div>
                                    <h2 tw="font-bold text-xl">Contact</h2>
                                    <p>P : (02) 6720 9092</p>
                                    <p>M : contact@designo.au</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div tw="flex flex-col laptop:flex-row-reverse gap-y-8 gap-x-8 mb-10 tablet:mb-[120px] laptop:mb-8">
                    <div tw="h-[320px] tablet:h-[326px] laptop:w-[350px] bg-[url('/assets/locations/desktop/image-map-united-kingdom.png')] tablet:bg-[url('/assets/locations/tablet/image-map-uk.png')] laptop:bg-[url('/assets/locations/desktop/image-map-united-kingdom.png')] bg-cover bg-no-repeat bg-center tablet:rounded-xl"></div>
                    <div tw="flex flex-col place-content-center bg-[#FDF3F0] h-[375px] laptop:h-[326px] laptop:w-[730px] tablet:rounded-xl tablet:pl-[75px]">
                        <div tw="flex flex-col items-center tablet:items-start gap-y-6">
                            <div>
                                <h1 tw="text-peach text-4xl tablet:text-5xl">United Kingdom</h1>
                            </div>
                            <div tw="flex flex-col tablet:flex-row gap-x-8">
                                <div>
                                    <h2 tw="font-bold text-xl">Designo UK Office</h2>
                                    <p>13  Colorado Way</p>
                                    <p>Rhyd-y-fro SA8 9GA</p>
                                </div>
                                <div>
                                    <h2 tw="font-bold text-xl">Contact</h2>
                                    <p>P : 078 3115 1400</p>
                                    <p>M : contact@designo.uk</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    );
}