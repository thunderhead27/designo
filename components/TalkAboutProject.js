import Link from "next/link";
import React from 'react';
import tw, { styled } from 'twin.macro';
import Image from "next/image";

const TopSemiCircle = styled.div`
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
`;

const BottomSemiCircle = styled.div`
    clip-path: polygon(0 50%, 100% 50%, 100% 100%, 0 100%);
`;

export const TalkAboutProject = () => {
    return (
        <div tw="flex flex-col relative text-white bg-peach h-[379px] tablet:h-[350px] laptop:h-[292px] py-16 tablet:py-12 px-8 laptop:px-[95px] rounded-xl">
            <div tw="flex flex-col laptop:flex-row laptop:justify-between text-center laptop:text-start items-center gap-y-8">
                <div tw="flex flex-col gap-y-8 items-center laptop:items-start">
                    <h1 tw="font-medium text-3xl tablet:text-5xl w-[200px] tablet:w-[350px]">Let's talk about your project</h1>
                    <p tw="tablet:w-[500px]">Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                </div>
                <Link href="/contact"><button tw="relative text-black tracking-widest bg-white h-[56px] w-[152px] rounded-lg font-medium z-30">GET IN TOUCH</button></Link>
            </div>
            <div tw="flex-col hidden tablet:flex absolute tablet:right-0 tablet:top-[-145px] laptop:right-0 laptop:top-[-146px]">
                <div tw="flex flex-row w-[584px] h-[292px] self-end">
                    <BottomSemiCircle><Image src="/assets/shared/desktop/bg-pattern-small-circle.svg" width={292} height={292} alt='threeCircles' /></BottomSemiCircle>
                    <BottomSemiCircle><Image src="/assets/shared/desktop/bg-pattern-small-circle.svg" width={292} height={292} alt='threeCircles' /></BottomSemiCircle>
                </div>
                <div tw="flex flex-row tablet:h-[400px] tablet:w-[876px] laptop:h-[292px]">
                    <TopSemiCircle><Image src="/assets/shared/desktop/bg-pattern-small-circle.svg" width={292} height={292} alt='threeCircles' /></TopSemiCircle>
                    <TopSemiCircle><Image src="/assets/shared/desktop/bg-pattern-small-circle.svg" width={292} height={292} alt='threeCircles' /></TopSemiCircle>
                    <TopSemiCircle><Image src="/assets/shared/desktop/bg-pattern-small-circle.svg" width={292} height={292} alt='threeCircles' /></TopSemiCircle>
                </div>
            </div>
            <div tw="tablet:hidden relative top-[-300px] right-[-50px]">
                <Image src="/assets/shared/desktop/bg-pattern-small-circle.svg" width={292} height={292} alt='threeCircles' />
            </div>
        </div>
    );
};
