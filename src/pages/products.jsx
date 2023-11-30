import CardProduct from "../components/Fragments/CardProduct";

const ProductsPage = () => {
  return (
    <div className='flex justify-center items-center h-screen py-5 gap-5'>
      <CardProduct>
        <CardProduct.Header images='/images/product1.jpg' />
        <CardProduct.Body title='Laptop Baru'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic, aspernatur dolore cumque
          ratione earum magni porro vel neque quo esse excepturi eaque totam molestias est nihil
          rerum consectetur maiores quos quod labore! Accusantium obcaecati autem id error laborum
          non inventore nemo, cumque iure veritatis. Velit dignissimos quos unde obcaecati!
        </CardProduct.Body>
        <CardProduct.Footer price='Rp. 1.000.000' />
      </CardProduct>
      <CardProduct>
        <CardProduct.Header images='/images/product1.jpg' />
        <CardProduct.Body title='Laptop Baru'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam hic, aspernatur dolore cumque
          ratione earum magni porro vel neque quo esse excepturi eaque totam molestias est nihil
          rerum consectetur maiores quos quod labore! Accusantium obcaecati autem id error laborum
          non inventore nemo, cumque iure veritatis. Velit dignissimos quos unde obcaecati!
        </CardProduct.Body>
        <CardProduct.Footer price='Rp. 1.000.000' />
      </CardProduct>
    </div>
  );
};

export default ProductsPage;
