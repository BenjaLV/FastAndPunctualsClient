import React, { useState, useEffect } from 'react';
import DateCard from '../common/DateCard';
import { BackArrow, NextArrow } from '../common';
import { addDays } from 'date-fns';

const DateSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(2);
    const [dates, setDates] = useState(generateDates());
    const [selectedDateIndex, setSelectedDateIndex] = useState(2);
    const [previousSelectedIndex, setPreviousSelectedIndex] = useState(2);

    function generateDates() {
        const currentDate = new Date();
        const dayInMillis = 24 * 60 * 60 * 1000;
        const dates = [];
        for (let i = -2; i <= 2; i++) {
            const newDate = new Date(currentDate.getTime() + i * dayInMillis);
            dates.push(newDate);
        }
        return dates;
    }

    const handleBackArrowClick = () => {
        setDates((prevDates) => [
            addDays(prevDates[0], -1),
            ...prevDates.slice(0, prevDates.length - 1),
        ]);
        setCurrentIndex(2);
        setSelectedDateIndex(previousSelectedIndex - 1);
    };

    const handleNextArrowClick = () => {
        setDates((prevDates) => [
            ...prevDates.slice(1),
            addDays(prevDates[prevDates.length - 1], 1),
        ]);
        setCurrentIndex(2);
        setSelectedDateIndex(previousSelectedIndex + 1);
    };

    const handleDateClick = (index: number) => {
        setSelectedDateIndex(index);
    };

    useEffect(() => {
        setCurrentIndex(selectedDateIndex);
    }, [selectedDateIndex]);

    useEffect(() => {
        if (previousSelectedIndex !== selectedDateIndex) {
            setPreviousSelectedIndex(selectedDateIndex);
        }
    }, [selectedDateIndex]);

    return (
        <div className="mx-auto">
            <div className="flex justify-between">
                <BackArrow
                    className='cursor-pointer self-center mx-2'
                    onClick={handleBackArrowClick}
                />
                {dates.map((date, index) => (
                    <DateCard
                        key={index}
                        date={date}
                        isActive={index === currentIndex || index === selectedDateIndex}
                        onClick={() => handleDateClick(index)}
                    />
                ))}
                <NextArrow
                    className='cursor-pointer self-center mx-2'
                    onClick={handleNextArrowClick}
                />
            </div>
        </div>
    );
};

export default DateSlider;
