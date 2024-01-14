import { useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Sepatu Baru",
      price: 420000,
      image: "/images/product1.jpg",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic, aspernatur dolore cumque
          ratione earum magni porro vel neque quo esse excepturi eaque totam molestias est nihil
          rerum consectetur maiores quos quod labore! Accusantium obcaecati autem id error laborum
          non inventore nemo, cumque iure veritatis. Velit dignissimos quos unde obcaecati!
`,
    },
    {
      id: 2,
      name: "Sepatu Lama",
      price: 500000,
      image: "/images/product1.jpg",
      description: `ratione earum magni porro vel neque quo esse excepturi eaque totam molestias est nihil
          rerum consectetur maiores quos quod labore! Accusantium obcaecati autem id error laborum
          non inventore nemo, cumque iure veritatis. Velit dignissimos quos unde obcaecati!
`,
    },
    {
      id: 3,
      name: "Sepatu Lama 4",
      price: 5000000,
      image: "/images/product1.jpg",
      description: "Sepatu Baru Kita Jual Dengan Harga Murah",
    },{
      id: 4,
      name: "Sepatu Lama 5",
      price: 2000000,
      image: "/images/product1.jpg",
      description: "Sepatu Baru Kita Jual Dengan Harga Murah",
    },
  ];

  const [cart, setCart] = useState([{
    id: 1,
    qty: 1
  }])
  const email = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id)=>{
    if(cart.find(item => item.id === id)){
      setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item))
    }else{
      setCart([...cart, {id, qty: 1}])
    }
  }
  return (
    <>
      <div className='flex justify-end bg-blue-600 px-10 text-white items-center h-10'>
        {email}
        <Button styles='ml-5' width='w-20' hover='hover:bg-red-800' onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className='flex justify-center h-[600px] py-5 gap-5 p-10'>
        <div className='w-3/4 flex flex-wrap gap-2  justify-end items-center'>
          {products.map((product,index) => {
            return (
              <CardProduct key={index}>
                <CardProduct.Header images={product.image} />
                <CardProduct.Body name={product.name}>{product.description}</CardProduct.Body>
                <CardProduct.Footer price={product.price}
                handleAddToCart={handleAddToCart} id={product.id} />
              </CardProduct>
            );
          })}
        </div>
        <div className="w-1/4">
          <h1 className="text-blue-400 font-bold text-3xl ml-5 mb-2">Cart</h1>
          <table className="text-left table table-auto border-separate border-spacing-5 w-full">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item)=> {
                const product = products.find(product => product.id === item.id)
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp.{product.price.toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp.
                      {(item.qty *
                        product.price).toLocaleString("id-ID", { styles: "currency", currency: "IDR" })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
