import { logoutUser } from '@/store/auth-slice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { LogOut, ShoppingCart, UserCog } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Sheet } from '../ui/sheet';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const HeaderRightContent = () => {
  const { user } = useSelector((state) => state.auth);
  // const { cartItems } = useSelector((state) => state.shopCart);
  const [openCartSheet, setOpenCartSheet] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
    navigate("/login")
  }

  // useEffect(() => {
  //   dispatch(fetchCartItems(user?.id));
  // }, [dispatch]);

  // console.log(cartItems, "sangam");
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated)

  return (
    <div className="flex lg:items-center lg:flex-row flex-col gap-4">
      <Sheet open={openCartSheet} onOpenChange={() => setOpenCartSheet(false)}>
        <Button
          onClick={() => setOpenCartSheet(true)}
          variant="link"
          size="icon"
          className="relative"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute top-[-5px] right-[2px] font-bold text-sm">
            {0}
          </span>
          <span className="sr-only">User cart</span>
        </Button>
        
      </Sheet>

      <DropdownMenu >

        {
          !isAuthenticated ? (<div className="flex gap-3 items-center">
            <Link to={"/login"}>
              <Button variant={"outline"}>
                Login
              </Button></Link>
            <Link to={"/register"}>
              <Button variant={"ghost"}>
                Signup
              </Button></Link>
          </div>) : (
            <DropdownMenuTrigger asChild>
              <Avatar className="">
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback className=" font-extrabold">
                  {user?.userName[0].toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
          )
        }

        <DropdownMenuContent side="bottom" className="w-56 mr-3">
          <DropdownMenuLabel>Logged in as {user?.userName}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => navigate("/shop/account")}>
            <UserCog className="mr-2 h-4 w-4" />
            Account
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default HeaderRightContent