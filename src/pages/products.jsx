import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "Sepatu Baru",
      price: "Rp. 100.000",
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
      price: "Rp.200.000",
      image: "/images/product1.jpg",
      description: `ratione earum magni porro vel neque quo esse excepturi eaque totam molestias est nihil
          rerum consectetur maiores quos quod labore! Accusantium obcaecati autem id error laborum
          non inventore nemo, cumque iure veritatis. Velit dignissimos quos unde obcaecati!
`,
    },
    {
      id: 3,
      name: "Sepatu Lama",
      price: "Rp.200.000",
      image: "/images/product1.jpg",
      description: "Sepatu Baru Kita Jual Dengan Harga Murah",
    },
  ];
  const email = localStorage.getItem("email");
  const handleLogout = () => {
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    window.location.href = "/login"
  }
  return (
    <>
      <div className="flex justify-end bg-blue-600 px-10 text-white items-center h-10">
        {email}
        <Button styles="ml-5" width="w-20" hover="hover:bg-red-800" onClick={handleLogout}>Logout</Button>
      </div>
      <div className="flex justify-center h-[600px] py-5 gap-5">
        {products.map((product) => {
          return (
            <CardProduct>
              <CardProduct.Header images={product.image} />
              <CardProduct.Body name={product.name}>
                {product.description}
              </CardProduct.Body>
              <CardProduct.Footer price={product.price} />
            </CardProduct>
          );
        })}
      </div>
    </>
  );
};

export default ProductsPage;
