/* eslint-disable no-unused-vars */
import { Button, Table } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { callOrderHistory } from "../../services/cartApi";
import moment from "moment";
import ReactJson from "react-json-view";
const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);
  const location = useLocation();
  const pathname = location.pathname;
  const isAdmin = pathname.includes("admin") ? true : false;
  const to = isAdmin ? "/admin/order" : "/orderhistory";
  const fetchOrderHistory = async () => {
    const res = await callOrderHistory();
    if (res.status === 200) {
      setOrderHistory(res.data.historyPurchase.reverse());
    }
  };
  useEffect(() => {
    fetchOrderHistory();
  }, []);
  const status = [
    {
      statusOrder: 0,
      des: "Chờ thanh toán",
    },
    {
      statusOrder: 1,
      des: "Vận chuyển",
    },
    {
      statusOrder: 2,
      des: "Chờ giao hàng",
    },
    {
      statusOrder: 3,
      des: "Hoàn thành",
    },
    {
      statusOrder: 4,
      des: "Đã hủy",
    },
  ];
  const paymentMethod = [
    {
      data: "tienmat",
      des: "Tiền mặt",
    },
    {
      data: "paypal",
      des: "PayPal",
    },
  ];
  //
  const dataSource = orderHistory;

  const columns = [
    {
      title: "Tóm tắt đơn hàng",
      width: "20%",
      render: (text, record, index) => {
        const product = record.products.map(
          (item) => item?.inforProduct?.title
        );
        return (
          <ReactJson src={product} collapsed={true} name="Tóm tắt đơn mua" />
        );
      },
    },
    {
      title: "Thông tin người mua",
      width: "30%",
      render: (text, record, index) => {
        return (
          <ReactJson
            src={record.userInfo}
            collapsed={true}
            name="Thông tin người mua"
          />
        );
      },
    },
    {
      title: "Status",
      render: (text, record, index) => {
        return <span>{status[record.statusOrder].des}</span>;
      },
    },
    {
      title: "Date",
      key: "date",
      render: (text, record, index) => {
        return <span>{moment(record.createdAt).format("DD-MM-YYYY")}</span>;
      },
    },
    {
      title: "Payment Method",
      render: (text, record, index) => {
        const tmp = paymentMethod.filter(
          (item) => item.data === record.paymentMethod
        );
        return <span>{tmp[0]?.des}</span>;
      },
    },
    {
      title: "Total",
      render: (text, record, index) => {
        const total = record.products.reduce((res, current) => {
          return res + current.totalPrice;
        }, 0);
        // const dis = total * (record?.discountDetail?.discountPercent / 100);
        // const discount = record.
        return <span>{total}</span>;
      },
    },
    {
      title: "Action",
      render: (text, record, index) => {
        return (
          <div className="flex items-center justify-between gap-2">
            <Link to={`${record.id}`}>Detail</Link>
            {isAdmin && <Button>Update</Button>}
          </div>
        );
      },
    },
  ];

  return (
    <div
      className={`container p-4 border border-gray-100 ${
        isAdmin ? "my-0" : "my-12"
      }`}
    >
      <span className="text-sm font-medium text-gray-900 uppercase ">
        Order history
      </span>
      <div className="mt-10">
        <Table dataSource={dataSource} columns={columns} pagination={true} />
      </div>
    </div>
  );
};

export default OrderHistory;
