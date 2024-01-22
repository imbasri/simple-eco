import { useContext, useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import TableCart from "../components/Fragments/TableCart";
import { useLogin } from "../hooks/useLogin";
import { getProducts } from "../services/product.service";
import Navbar from "../components/Layouts/Navbar";
import { DarkMode } from "../context/DarkMode";

const ProductsPage = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  useLogin();
  console.log({ isDarkMode });
  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);
  return (
    <>
      <Navbar />
      <div
        className={`flex justify-center h-full py-5 gap-5 p-10 ${isDarkMode && "bg-slate-900"} `}
      >
        <div className="w-3/4 flex flex-wrap gap-2 justify-end items-center h-full md:w-2/3 lg:w-3/4">
          {products.length > 0 &&
            products.map((product, index) => {
              return (
                <CardProduct key={index}>
                  <CardProduct.Header images={product.image} id={product.id} />
                  <CardProduct.Body name={product.title}>
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer price={product.price} id={product.id} />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-1/4 md:w-1/3 lg:w-1/4">
          <h1 className="text-blue-400 font-bold text-3xl ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
