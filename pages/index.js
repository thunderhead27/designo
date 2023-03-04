import Image from "next/image";
import Link from "next/link";
import React from 'react';
import tw, { styled } from 'twin.macro';
import { Layout } from "../components/Layout";

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


const IndexPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <div tw="relative flex flex-col laptop:flex-row h-[843px] laptop:h-[640px] w-full bg-peach tablet:rounded-xl overflow-x-hidden overflow-y-hidden items-center laptop:pl-[95px] mb-[120px] laptop:mb-[160px]">
        <div tw="absolute right-[-100px] tablet:right-[-250px] top-[100px] laptop:top-0 laptop:right-0">
          <Image src="/assets/home/desktop/bg-pattern-hero-home.svg" height={640} width={640} />
        </div>
        <div tw="flex flex-col items-center laptop:items-start text-white gap-y-8 text-center laptop:text-start">
          <h1 tw="text-2xl tablet:text-5xl font-medium tablet:w-[500px] laptop:w-[540px] pt-[80px] tablet:pt-[60px] ">Award-winning custom designs and digital branding solutions</h1>
          <p tw="text-sm tablet:text-lg tablet:w-[500px] laptop:w-[445px]">With over 10 years in the industry, we are experienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
          <Link href="/"><button tw="bg-white font-medium text-black text-lg w-[152px] h-[56px] rounded-lg">LEARN MORE</button></Link>
        </div>
        <div tw="relative bottom-[50px] tablet:bottom-[100px] laptop:bottom-[-150px]">
          <img tw="object-cover" src="/assets/home/desktop/image-hero-phone.png" />
        </div>
      </div>
      {/* Designs */}
      <div tw="flex flex-col laptop:grid laptop:grid-cols-2 laptop:grid-rows-[320px_320px] gap-x-6 gap-y-6 px-6 tablet:px-0 mb-[120px] laptop:mb-[160px]">
        <div tw="flex flex-col items-center place-content-center h-[250px] tablet:h-[200px] laptop:h-full laptop:row-span-2 laptop:col-span-1 bg-[url('/assets/home/mobile/image-web-design.jpg')] tablet:bg-[url('/assets/home/tablet/image-web-design.jpg')] laptop:bg-[url('/assets/home/desktop/image-web-design-large.jpg')] bg-no-repeat bg-cover bg-center rounded-xl bg-blend-overlay bg-black hover:bg-peach hover:bg-blend-multiply">
          <h1 tw="text-white text-4xl">WEB DESIGN</h1>
          <Link href="/webdesign">
            <div tw="flex flex-row items-center gap-x-2">
              <span tw="text-white tracking-widest">VIEW PROJECTS</span>
              <div><img src="/assets/shared/desktop/icon-right-arrow.svg" alt="rightArrow" /></div>
            </div>
          </Link>
        </div>
        <div tw="flex flex-col items-center place-content-center h-[250px] tablet:h-[200px] laptop:h-full laptop:row-start-1 laptop:col-start-2 bg-[url('/assets/home/mobile/image-app-design.jpg')] tablet:bg-[url('/assets/home/tablet/image-app-design.jpg')] laptop:bg-[url('/assets/home/desktop/image-app-design.jpg')] bg-no-repeat bg-cover bg-center rounded-xl bg-blend-overlay bg-black hover:bg-peach hover:bg-blend-multiply">
          <h1 tw="text-white text-4xl">APP DESIGN</h1>
          <Link href="/appdesign">
            <div tw="flex flex-row items-center gap-x-2">
              <span tw="text-white tracking-widest">VIEW PROJECTS</span>
              <div><img src="/assets/shared/desktop/icon-right-arrow.svg" alt="rightArrow" /></div>
            </div>
          </Link>
        </div>
        <div tw="flex flex-col items-center place-content-center h-[250px] tablet:h-[200px] laptop:h-full laptop:row-start-2 laptop:col-start-2 bg-[url('/assets/home/mobile/image-graphic-design.jpg')] tablet:bg-[url('/assets/home/tablet/image-graphic-design.jpg')] laptop:bg-[url('/assets/home/desktop/image-graphic-design.jpg')] bg-no-repeat bg-cover bg-center rounded-xl bg-blend-overlay bg-black hover:bg-peach hover:bg-blend-multiply">
          <h1 tw="text-white text-4xl">GRAPHIC DESIGN</h1>
          <Link href="/graphicdesign">
            <div tw="flex flex-row items-center gap-x-2">
              <span tw="text-white tracking-widest">VIEW PROJECTS</span>
              <div><img src="/assets/shared/desktop/icon-right-arrow.svg" alt="rightArrow" /></div>
            </div>
          </Link>
        </div>
      </div>
      {/* Passionate Resourceful Friendly */}
      <div tw="flex flex-col laptop:flex-row gap-x-8 px-6 tablet:px-0">
        <div tw="flex flex-col tablet:flex-row laptop:flex-col items-center basis-1/3 gap-x-8">
          <div tw="mb-8">
            <Image tw="absolute" src="/assets/home/desktop/illustration-passionate.svg" alt="passionate" width={202} height={202} />
            <Circle />
          </div>
          <div tw="text-center tablet:text-start laptop:text-center">
            <h2 tw="tracking-widest mb-6 font-medium">PASSIONATE</h2>
            <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
          </div>
        </div>
        <div tw="flex flex-col tablet:flex-row laptop:flex-col items-center basis-1/3 gap-x-8">
          <div tw="mb-8">
            <Image tw="absolute" src="/assets/home/desktop/illustration-resourceful.svg" alt="resourceful" width={202} height={202} />
            <Circle />
          </div>
          <div tw="text-center tablet:text-start laptop:text-center">
            <h2 tw="tracking-widest mb-6 font-medium">RESOURCEFUL</h2>
            <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
          </div>
        </div>
        <div tw="flex flex-col tablet:flex-row laptop:flex-col items-center basis-1/3 gap-x-8">
          <div tw="mb-8">
            <Image tw="absolute" src="/assets/home/desktop/illustration-friendly.svg" alt="friendly" width={202} height={202} />
            <Circle />
          </div>
          <div tw="text-center tablet:text-start laptop:text-center">
            <h2 tw="tracking-widest mb-6 font-medium">FRIENDLY</h2>
            <p> We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
