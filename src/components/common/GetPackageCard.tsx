import { useEffect, useState } from "react";
import { PlusIcon, SubtractIcon } from ".";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
    text: string;
}

const GetPackageCard = ({ text }: Props) => {
    const [amount, setAmount] = useState(0);
    const [isChecked, setIsChecked] = useState(false);

    const handleSubtract = () => {
        if (amount > 0) return setAmount(amount - 1);
    };

    const handleAdd = () => {
        return setAmount(amount + 1);
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => { }, [amount]);

    return (
        <div
            className="flex items-center border border-textColor h-auto w-[270px] bg-white rounded-s-lg py-px mb-2"
            style={{
                borderRadius: "10px",
            }}
        >
            <label
                className={`relative mr-2 ml-2 h-[14px] w-[14px] flex items-center cursor-pointer ${isChecked ? 'bg-alternative' : 'bg-white'}`}
            >
                <input
                    type="checkbox"
                    className="opacity-0 absolute h-0 w-0"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                />
                <div
                    className={`absolute top-0 left-0 w-full h-full border border-textColor ${isChecked ? 'bg-alternative' : 'bg-white'}`}
                />
                {isChecked && (
                    <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                )}
            </label>

            <div className="grid grid-cols-2 items-center border-textColor">
                <div className="mr-2 font-Poppins text-xs font-normal leading-4 text-textColor">
                    {text}
                </div>

                <div
                    className="flex justify-center items-center border border-textColor h-[26px] w-[59px] ml-12"
                    style={{
                        borderRadius: "10px",
                    }}
                >
                    <button onClick={handleSubtract}>
                        <SubtractIcon className="h-3 w-3 mr-1" />
                    </button>
                    <p className="text-textColor">{amount}</p>
                    <button onClick={handleAdd}>
                        <PlusIcon className="h-3 w-3 ml-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GetPackageCard;
