import React, { ReactNode } from 'react';
import { BackButton } from '.';

interface Props {
    text: string;
    className: string;
    children: ReactNode;
}
const Card = ({ text, children, className }: Props) => {
    return (
        <div className="flex flex-col items-center mt-10 text-colorText">
            <div className="flex items-center justify-between pb-8 px-0.5 bg-alternative shadow-md rounded-lg w-full sm:w-[24rem] md:w-[32rem] lg:w-[40rem] xl:w-[80rem] h-20">
                <div className="ml-3 mt-2">
                    <BackButton />
                </div>
                <h3 className={`flex-1 text-center mr-6 font-bold ${className}`}> {text} </h3>
            </div>
            <div className="-mt-8 bg-white shadow-md rounded-lg w-full sm:w-[24rem] md:w-[32rem] lg:w-[40rem] xl:w-[80rem] h-495">
                {children}
            </div>
        </div>
    );
};
export default Card;
