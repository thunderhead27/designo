import React from 'react';
import tw, { styled } from 'twin.macro';
import { Layout } from "../components/Layout";
import Image from "next/image";
import Link from "next/link";

const Circle = styled.div`
  position: relative;
  height: 202px;
  width: 202px;
  background: linear-gradient(90deg, rgba(93, 2, 2, 0.0001) 0%, rgba(93, 2, 2, 0.497569) 100%);
  mix-blend-mode: normal;
  opacity: 0.2;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  border-radius: 50%;
`;


export default function ourcompany() {
    return (
        <Layout>
            <div tw="flex flex-col w-full items-center laptop:flex-row-reverse tablet:mb-[120px] laptop:mb-[160px]">
                <div tw="h-[320px] laptop:w-[476px] laptop:h-[480px] w-full bg-[url('/assets/about/mobile/image-about-hero.jpg')] tablet:bg-[url('/assets/about/tablet/image-about-hero.jpg')] laptop:bg-[url('/assets/about/desktop/image-about-hero.jpg')] bg-no-repeat bg-center bg-cover tablet:rounded-t-xl laptop:rounded-t-none laptop:rounded-r-xl"></div>
                <div tw="flex flex-col gap-y-8 items-center place-content-center bg-peach h-[395px] tablet:h-[312px] laptop:h-[480px] w-full laptop:w-[635px] tablet:rounded-b-xl laptop:rounded-l-xl text-white">
                    <h1 tw="font-medium text-5xl">About Us</h1>
                    <p tw="tablet:text-lg w-[235px] tablet:w-[573px] laptop:w-[458px] text-center laptop:text-start">Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.</p>
                </div>
            </div>
            <div tw="flex flex-col laptop:flex-row mb-[120px] laptop:mb-[160px]">
                <div tw="h-[320px] w-full laptop:w-[476px] laptop:h-[713px] bg-[url('/assets/about/mobile/image-world-class-talent.jpg')] tablet:bg-[url('/assets/about/tablet/image-world-class-talent.jpg')] laptop:bg-[url('/assets/about/desktop/image-world-class-talent.jpg')] tablet:rounded-t-xl laptop:rounded-r-none laptop:rounded-l-xl bg-cover bg-no-repeat bg-center"></div>
                <div tw="flex flex-col gap-y-8 items-center place-content-center bg-[#FDF3F0] w-full h-[545px] tablet:h-[416px] laptop:h-[713px] laptop:w-[635px] tablet:rounded-b-xl laptop:rounded-r-xl">
                    <h1 tw="text-peach font-medium text-5xl">World-class talent</h1>
                    <p tw="tablet:text-lg w-[235px] tablet:w-[573px] laptop:w-[458px] text-center laptop:text-start">We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.</p>

                    <p tw="tablet:text-lg w-[235px] tablet:w-[573px] laptop:w-[458px] text-center laptop:text-start">Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.</p>
                </div>
            </div>
            <div tw="flex flex-col laptop:flex-row gap-x-8 px-6 tablet:px-0 items-center gap-y-12 tablet:gap-y-[80px] mb-[120px] laptop:mb-[160px]">
                <div tw="flex flex-col items-center basis-1/3 gap-x-8">
                    <div tw="mb-8">
                        <Image tw="absolute" src="/assets/shared/desktop/illustration-canada.svg" alt="passionate" width={202} height={202} />
                        <Circle />
                    </div>
                    <div tw="text-center">
                        <h2 tw="tracking-widest mb-6 font-medium">CANADA</h2>
                        <Link href="/location"><button tw="w-[152px] h-[56px] bg-peach text-white rounded-lg">SEE LOCATION</button></Link>
                    </div>
                </div>
                <div tw="flex flex-col items-center basis-1/3 gap-x-8">
                    <div tw="mb-8">
                        <Image tw="absolute" src="/assets/shared/desktop/illustration-australia.svg" alt="passionate" width={202} height={202} />
                        <Circle />
                    </div>
                    <div tw="text-center">
                        <h2 tw="tracking-widest mb-6 font-medium">AUSTRALIA</h2>
                        <Link href="/location"><button tw="w-[152px] h-[56px] bg-peach text-white rounded-lg">SEE LOCATION</button></Link>
                    </div>
                </div>
                <div tw="flex flex-col items-center basis-1/3 gap-x-8">
                    <div tw="mb-8">
                        <Image tw="absolute" src="/assets/shared/desktop/illustration-united-kingdom.svg" alt="passionate" width={202} height={202} />
                        <Circle />
                    </div>
                    <div tw="text-center laptop:text-center">
                        <h2 tw="tracking-widest mb-6 font-medium">UNITED KINGDOM</h2>
                        <Link href="/location"><button tw="w-[152px] h-[56px] bg-peach text-white rounded-lg">SEE LOCATION</button></Link>
                    </div>
                </div>
            </div>
            <div tw="flex flex-col laptop:flex-row-reverse">
                <div tw="h-[320px] laptop:h-[640px] laptop:w-[476px] bg-[url('/assets/about/mobile/image-real-deal.jpg')] tablet:bg-[url('/assets/about/tablet/image-real-deal.jpg')] laptop:bg-[url('/assets/about/desktop/image-real-deal.jpg')] bg-no-repeat bg-cover bg-center tablet:rounded-t-xl laptop:rounded-l-none laptop:rounded-r-xl"></div>
                <div tw="flex flex-col h-[545px] tablet:h-[416px] laptop:h-[640px] laptop:w-[635px] gap-y-8 items-center place-content-center text-center laptop:text-start bg-[#FDF3F0] px-4 tablet:px-12 laptop:px-16 tablet:rounded-b-xl laptop:rounded-l-xl">
                    <h1 tw="text-peach text-5xl">The real deal</h1>
                    <p tw="tablet:text-lg">As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                        Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.</p>
                    <p tw="tablet:text-lg">We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.</p>
                </div>
            </div>
        </Layout >
    );
} 