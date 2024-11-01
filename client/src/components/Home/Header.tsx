import { HousePlug, Menu } from "lucide-react";
import {
    Link,

} from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import {  useSelector } from "react-redux";
// import { shoppingViewHeaderMenuItems } from "@/config";


// import UserCartWrapper from "./cart-wrapper";

// import { fetchCartItems } from "@/store/shop/cart-slice";
// import { Label } from "../ui/label";
import Menuitems from "./Menuitems";
import HeaderRightContent from "./HeaderRightContent";





const Header = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    return (
        <header className="sticky top-0 z-40 w-full">
            <div className="flex h-16 items-center justify-between px-4 md:px-6">
                <Link to="/shop/home" className="flex items-center gap-2">
                    <HousePlug className="h-6 w-6" />
                    <span className="font-bold">Ecommerce</span>
                </Link>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="lg:hidden">
                            <Menu className="h-6 w-6" />
                            <span className="sr-only">Toggle header menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-full max-w-xs">
                        <Menuitems />

                        <HeaderRightContent />
                    </SheetContent>
                </Sheet>
                <div className="hidden lg:block">
                    <Menuitems />
                </div>

                <div className="hidden lg:block">
                    <HeaderRightContent />
                </div>
            </div>
        </header>
    );
}

export default Header;
