import { shoppingViewHeaderMenuItems } from '@/config';
import React from 'react'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Label } from '../ui/label';

const Menuitems = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();

    const handleNavigate = (getCurrentMenuItem) => {
        sessionStorage.removeItem("filters");
        const currentFilter = getCurrentMenuItem.id !== "home" &&
            getCurrentMenuItem.id !== "products" &&
            getCurrentMenuItem.id !== "search"
            ? {
                category: [getCurrentMenuItem.id],
            }
            : null;

        sessionStorage.setItem("filters", JSON.stringify(currentFilter));

        location.pathname.includes("listing") && currentFilter !== null
            ? setSearchParams(
                new URLSearchParams(`?category=${getCurrentMenuItem.id}`)
            )
            : navigate(getCurrentMenuItem.path);
    }
    return (
        <nav className="flex flex-col mb-3 lg:mb-0 lg:items-center gap-6 lg:flex-row">
            {shoppingViewHeaderMenuItems.map((menuItem) => (
                <Label
                    onClick={() => handleNavigate(menuItem)}
                    className="text-sm font-medium cursor-pointer"
                    key={menuItem.id}
                >
                    {menuItem.label}
                </Label>
            ))}
        </nav>
    )
}

export default Menuitems