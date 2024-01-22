import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button";
import { useSelector } from "react-redux";

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        return acc + item.qty;
      }, 0);
      setTotalCart(sum);
    }
  }, [cart]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="flex justify-end bg-blue-600 px-10 text-white items-center h-10 w-full">
      {username}
      <Button
        styles="ml-5"
        width="w-20"
        hover="hover:bg-red-800"
        onClick={handleLogout}
      >
        Logout
      </Button>
      <div className="flex items-center bg-gray-800 mx-3 py-2 px-5">
        Cart {totalCart}
      </div>
    </div>
  );
};
export default Navbar;
