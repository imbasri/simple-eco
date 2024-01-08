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
  return (
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
  );
};

export default ProductsPage;
