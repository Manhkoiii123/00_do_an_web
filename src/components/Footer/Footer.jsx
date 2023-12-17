import { Col, Divider, Row } from "antd";
import {
  Amazon,
  AppleStore,
  ArrowRight,
  Google,
  GooglePlay,
  Philips,
  Toshiba,
} from "../../utils/icons";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const [info, setInfo] = useState({});
  const infoWeb = useSelector((state) => state.product.infoWeb);
  useEffect(() => {
    setInfo(infoWeb);
  }, [infoWeb]);
  return (
    <>
      <div className="bg-[#1B6392]">
        <div className=" container w-[1320px] px-[300px] pt-[12px] flex flex-col justify-center items-center gap-[32px]">
          <h5 className="text-white text-[32px] font-semibold w-full text-center">
            Subscribe to our letter
          </h5>
          <p className="font-normal text-center text-white text-small w-[536px]">
            Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
            libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
          </p>
          <div className="flex items-center gap-4 p-3 shadow-[0px_12px_24px_0px_rgba(0_0_0_0.12)] bg-white">
            <input
              type="text"
              placeholder="Email Address"
              className="w-[424px] p-3 outline-none rounded-sm border border-red-100"
            />
            <Button className="bg-primary">
              Subscribe <ArrowRight />
            </Button>
          </div>
          <div className="flex items-center justify-center gap-12">
            <Google />
            <Amazon />
            <Philips />
            <Toshiba />
          </div>
        </div>
      </div>
      <div className="bg-[#191C1F] text-white py-6">
        <div className="container">
          <Row gutter={[20, 20]}>
            <Col
              span={6}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Link to="/">
                <img
                  src={info?.logo}
                  alt=""
                  className="w-[127px] h-[48px] pb-2"
                />
              </Link>
              <div className="flex flex-col">
                <span className="text-[#77878F] text-sm font-normal">
                  Customer Supports :{" "}
                </span>
                <span className="text-lg font-medium text-white">
                  {info?.phone}
                </span>
              </div>
              <span className="text-base font-normal text-gray-300">
                {info?.address}
              </span>
              <span className="text-base font-normal text-white">
                {info?.email}
              </span>
            </Col>
            <Col
              span={6}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span className="text-base font-medium text-white uppercase">
                Top Category
              </span>
              <div className="flex flex-col gap-[10px] text-sm font-medium text-gray-400">
                <span>Computer & laptop</span>
                <span>Headphone</span>
                <span className="h-[21px]">
                  <Row
                    gutter={[10]}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Col
                      span={4}
                      style={{
                        height: "21px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Divider
                        style={{
                          height: "2px",
                          backgroundColor: "#EBC80C",
                        }}
                      />
                    </Col>
                    <Col span={20}>
                      <span>Accessories</span>
                    </Col>
                  </Row>
                </span>
                <span>Camera & Photo</span>
                <span>TV & Homes</span>
              </div>
            </Col>
            <Col
              span={6}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span className="text-base font-medium text-white uppercase">
                Quick Links
              </span>
              <span className="text-base font-normal text-gray-400">
                Shop Product
              </span>
              <span className="text-base font-normal text-gray-400">
                Shopping cart
              </span>
              <span className="text-base font-normal text-gray-400">
                Wishlist
              </span>
              <span className="text-base font-normal text-gray-400">
                Compare
              </span>
              <span className="text-base font-normal text-gray-400">
                Track order
              </span>
              <span className="text-base font-normal text-gray-400">
                Customer Help
              </span>
              <span className="text-base font-normal text-gray-400">
                About us
              </span>
            </Col>
            <Col
              span={4}
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <span className="text-base font-medium text-white uppercase">
                Download app
              </span>
              <div className="flex items-center justify-center gap-4 py-4 bg-gray-800 rounded-lg">
                <GooglePlay />
                <div className="flex flex-col">
                  <span className="">Get it now</span>
                  <span>Goole Play</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 py-4 bg-gray-800 rounded-lg">
                <AppleStore />
                <div className="flex flex-col">
                  <span className="">Get it now</span>
                  <span>App Store</span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Divider></Divider>
        <span className="flex justify-center text-gray-100">
          Kinbo - eCommerce Template © 2021. Design by Templatecookie
        </span>
      </div>
    </>
  );
};

export default Footer;
