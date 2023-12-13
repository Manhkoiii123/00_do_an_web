/* eslint-disable no-unused-vars */
import { Table } from "antd";
import { Link } from "react-router-dom";
import ModalRating from "./ModalRating";
import { useEffect, useState } from "react";
import { PlusIcon } from "../../utils/icons";
import { callOrderHistory } from "../../services/cartApi";
import moment from "moment";
import ReactJson from "react-json-view";
const OrderHistory = () => {
  const [orderHistory, setOrderHistory] = useState([]);

  const fetchOrderHistory = async () => {
    const res = await callOrderHistory();
    if (res.status === 200) {
      setOrderHistory(res.data.historyPurchase.reverse());
    }
  };
  useEffect(() => {
    fetchOrderHistory();
  }, []);
  
  //
  const dataSource = orderHistory;

  const columns = [
    {
      title: "Tóm tắt đơn hàng",
      width: "30%",
      render: (text, record, index) => {
        return (
          <ReactJson
            src={record.products}
            collapsed={true}
            name="Tóm tắt đơn mua"
          />
        );
      },
    },
    {
      title: "Status",
      dataIndex: "statusOrder",
      key: "status",
    },
    {
      title: "Date",
      dataIndex: "createAt",
      key: "date",
      render: (text, record, index) => {
        return <span>{moment(record).format("DD-MM-YYYY")}</span>;
      },
    },
    {
      title: "Payment Method",
      dataIndex: "paymentMethod",
      key: "paymentMethod",
    },
    {
      title: "Total",
      render: (text, record, index) => {
        const total = record.products.reduce((res, current) => {
          return res + current.totalPrice;
        }, 0);
        return <span>{total}</span>;
      },
    },
    {
      title: "Action",
      render: (text, record, index) => {
        return (
          <div className="flex items-center justify-between gap-1">
            <Link to={`${record.id}`}>Detail</Link>
            {/* {record.statusOrder === 3 && (
              
            )} */}
          </div>
        );
      },
    },
  ];

  return (
    <div className="container p-4 my-12 border border-gray-100">
      <span className="text-sm font-medium text-gray-900 uppercase ">
        Order history
      </span>
      <div className="mt-10">
        <Table dataSource={dataSource} columns={columns} pagination={false} />
      </div>
      
    </div>
  );
};

export default OrderHistory;
