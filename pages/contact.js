import React from 'react';
import tw, { styled } from 'twin.macro';
import Image from "next/image";
import { ContactLayout } from "../components/ContactLayout";
import Link from "next/link";
import { useForm } from "react-hook-form";

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

export default function contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <ContactLayout>
            <div tw="flex flex-col items-center laptop:flex-row bg-peach h-[764px] tablet:h-[711px] laptop:h-[480px] pt-[72px] laptop:pt-0 tablet:rounded-xl laptop:justify-between laptop:px-[95px] mb-[120px] laptop:mb-[160px]">
                <div tw="flex flex-col gap-y-6 tablet:gap-y-8 mb-12 tablet:mb-[40px] laptop:mb-0">
                    <h1 tw="text-white text-4xl tablet:text-5xl text-center tablet:text-start">Contact Us</h1>
                    <p tw="text-white w-[327px] tablet:w-[573px] laptop:w-[445px] text-center tablet:text-start">Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a line.</p>
                </div>
                <form tw="flex flex-col w-[327px] tablet:w-[573px] laptop:w-[380px] gap-y-10" onSubmit={handleSubmit()}>
                    <div tw="relative">
                        <input tw="bg-transparent px-4 text-white placeholder-white placeholder-opacity-50 w-full focus:outline-none" placeholder="Name" {...register("name", { required: true })} />
                        <div tw="border border-white"></div>
                        {errors.name && <div tw="flex flex-row text-white gap-x-2 absolute"><span>Can't be empty</span>
                            <div tw="h-[20px] w-[20px]"><Image src="/assets/contact/desktop/icon-error.svg" alt="error" width={20} height={20} /></div>
                        </div>}
                    </div>
                    <div tw="relative">
                        <input tw="bg-transparent px-4 text-white placeholder-white placeholder-opacity-50 w-full focus:outline-none" placeholder="Email Address" {...register("email", { required: true })} />
                        <div tw="border border-white absolute w-full"></div>
                        {errors.email && <div tw="flex flex-row text-white gap-x-2 absolute"><span>Can't be empty</span>
                            <div tw="h-[20px] w-[20px]"><Image src="/assets/contact/desktop/icon-error.svg" alt="error" width={20} height={20} /></div>
                        </div>}
                    </div>
                    <div tw="relative">
                        <input tw="bg-transparent px-4 text-white placeholder-white placeholder-opacity-50 w-full focus:outline-none" placeholder="Phone" {...register("phone", { required: true })} />
                        <div tw="border border-white"></div>
                        {errors.phone && <div tw="flex flex-row text-white gap-x-2 absolute"><span>Can't be empty</span>
                            <div tw="h-[20px] w-[20px]"><Image src="/assets/contact/desktop/icon-error.svg" alt="error" width={20} height={20} /></div>
                        </div>}
                    </div>
                    <div tw="relative">
                        <textarea tw="bg-transparent px-4 text-white placeholder-white placeholder-opacity-50 w-full focus:outline-none" placeholder="Your Message" {...register("message", { required: true })} />
                        <div tw="border border-white"></div>
                        {errors.message && <div tw="flex flex-row text-white gap-x-2 absolute"><span>Can't be empty</span>
                            <div tw="h-[20px] w-[20px]"><Image src="/assets/contact/desktop/icon-error.svg" alt="error" width={20} height={20} /></div>
                        </div>}
                    </div>
                    <div tw="flex flex-col text-white bg-[#FFAD9B] w-[152px] h-[56px] rounded-lg self-end cursor-pointer text-center place-content-center">
                        <input type="submit" tw="cursor-pointer" onClick={(data) => handleSubmit(data)} />
                    </div>
                </form>
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
        </ContactLayout>
    );
}