/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// import Button from "../Button";
import ProductQuery from "./ProductQuery";

const FeaturedProducts = ({ productFeatureds }) => {
  return (
    <div className="my-10 h-[725px] flex  gap-4">
      <div className="w-[340px] bg-[#F3DE6D] h-full px-[18px] py-8 text-center flex  items-center flex-col gap-4">
        <span className="text-[#BE4646] font-semibold text-sm">
          COMPUTER & ACCESSORIES
        </span>
        <span className="text-gray-900 text-[32px] font-semibold leading-10">
          32% Discount
        </span>
        <span className="text-base font-normal leading-6 text-gray-700">
          For all ellectronics products
        </span>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium leading-3 text-gray-900">
            Offers ends in:
          </span>
          <span className="px-[6px] py-3 bg-white rounded-lg">
            ENDS OF CHRISTMAS
          </span>
        </div>
        {/* <Button className="w-1/2">
          <Link to="/productlist">SHOP NOW</Link>
        </Button> */}
        <img
          className="w-[312px] h-[400px] object-cover"
          src="https://s3-alpha-sig.figma.com/img/a593/5e4a/e865aea09c3021d056c99782b3748bc2?Expires=1702252800&Signature=ZaFkmv53SOWTSqanRDqSLO6XdBeYeAOIkgeenDcKYvxaiJ3HPkyGTymNnPisa7HoBWzAspzGJJLBYT0YbqFRo4D9uSALE5ehawrbivSlKc3XxKQf7svEYC3Ri~NfSkatWWFmrvshHk2y0AMkA9yxewBxB4QlBq2mWVX50CiJMo4vt5kFJMJAqLwnAXXpCNQrW-X9q6Fk-6RSWZPyD-wDG2G8tOR5qZxoTfL~vvFWOTN6KvUkORAh6oeSYkaQ-wYKt4l2hpXfzOqoD5w9K0qvsmtiRz2VT3Pj9Ip4HCRf8VH7CBTHK6gH3-WnZfNSJgY8awD6sg8yObrgJqfc0RqelQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>

      <div className="w-[984px] h-full">
        <ProductQuery data={productFeatureds} label="Featured Products" />
      </div>
    </div>
  );
};

export default FeaturedProducts;
