/* eslint-disable no-unused-vars */
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeftIcon, PlusIcon } from "../../utils/icons";
import { Col, Row, Steps, Table } from "antd";
import { useState } from "react";
import ModalRating from "./ModalRating";

const OrderDetail = () => {
  const description = "This is a description.";
  const items = [
    {
      title: "Finished",
      description,
    },
    {
      title: "In Progress",
      description,
    },
    {
      title: "Waiting",
      description,
    },
    {
      title: "Finished",
      description,
    },
    {
      title: "In Progress",
      description,
    },
    {
      title: "Waiting",
      description,
    },
  ];
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      price: 1000,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      price: 1000,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Products",
      dataIndex: "products",
      className: "w-[500px]",
      render: (text, record, index) => {
        return (
          <div className="flex items-center w-[500px]">
            <img
              className="w-[72px] h-[72px]"
              src="https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1702252800&Signature=RlrhJ4dS9tajw~GAgZInF~DokfoWsc1v4h69o4zD3VlQ0G9o2y4gjQr~7bEoTTlv75r9dHLH2Uho5Fpt4iZnU1Xtn0kqiauOfKuM1MkU4-fkrH4JrFLKkiFif9wkNgkdEw9YH32WaJkoJDinW3ubShmuWntPvfPVtuoIsldE23Tsjlsve~fXPKUCLzpKSOwFwkKuywYA0hEFfWerGrzk-e~w0bQyF5QOdhBTfQ6WKSTONqCdafYxLm5a1Rsq7GF~NmxeaFfXJKYfhB6XldNV1x2IN-yYmlKvhHfT4Cu5KEsJxLOKbMb-rXzkvpKt2NCec8KIvqavsF3kVPJTkk3G3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <span className="text-sm font-normal leading-5 text-gray-700">
              Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
              Headphones for Workouts and Running, Triple Black
            </span>
          </div>
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Price",
      dataIndex: "",
      key: "",
    },
    {
      title: "Price",
      dataIndex: "",
      key: "",
    },
  ];
  
  const { id } = useParams();
  const location = useLocation();
  console.log(location);
  const pathname = location.pathname;
  const isAdmin = pathname.includes("admin") ? true : false;
  const to = isAdmin ? "/admin/order" : "/orderhistory";
  // console.log(params);
  return (
    <>
      <div className="container p-5 my-12 border border-gray-200">
        <div className="flex items-center justify-between ">
          <Link to={to} className="flex items-center gap-2 ">
            <ArrowLeftIcon></ArrowLeftIcon>
            <span>Order Details</span>
          </Link>
          
        </div>
        <div className="p-5 flex items-center justify-between bg-[#F7E99E] bg-opacity-20 mt-5">
          <div>
            <span className="font-normal text-gray-900 text-[20px] leading-7">
              #96459761
            </span>
            <div className="flex items-center gap-2">
              <span>4 Products</span>
              <span>Order Placed in 17 Jan, 2021 at 7:32 PM</span>
            </div>
          </div>
          <div>
            <span className="text-[#2DA5F3] text-[28px] font-semibold leading-8">
              $999999
            </span>
          </div>
        </div>

        <div className="mt-10">
          <Steps current={1} labelPlacement="vertical" items={items} />
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <span>Products</span>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>

        <div className="p-5 mt-10 border border-gray-100">
          <Row gutter={[20, 20]}>
            <Col
              span={8}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                borderRight: "1px solid #ccc",
              }}
            >
              <span className="text-base font-normal leading-6 text-gray-900">
                Billing Address
              </span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
            </Col>

            <Col
              span={8}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                borderRight: "1px solid #ccc",
              }}
            >
              <span className="text-base font-normal leading-6 text-gray-900">
                Billing Address
              </span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
            </Col>
            <Col
              span={8}
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              <span className="text-base font-normal leading-6 text-gray-900">
                Billing Address
              </span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
            </Col>
          </Row>
        </div>
      </div>
      
    </>
  );
};

export default OrderDetail;
