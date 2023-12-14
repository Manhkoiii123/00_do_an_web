/* eslint-disable no-unused-vars */
import { Button, Popconfirm, Table, Tag } from "antd";
import { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import ModalViewDetail from "./ModalViewDetail";
import ModalAddProduct from "./ModalAddProduct";

const ProductPage = () => {
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
      title: "Products",
      dataIndex: "products",
      className: "w-[500px]",
      render: (text, record, index) => {
        console.log(record);
        return (
          <div className="flex items-center w-[500px]">
            <img
              className="w-[72px] h-[72px]"
              src="https://s3-alpha-sig.figma.com/img/45ff/ebea/53178df09da5b55aa5ec9c64f9c97219?Expires=1702252800&Signature=RlrhJ4dS9tajw~GAgZInF~DokfoWsc1v4h69o4zD3VlQ0G9o2y4gjQr~7bEoTTlv75r9dHLH2Uho5Fpt4iZnU1Xtn0kqiauOfKuM1MkU4-fkrH4JrFLKkiFif9wkNgkdEw9YH32WaJkoJDinW3ubShmuWntPvfPVtuoIsldE23Tsjlsve~fXPKUCLzpKSOwFwkKuywYA0hEFfWerGrzk-e~w0bQyF5QOdhBTfQ6WKSTONqCdafYxLm5a1Rsq7GF~NmxeaFfXJKYfhB6XldNV1x2IN-yYmlKvhHfT4Cu5KEsJxLOKbMb-rXzkvpKt2NCec8KIvqavsF3kVPJTkk3G3Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
            <a
              onClick={() => {
                setIsOpenDetail(true);
                setDataDetail(record);
              }}
              className="text-sm font-normal leading-5 text-gray-700"
            >
              Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear
              Headphones for Workouts and Running, Triple Black
            </a>
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
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record, index) => {
        return <Tag color="green">Acitve</Tag>;
      },
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
              // onConfirm={() => handleDeleteBook(record._id)}
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
              <FaEdit />
            </Button>
          </div>
        );
      },
    },
  ];
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState(null);
  const [isOpenAddNewProduct, setIsOpenAddNewProduct] = useState(false);

  return (
    <div className="p-4 border border-gray-200 rounded-lg">
      <div className="flex items-center justify-between mb-10">
        <span className="uppercase">Products</span>
        <Button onClick={() => setIsOpenAddNewProduct(true)}>
          Add New Product
        </Button>
      </div>
      <Table dataSource={dataSource} columns={columns} />
      {/* <ModalViewDetail
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        isOpenDetail={isOpenDetail}
        setIsOpenDetail={setIsOpenDetail}
      />
      <ModalAddProduct
        isOpenAddNewProduct={isOpenAddNewProduct}
        setIsOpenAddNewProduct={setIsOpenAddNewProduct}
      /> */}
    </div>
  );
};

export default ProductPage;
