/* eslint-disable no-unused-vars */
import { Table } from "antd";
import { Link } from "react-router-dom";
import ModalRating from "./ModalRating";
import { useState } from "react";
import { PlusIcon } from "../../utils/icons";

const OrderHistory = () => {
  const [showModalRating, setShowModalRating] = useState(false);
  //
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Order Id",
      dataIndex: "orderId",
      key: "id",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "date",
    },
    {
      title: "Action",
      className: "w-[300px]",
      render: (text, record, index) => {
        return (
          <div className="flex items-center justify-between gap-1">
            <Link to={`${record.id}`}>Detail</Link>
            <div
              onClick={() => setShowModalRating(true)}
              className="flex items-center gap-2 p-2 border rounded-md cursor-pointer border-primary"
            >
              <span className="text-sm font-semibold text-primary">
                Leave a Rating
              </span>
              <PlusIcon></PlusIcon>
            </div>
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
        <Table dataSource={dataSource} columns={columns} />
      </div>
      <ModalRating
        showModalRating={showModalRating}
        setShowModalRating={setShowModalRating}
      />
    </div>
  );
};

export default OrderHistory;
