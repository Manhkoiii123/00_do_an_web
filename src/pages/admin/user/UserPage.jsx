/* eslint-disable no-unused-vars */
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Button, Popconfirm, Table } from "antd";
import { MdDelete } from "react-icons/md";

const UserPage = () => {
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
      title: "Id",
      dataIndex: "_id",
      render: (text, record, index) => {
        return (
          <a
            onClick={() => {
              //   setDataDetail(record);
              //   setOpenViewDetail(true);
            }}
          >
            {/* {record._id} */}a
          </a>
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      render: (text, record, index) => {
        return (
          <div style={{ display: "flex", gap: "5px" }}>
            <Popconfirm
              placement="leftTop"
              title="Xác nhận xóa khỏi danh sách yêu thích"
              description="Bạn có chắc chắn muốn xóa sản phẩm này ? "
              okText="Xác nhận"
              cancelText="Hủy"
              okButtonProps={{ type: "default" }}
              //   onConfirm={() => handleDeleteBook(record._id)}
            >
              <Button>
                <MdDelete color="red"></MdDelete>
              </Button>
            </Popconfirm>

            <Button
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ShoppingCartOutlined />
            </Button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between mb-10">
        <span className="uppercase">User</span>
        <Button>Add New User</Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default UserPage;
