import Link from 'next/link';
import { BackButtonIcon } from '.';


interface BackButtonProps {
    href: string;
}

const BackButton = ({ href }: BackButtonProps) => {
    return (
        <Link href={href} passHref legacyBehavior>
            <a className='cursor-pointer'>
                <BackButtonIcon />
            </a>
        </Link>
    );
};

export default BackButton;
