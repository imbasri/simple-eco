import Button from "../Elements/Button";

const CardProduct = (props) => {
  const { children } = props;
  return (
    <div className="w-full h-[600px] max-w-sm bg-gray-500 border border-gray-400 rounded-lg shadow">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { images, alt = "images" } = props;
  return (
    <a href="#">
      <img src={images} alt={alt} className="p-8 rounded-t-lg" />
    </a>
  );
};
const Body = (props) => {
  const { children, name } = props;
  return (
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name}
        </h5>
        <p className="text-md text-white overflow-y-auto h-[200px]">
          {children}
        </p>
      </a>
    </div>
  );
};

const Footer = (props) => {
  const { price } = props;
  return (
    <div className="flex items-center justify-between px-5 py-5">
      <span className="text-xl font-bold text-white">{price}</span>
      <Button
        type="submit"
        variant="bg-blue-600"
        hover="hover:bg-blue-800"
        width="w-50%"
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
