import { Col, Row } from "antd";
import Button from "../Button";
import {
  Champion,
  DeliveryIcon,
  PaymentIcon,
  SupportIcon,
} from "../../utils/icons";
import { Link } from "react-router-dom";

const Widget = () => {
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={16}>
          <div className="flex px-10 py-6 bg-gray-300">
            <Row gutter={[20, 20]}>
              <Col
                span={12}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="text-[#2484C2] flex flex-col gap-[20px]">
                  <span className="text-sm font-medium uppercase">
                    The Best Place To play
                  </span>
                  <span className="text-[48px] font-semibold">
                    Xbox Consoles
                  </span>
                  <span className="text-lg font-normal text-gray-700">
                    Save up to 50% on select Xbox games. Get 3 months of PC Game
                    Pass for $2 USD.
                  </span>
                  <Link to="/productlist">
                    <Button className="text-white bg-primary w-[40%] hover:opacity-80 ">
                      Shop now
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col span={12}>
                <img src="img1.png" alt="" />
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          span={8}
          style={{ display: "flex", flexDirection: "column", gap: "24px" }}
        >
          <div className="relative overflow-hidden rounded-lg h-1/2">
            <Row
              style={{
                height: "100%",
                backgroundColor: "#191C1F",
              }}
            >
              <Col
                span={12}
                style={{
                  padding: "0 40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  <span className="text-sm font-medium uppercase text-[#EBC80C]">
                    Summer Sales
                  </span>
                  <span className="text-xl font-semibold leading-8 text-white">
                    New Google Pixel 6 Pro
                  </span>
                  <Link to="/productlist">
                    <Button kind="primary">Shop now</Button>
                  </Link>
                </div>
              </Col>
              <Col span={12}>
                <img
                  src="https://s3-alpha-sig.figma.com/img/1e27/e3da/3a9722cbfd03ad06711ce321ea6a8e37?Expires=1702252800&Signature=CIbd3l~-3jYuMVnoSI-EPefHx2eEsSd8St0aS1Xq~C-2~5SeIoAzAeTqC9i9QKmj5kNF1UUAY~PTuBYlFIC58TnJnhPngXZYdCMsD74L1PsVsPviTDbACW4OMYu1RxIlm0s~Tz0rb9njd1yg8U8CvPjW6IapPKxPSFezAA7byHPlSyaKhqxlqUpaGaEVNYc6LkJ10ZFj-7QObZfRKKG4eH-UmLmB9nKTn7EYF-Dpub3sa7EN9pvMMs~0Xc-K~mDmfKNd9owfJBLd2vZ5~fonGXdpUvICOjZy1BeXQ2nsg52DZAWnj1AiEsAxG84IIL2mTD0CzbOlxLJAUTXWmLwQww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                  className="w-[312px] h-[312px] absolute top-[35px] left-[35px] object-cover "
                />
              </Col>
              <Button
                kind="secondary"
                className="absolute top-[22px] right-[29px] px-2 py-0"
              >
                <span>29% OFF</span>
              </Button>
            </Row>
          </div>
          <div className="relative overflow-hidden rounded-lg h-1/2">
            <Row
              style={{
                height: "100%",
                backgroundColor: "#F2F4F5",
              }}
            >
              <Col
                span={12}
                style={{
                  padding: "0 40px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="https://s3-alpha-sig.figma.com/img/77ff/1aeb/09dedd4bf17ee12f721038f32073f7a3?Expires=1702252800&Signature=DPhqyldDXnAGvlojwNI0ce0c5JCxvTFOCXGoW1UBnbqcgXH6zCH8ehOvm4HPeN1kU8uKUf~CT~fsDKw7GmbjYAbEVU5lDx9aMJvsara3tLK8VVVvsI12RrLFgRk8-aaZ-trxxYP1K0sh6Y3lUmj0V7s~MAiwYsThv5-a8CsrlrieYr--cvNC1vzwBUkI8wy0k7FM2gxMzPgU~fZhLfWgHUBv6-SKM4Q5m3aeaPFIro7KrdobMOhmwul5A-t4aSjzwnnXdGZlr80738Sum0J8rC~RgRIEMFCHCnJT0mY~kJWda3We5o9Yr5-K8I9qNiZWnM8OJO2CnsviniVzii7V6g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                  alt=""
                />
              </Col>
              <Col
                span={12}
                style={{
                  display: "flex",
                  gap: "10px",
                  flexDirection: "column",
                  alignItems: "start",
                  justifyContent: "center",
                }}
              >
                <span className="text-xl font-semibold leading-8 text-gray-900">
                  Xiaomi FlipBuds Pro
                </span>
                <span className="text-[#2DA5F3] text-lg font-semibold leading-6">
                  $ 299 USD
                </span>
                <Link to="/productlist">
                  <Button kind="primary" className="uppercase">
                    Shop now
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <div className="flex justify-between p-4 mt-4 border border-gray-200 rounded-lg">
        <div className="flex items-center justify-between gap-4 ">
          <DeliveryIcon></DeliveryIcon>
          <div className="flex flex-col">
            <span>Fasted Delivery</span>
            <span>Delivery in 24/H</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 ">
          <Champion></Champion>
          <div className="flex flex-col">
            <span>24 Hours Return</span>
            <span>100% money-back guarantee</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 ">
          <PaymentIcon></PaymentIcon>
          <div className="flex flex-col">
            <span>Secure Payment</span>
            <span>Your money is safe</span>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 ">
          <SupportIcon></SupportIcon>
          <div className="flex flex-col">
            <span>Support 24/7</span>
            <span>Live contact/message</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Widget;
