"use client"
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import { Menu, XIcon } from "lucide-react";
import Link from "next/link";
import Button from "./ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
                <div className="container max-w-5xl">
                    <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur">
                        <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center z-50">
                            <div >
                                <Image src={logoImage} alt="Logo" className="h-8 md:h-auto w-auto" />
                            </div>
                            <div className="lg:flex justify-center items-center hidden">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <Link key={link.href} href={link.href}>{link.label}</Link>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <div onClick={() => setIsOpen(!isOpen)}>
                                    {isOpen ? (
                                    <XIcon className="size-6 md:hidden transition-all ease-in"/>
                                    ) : (
                                    <Menu className="size-6 md:hidden transition-all ease-out"/>
                                    )}
                                </div>
                                <Button variant="secondary" className="hidden md:inline-flex items-center">Sign In</Button>
                                <Button variant="primary" className="hidden md:inline-flex items-center">Sign Up</Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div 
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto"}}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <Link key={link.href} href={link.href} className="py-2">{link.label}</Link>
                                        ))}
                                        <Button variant="secondary">Sign In</Button>
                                        <Button variant="primary">Sign Up</Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]">

            </div>
        </>
    );
}