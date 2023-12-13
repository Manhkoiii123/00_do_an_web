/* eslint-disable no-unused-vars */
import { Link, useLocation, useParams } from "react-router-dom";
import { ArrowLeftIcon, PlusIcon } from "../../utils/icons";
import { Button, Col, Popconfirm, Row, Steps, Table, message } from "antd";
import { useEffect, useState } from "react";
import ModalRating from "./ModalRating";
import {
  callCancelOrder,
  callDetailOrder,
  callUpdateOrder,
} from "../../services/cartApi";
import moment from "moment";
import { formatCurrency, formatNumberToSocialStyle } from "../../utils/utils";

const OrderDetail = () => {
  const [showModalRating, setShowModalRating] = useState(false);
  const items = [
    {
      title: "Chờ thanh toán",
      description: "Chờ thanh toán",
    },
    {
      title: "Vận chuyển",
      description: "Đơn hàng đã được giao cho bên vận chuyển",
    },
    {
      title: "Chờ giao hàng",
      description: "Đơn hàng đang trên đường đến với bạn",
    },
    {
      title: "Hoàn Thành",
      description: "Bạn đã nhận được đơn hàng",
    },
  ];

  const { id } = useParams();
  const location = useLocation();
  const pathname = location.pathname;
  const isAdmin = pathname.includes("admin") ? true : false;
  const to = isAdmin ? "/admin/order" : "/orderhistory";
  const [dataDetail, setDataDetail] = useState();
  const fetchDataDetail = async () => {
    const res = await callDetailOrder(id);
    if (res.status === 200) {
      setDataDetail(res.data.orderDetail);
    }
  };
  const [currentStep, setCurrentStep] = useState(dataDetail?.statusOrder);
  const [cancelOrder, setCancelOrder] = useState(false);
  const [dataProduct, setDataProduct] = useState({});
  useEffect(() => {
    fetchDataDetail();
  }, [id]);
  useEffect(() => {
    setCurrentStep(dataDetail?.statusOrder);
    if (dataDetail?.statusOrder === 4) {
      setCancelOrder(true);
    }
  }, [dataDetail?.statusOrder]);
  const changeStatus = async () => {
    setCurrentStep((prev) => prev + 1);
    const data = {
      statusOrder: currentStep,
    };
    const res = await callUpdateOrder(id, data);
  };
  useEffect(() => {
    const id = setTimeout(() => {
      if (currentStep <= 3) {
        changeStatus();
      }
    }, 20000);
    return () => {
      clearTimeout(id);
    };
  }, [currentStep]);

  const dataSource = dataDetail?.products;
  const columns = [
    {
      title: "Products",
      className: "w-[500px]",
      render: (text, record, index) => {
        return (
          <div className="flex items-center w-[500px] gap-2">
            <img
              className="w-[72px] h-[72px]"
              src={
                record?.inforProduct?.images[0] ||
                "https://tse2.mm.bing.net/th?id=OIP.o27PVWSehFHkhiMMkUR8ZAHaE7&pid=Api&P=0&h=220"
              }
              alt=""
            />
            <span className="text-sm font-normal leading-5 text-gray-700">
              {record?.inforProduct?.title}
            </span>
            {record?.childTitle !== "none" && (
              <span>({record?.childTitle})</span>
            )}
          </div>
        );
      },
    },
    {
      title: "Quantity",
      render: (text, record, index) => {
        return <span>{formatNumberToSocialStyle(record?.quantity)}</span>;
      },
    },
    {
      title: "Total price",
      render: (text, record, index) => {
        return <span>{formatCurrency(record?.totalPrice)}đ</span>;
      },
    },
    {
      title: "Action",
      width: "20%",
      render: (text, record, index) => {
        if (currentStep >= 3 && !cancelOrder) {
          return (
            <div
              onClick={() => {
                setDataProduct(record);
                setShowModalRating(true);
              }}
              className="flex items-center w-fit gap-2 p-2 border rounded-md cursor-pointer border-primary"
            >
              <span className="text-sm font-semibold text-primary">
                Leave a Rating
              </span>
              <PlusIcon></PlusIcon>
            </div>
          );
        }
      },
    },
  ];

  //hủy đơn hàng
  const handleCancelOrder = async (id) => {
    const res = await callCancelOrder(id);
    if (res.status === 200) {
      message.success("Huỷ Đơn Hàng Thành Công");
    }
  };
  if (!id) return null;
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
              #{id}
            </span>
            <div className="flex items-center gap-2">
              <span>{dataDetail?.products.length} Products</span>
              <span>
                Order Placed in{" "}
                {moment(dataDetail?.createdAt).format("DD-MM-YYYY")}
              </span>
            </div>
          </div>
          <div>
            <span className="text-[#2DA5F3] text-[28px] font-semibold leading-8">
              {formatCurrency(
                dataDetail?.products.reduce((res, current) => {
                  return res + current.totalPrice;
                }, 0)
              )}
              đ
            </span>
          </div>
        </div>
        {cancelOrder && (
          <div className="flex items-center justify-center mt-4">
            <span>Đơn hàng đã bị hủy</span>
          </div>
        )}
        {!cancelOrder && (
          <div className="mt-10">
            <Steps
              current={currentStep + 1}
              labelPlacement="vertical"
              items={items}
            />
          </div>
        )}

        <div className="flex flex-col gap-5 mt-10">
          <span>Products</span>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </div>

        {currentStep < 1 && (
          <div className="flex items-center justify-end mt-12">
            <Popconfirm
              placement="leftTop"
              title="Xác nhận hủy đơn hàng này"
              description="Bạn có chắc chắn muốn hủy đơn hàng này ? "
              okText="Xác nhận"
              cancelText="Hủy"
              okButtonProps={{ type: "default" }}
              onConfirm={() => handleCancelOrder(dataDetail.id)}
            >
              <Button>Hủy đơn hàng</Button>
            </Popconfirm>
          </div>
        )}
        <div className="p-5 mt-10 border border-gray-100">
          <Row gutter={[20, 20]}>
            <Col
              span={12}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                borderRight: "1px solid #ccc",
              }}
            >
              <span className="text-base font-normal leading-6 text-gray-900">
                Thông tin giao hàng
              </span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
            </Col>

            <Col
              span={12}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <span className="text-base font-normal leading-6 text-gray-900">
                Hóa đơn thanh toán
              </span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
              <span>Tran duc manh</span>
            </Col>
          </Row>
        </div>
        <ModalRating
          orderId={id}
          dataProduct={dataProduct}
          showModalRating={showModalRating}
          setShowModalRating={setShowModalRating}
        />
      </div>
    </>
  );
};

export default OrderDetail;
