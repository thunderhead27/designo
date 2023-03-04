import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';
import { FooterWithContact } from "./FooterWithContact";
import { Footer } from "./Footer";
import { Nav } from "./Nav";
import { TalkAboutProject } from "./TalkAboutProject";
import Head from "next/head";

const OverlayContainer = styled.div`
${({ isOpen }) => (isOpen ? `background-color: rgba(0,0,0,0.5); filter: brightness(50%)` : ``)};
`;

const Menu = styled.div`
display: none;
${({ isOpen }) => (isOpen ? `display: flex; flex-direction: column;` : ``)};
`;

export const ContactLayout = ({ children }) => {
    const [isOpen, setOpen] = useState(false);
    const router = useRouter();
    return (
        <div tw="font-sans">
            <Head>
                <title>Designo</title>
            </Head>
            <Nav isOpen={isOpen} setOpen={setOpen} />
            <Menu tw="bg-black text-white text-2xl py-12 px-6 gap-y-8" isOpen={isOpen}>
                <Link href="/ourcompany">OUR COMPANY</Link>
                <Link href="/location">LOCATIONS</Link>
                <Link href="/contact">CONTACT</Link>
            </Menu>
            <OverlayContainer tw="tablet:px-10 laptop:px-[165px] relative" isOpen={isOpen}>
                <div tw="flex flex-col">{children}</div>
            </OverlayContainer>
            <Footer />
        </div>
    );
};;
