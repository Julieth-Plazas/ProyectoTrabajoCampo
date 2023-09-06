import React, { useContext, useState } from 'react';
import { Navbar as NextUINavbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenuItem, NavbarMenu } from "@nextui-org/react";
import { FaUser } from 'react-icons/fa'; // Importa el icono de usuario
import { AcmeLogo } from "./AcmeLogo.jsx";
import { AuthContext } from '../context/AuthContext.js';


const CustomNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const { user, dispatch } = useContext(AuthContext);
    user ? console.log(user) : console.log("no hay usuario");

    const handleLogout = () => {
        dispatch({ type: 'LOGOUT' });
        window.location.href = '/';
    }

    // Define los enlaces del menú
    const menuLinks = [
        {
            name: "Inicio",
            path: "/",
        },
        {
            name: "Admisiones",
            path: "/admisiones",
        },
        {
            name: "Nosotros",
            path: "/nosotros",
        }, {
            name: "Contactanos",
            path: "/contactanos",
        }
    ];



    const userLinks = user && user.role === 'admin'
        ? [
            {
                name: "Registrar Publicación",
                path: "/publicar",
            },
            {
                name: "Registrar Docente",
                path: "/register",
            },
            {
                name: "Asignar Curso",
                path: "/asignar-curso",
            },
        ]
        : user && user.cursos
            ? user.cursos.map(curso => ({
                name: `Curso: ${curso.nombre}`,
                path: `/curso/${curso.id}`,
            }))
            : [];


    const toggleUserMenu = () => {
        setIsUserMenuOpen((prevState) => !prevState);
    };

    return (
        <NextUINavbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <AcmeLogo />
                    <p className="font-bold text-inherit">GDPAZ</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {menuLinks.map((item, index) => (
                    <NavbarItem key={`${item.name}-${index}`} isActive={item.path === window.location.pathname}>
                        <Link color="foreground" href={item.path}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                {
                    user ? <>
                        <div className="relative ml-3">
                            <div>
                                <button
                                    type="button"
                                    className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    id="user-menu-button"
                                    aria-expanded={isUserMenuOpen}
                                    aria-haspopup="true"
                                    onClick={toggleUserMenu}
                                >
                                    <span className="absolute -inset-1.5"></span>
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-8 w-8 rounded-full"
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        alt=""
                                    />
                                </button>
                            </div>

                            {isUserMenuOpen && (
                                <div
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="user-menu-button"
                                    tabIndex="-1"
                                >
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex="-1"
                                    >
                                        {user.username}
                                    </a>
                                    {userLinks.map((item, index) => (
                                        <a
                                            key={`user-link-${index}`}
                                            className="block px-4 py-2 text-sm text-gray-700"
                                            role="menuitem"
                                            tabIndex="-1"
                                            href={item.path}
                                        >
                                            {item.name}
                                        </a>
                                    ))}





                                    <a

                                        className="block px-4 py-2 text-sm text-gray-700"
                                        role="menuitem"
                                        tabIndex="-1"
                                        onClick={handleLogout}
                                    >
                                        Cerrar sesion
                                    </a>
                                </div>
                            )}
                        </div>
                    </> : <>
                        <NavbarItem>
                            <Button as={Link} className='bg-teal-500 text-white' href="/login" variant="flat">
                                login
                            </Button>
                        </NavbarItem>
                    </>
                }
            </NavbarContent>
            <NavbarMenu>
                {menuLinks.map((item, index) => (
                    <NavbarMenuItem key={`${item.name}-${index}`}>
                        <Link
                            color='foreground'
                            className="w-full"
                            href={item.path}
                            size="lg"
                        >
                            {item.name} {/* Fix: Use item.name instead of item */}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </NextUINavbar>
    );
}

export default CustomNavbar;
