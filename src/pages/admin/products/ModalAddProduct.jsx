/* eslint-disable react/prop-types */
import { Button, Cascader, Form, Input, Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import AddProductChild from "./AddProductChild";
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const ModalAddProduct = ({ isOpenAddNewProduct, setIsOpenAddNewProduct }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-2",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-3",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
    {
      uid: "-4",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
    );
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  const [form] = useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  // category
  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];

  //chidren product
  const [productChildren, setProductChildren] = useState();
  console.log(productChildren);
  return (
    <Modal
      width="70vw"
      title="Add New Product"
      open={isOpenAddNewProduct}
      maskClosable={false}
      onCancel={() => setIsOpenAddNewProduct(false)}
      footer={<></>}
    >
      <Form
        name="basic"
        form={form}
        // style={{ maxWidth: 600 }}
        // initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item labelCol={{ span: 24 }} label="Hình ảnh sản phẩm :">
          <div className="my-4">
            <Upload
              action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            <Modal
              open={previewOpen}
              title={previewTitle}
              footer={null}
              onCancel={handleCancel}
            >
              <img
                alt="example"
                style={{
                  width: "100%",
                }}
                src={previewImage}
              />
            </Modal>
          </div>
        </Form.Item>
        <Form.Item
          label="title"
          labelCol={{ span: 24 }}
          name="title"
          rules={[
            {
              required: true,
              message: "Please enter your product name!",
            },
            {
              min: 20,
              message: "Product name have min length 20 !",
            },
          ]}
        >
          <Input showCount maxLength={120} />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 24 }}
          label="Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please enter your product name!",
            },
          ]}
        >
          <Cascader
            options={options}
            // onChange={onChangeSelectCategory}
            placeholder="Please select category"
          />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 24 }}
          label="Description"
          name="decription"
          rules={[
            {
              required: true,
              message: "Please enter your product name!",
            },
            {
              min: 20,
              message: "Description name have min length 20 !",
            },
          ]}
        >
          <TextArea rows={4} placeholder="maxLength is 3000" maxLength={3000} />
        </Form.Item>
        <Form.Item label="Phân loại hàng" labelCol={{ span: 24 }} name="title">
          <AddProductChild
            productChildren={productChildren}
            setProductChildren={setProductChildren}
          />
        </Form.Item>
        {/* <TableAddProduct></TableAddProduct> */}
        <Form.Item className="mt-10">
          <Button htmlType="submit">Cập nhật</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalAddProduct;
