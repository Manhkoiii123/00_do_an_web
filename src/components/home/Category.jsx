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
                src={item.image}
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
