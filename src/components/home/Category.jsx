import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Category = ({ categories }) => {
  const [cate, setCate] = useState([]);
  useEffect(() => {
    const cateParent = categories.filter((item) => {
      return item.parentId === "";
    });
    setCate(cateParent);
  }, [categories]);
  return (
    <>
      <div className="text-center">
        <span className="font-semibold text-[32px] leading-10 text-gray-900">
          Shop with Categories
        </span>
      </div>
      <div className="flex items-center justify-center gap-2 mt-10">
        {cate.map((item, index) => {
          return (
            <Link
              to={`/productlist/${item._id}`}
              key={index}
              className="px-3 py-6 text-center border border-gray-200 rounded"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/02b5/b814/8c7964c637473e93f37838c61aa6518a?Expires=1702252800&Signature=q-8N4QbGI3YA7zexa6w~PnegcpqlsfhMJNWDYO~I59k-pirwCrYt1K9EHjJ09Zl20Qngs3Gsa4GC5FvjvWhUzsq3YYMlvAksksrfTd3PU1Yp0SfwJXdLctI2xXp1nYb7NM0W2kUObS7HABpXCU8Q44uFrie6dcN4UWhbIhyHcec8rYbUx5BoMImWxyWuXTi0Kf1cAuSCQUFNLuPo6ELzbcsvLEIV3qHEiC12jzktJY~vnLijk2VBl3Vn6zCaCKT8pmEank-loWTLm56rbvqWVNaLKxVm1mfRbNpoXogz6oIXg0KW9vxT6XUIO8XoGVEFktVpvcj6fUSjKrulibKYog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt=""
                className="w-[148px] h-[148px] object-cover"
              />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Category;
