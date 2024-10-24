import { MovingBorderBtn } from '@/components/ui/MovingBorder'
import Link from 'next/link'
import React from 'react'
import Title from './Title'

const HeroSection = () => {
    return (
        <div className=" min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
            <div className="space-y-10 text-center lg:text-left">
                <h1 className="text-4xl lg:text-7xl font-bold">
                Nice to meet you! 👋
                <br/><span className="underline underline-offset-8 decoration-red-900">{"I'm Shayaan."}</span>
                </h1>
                <p className="md:w-96 text-lg text-gray-300">
                    {"I'm a full-stack developer, currently studying Computer Engineering at the University of Waterloo."}
                </p>
                <Link href={"mailto:shayaansufi@gmail.com"} className="inline-block group">
                    <Title text="Contact Me 📫" />
                </Link>
            </div>  
            
            <div className="relative">
                <div className="size-72 space-y-3 -rotate-[30deg] relative">
                    <div className="flex gap-3 translate-x-8">
                        <div className="size-32 rounded-2xl bg-red-900"></div>
                        <div className="size-32 rounded-full bg-slate-50"></div>
                    </div>
                    <div className="flex gap-3 -translate-x-8">
                        <div className="size-32 rounded-2xl bg-slate-50"></div>
                        <div className="size-32 rounded-full bg-red-900"></div>
                    </div>
                    <div className="glow absolute top-[40%] right-1/2 -z-10 "></div>
                </div>
            </div>
        </div>
        
    )
}

export default HeroSection