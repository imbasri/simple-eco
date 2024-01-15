import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-[600px] max-w-xs bg-gray-500 border border-gray-400 rounded-lg shadow">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { images, alt = "images" } = props;
  return (
    <a href="#">
      <img src={images} alt={alt} className="p-8 rounded-t-lg bg-contain aspect-auto  w-full h-[300px]" />
    </a>
  );
};
const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0,20)}...
        </h5>
        <p className="text-md text-white overflow-y-auto text-wrap w-full h-[200px] p-2">
          {children.substring(0,200)}...
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price,handleAddToCart ,id} = props;
  return (
    <div className="flex items-center justify-between px-4">
      <span className="text-xl font-bold text-white">${price.toLocaleString('id-ID',{styles: 'currency', currency: 'USD'})}</span>
      <Button
        type="submit"
        variant="bg-blue-600"
        hover="hover:bg-blue-800"
        width="w-50%"
        onClick={()=>handleAddToCart(id)}
      >
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
export default CardProduct;
