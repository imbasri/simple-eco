import { useState, useEffect, useRef } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.services";
import { useLogin } from "../hooks/useLogin";

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin()
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);



  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(cart.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };
  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart, products]);

  return (
    <>
      <div className='flex justify-end bg-blue-600 px-10 text-white items-center h-10 w-full'>
        {username}
        <Button styles='ml-5' width='w-20' hover='hover:bg-red-800' onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className='flex justify-center h-[600px] py-5 gap-5 p-10'>
        <div className='w-3/4 flex flex-wrap gap-2 justify-end items-center  md:w-2/3 lg:w-3/4'>
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                <CardProduct key={index}>
                  <CardProduct.Header images={product.image} />
                  <CardProduct.Body name={product.title}>{product.description}</CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    handleAddToCart={handleAddToCart}
                    id={product.id}
                  />
                </CardProduct>
              );
            })}
        </div>
        <div className='w-1/4 md:w-1/3 lg:w-1/4'>
          <h1 className='text-blue-400 font-bold text-3xl ml-5 mb-2'>Cart</h1>
          <table className='text-left table table-auto border-separate border-spacing-5 w-full'>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                cart.map((item) => {
                  const product = products.find((product) => product.id === item.id);
                  return (
                    <tr key={item.id}>
                      <td>{product.title}</td>
                      <td>
                        ${product.price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        $
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>${totalPrice.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
