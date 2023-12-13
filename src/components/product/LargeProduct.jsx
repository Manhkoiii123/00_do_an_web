import { CartIcon, HeartIcon, StarIcon } from "../../utils/icons";

const LargeProduct = () => {
  return (
    <div className="h-full p-6 border border-gray-200">
      <div className="p-2 border border-gray-200">
        <img
          src="https://s3-alpha-sig.figma.com/img/a81e/e337/d4864b5bf82a65669ff6c6b965655324?Expires=1702252800&Signature=DsVW-dPevcZxJMuy5Oo9brPqE7uR2NmWwOuLKDxuSpWzKdY7dtTq6BxlTBLpu2AWfpIS7QZOFAOD9dU0h1~h69Rvl3-UwU~5MEvBZFiZuog3cx5bYFfPg8ABCVfG9--jZHl3JMDIUH8SNPM6DJtdUOqhQnBTgZ8s~XOtslFMgKPnHSll~QtYhjeDVZJ5OmyLTR0p71B8jWW0D1-bPzmijU06hvnhsO1PmFQX6GXa9SBbyujzC6hrr98g3bV7QzmY7oadBtDUEgZVGr5rFWVE~I9T0OsVYo8WNb20VeJDA3Rj3RfVls~Qfr1cRN~H~7ifujOwUAAHdVxKoat5rwLaUw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
          className="w-[200px] h-[180px] object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 mt-1">
        <div className="flex justify-start">
          {Array(5)
            .fill(0)
            .map((item, index) => (
              <StarIcon key={index}></StarIcon>
            ))}
          <span className="text-sm font-normal text-gray-500">(52,677)</span>
        </div>
        <span className="text-base font-normal leading-6 text-gray-900 line-clamp-2">
          Xbox Series S - 512GB SSD Console with Wireless Controller - EU
          Versio...Xbox Series S - 512GB SSD Console with Wireless Controller -
          EU Versio..
        </span>
        <div>
          <span className="ml-1 text-base font-normal leading-6 text-gray-300 line-through">
            $865.99
          </span>
          <span className="text-[#2da5f3] text-lg font-semibold leading-6">
            $442.12
          </span>
        </div>
        <span className="line-clamp-3">
          Games built using the Xbox Series X|S development kit showcase
          unparalleled load times, visuals.
        </span>
        <div className="flex justify-center gap-2 pt-4">
          <div className="p-3 cursor-pointer bg-primary opacity-30 hover:opacity-100">
            <HeartIcon />
          </div>
          <div className="p-3 cursor-pointer bg-primary opacity-30 hover:opacity-100">
            <CartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LargeProduct;
