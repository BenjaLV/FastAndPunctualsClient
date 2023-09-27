
import React from 'react';

interface Props {
    date: Date;
    isActive: boolean;
    onClick: () => void;
}

const dayNames = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];


const DateCard = ({ date, isActive, onClick }: Props) => {
    const dayName = dayNames[date.getDay()];
    const dayNumber = date.getDate();

    const cardClass = `w-[41px] h-[50px] border rounded-xl border-textColor/50 mx-[-20px] text-center text-textColor cursor-pointer ${isActive ? 'bg-alternative' : 'bg-white'}`;

    return (
        <div className={cardClass} onClick={onClick}>
            <div className="text-center text-textColor">{dayName}</div>
            <div className="text-center font-bold text-textColor">{dayNumber}</div>
        </div>
    );
};

export default DateCard;