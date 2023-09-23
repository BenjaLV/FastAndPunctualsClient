import React, { useState } from 'react'
import { UserIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import Button from './Button'


const FormRegister = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex flex-col items-center text-center p-4 mx-auto">
            <form>
                <div className="mb-4 mt-24 relative">
                    <div className="relative rounded-md">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <UserIcon className="h-5 w-5 text-textColor" />
                        </span>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@contraseña.com"
                            className="pl-10 focus:outline-none text-textColor w-full pr-3 py-2 border rounded-md border-colorText placeholder-textColor sm:w-full md:w-full lg:w-full"
                        />
                    </div>
                </div>
                <div className="mb-4 relative">
                    <div className="relative rounded-md">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-textColor" />
                        </span>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            placeholder="**********"
                            className="pl-10 focus:outline-none text-textColor w-full pr-3 py-2 border rounded-md border-colorText placeholder-textColor sm:w-full md:w-full lg:w-full"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                            {showPassword ? (
                                <EyeSlashIcon
                                    className="h-5 w-5 text-textColor cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            ) : (
                                <EyeIcon
                                    className="h-5 w-5 text-textColor cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            )}
                        </span>
                    </div>
                </div>
                <div className="mb-4 relative">
                    <div className="relative rounded-md">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-textColor" />
                        </span>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password-repeat"
                            name="password-repeat"
                            placeholder="Confirmar contraseña"
                            className="pl-10 focus:outline-none text-textColor w-full pr-3 py-2 border rounded-md border-colorText placeholder-textColor sm:w-full md:w-full lg:w-full"
                            value={passwordRepeat}
                            onChange={(e) => setPasswordRepeat(e.target.value)}
                        />
                        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                            {showPassword ? (
                                <EyeSlashIcon
                                    className="h-5 w-5 text-textColor cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            ) : (
                                <EyeIcon
                                    className="h-5 w-5 text-textColor cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                />
                            )}
                        </span>
                    </div>
                </div>

                <div className="mt-24 flex justify-between items-center">
                    <Button
                        text="Crear"
                        className="bg-secondary text-textColor"
                    ></Button>
                </div>
            </form>
            <div className="mt-2">
                <a className="my-2 text-textColor hover:underline text-sm" href="/login">
                    ¿Ya tenés una cuenta?
                </a>
                <div className="mt-4">
                    <Button
                        text="Iniciar sesión"
                        className="bg-white border border-secondary text-textColor hover:bg-secondary"
                    ></Button>
                </div>
            </div>
        </div>
    );
}

export default FormRegister;