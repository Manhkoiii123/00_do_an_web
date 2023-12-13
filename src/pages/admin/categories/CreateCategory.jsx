/* eslint-disable react/prop-types */
import {
  MinusCircleFilled,
  UploadOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Modal,
  Row,
  Select,
  Switch,
  Upload,
  message,
} from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";

const CreateCategory = ({ openCreateCategory, setOpenCreateCategory }) => {
  const propsUpload = {
    name: "file",
    // action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
    headers: {
      authorization: "authorization-text",
    },
    // customRequest: handleUploadAvatar,
    onChange(info) {
      if (info.file.status !== "uploading") {
        // console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(` file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(` file upload failed.`);
      }
    },
  };
  const [form] = useForm();

  //   onchange switch
  const [isParent, setIsParent] = useState(false);
  const onChangeIsParent = (e) => {
    setIsParent(e);
    // console.log(e.target.checked);
  };

  //select cate cha
  const handleChangeParentCate = (value) => {
    // console.log(`selected ${value}`);
  };
  const onFinish = (values) => {
    // console.log(values);
  };
  const onChangeCheckbox = (checkedValues) => {
    // console.log("checked = ", checkedValues);
  };

  //new properties
  const [properties, setProperties] = useState([]);
  const [isNewProperty, setIsNewProperty] = useState(false);
  const [newProperty, setNewProperty] = useState("");
  const handleOnChangeInput = (e) => {
    setNewProperty(e.target.value);
  };
  const handleAddNewProperties = () => {
    setProperties((prev) => [
      ...prev,
      {
        value: newProperty,
        label: newProperty,
      },
    ]);
    setNewProperty("");
  };
  const handleDelete = (value) => {
    const a = properties.filter((item) => item.value !== value);
    setProperties(a);
  };
  //   console.log(properties);
  return (
    <Modal
      width="30vw"
      title="Add new category"
      open={openCreateCategory}
      onOk={() => setOpenCreateCategory(true)}
      onCancel={() => setOpenCreateCategory(false)}
      footer={<></>}
      maskClosable={false}
    >
      <div className="flex flex-col items-center justify-center gap-2">
        <Avatar
          size={100}
          icon={<UserOutlined />}
          // src={`${
          //   import.meta.env.VITE_BACKEND_URL
          // }/images/avatar/${tempAvatar}`}
        />
        <Upload {...propsUpload}>
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </div>
      <Form
        form={form}
        name="basic"
        // style={{ maxWidth: 600, margin: '0 auto' }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          labelCol={{ span: 24 }} //whole column
          label="Title"
          name="title"
          rules={[{ required: true, message: "Title không được để trống!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          labelCol={{ span: 24 }} //whole column
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Description không được để trống!" },
          ]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Row>
          <Col span={12}>
            <Form.Item name="status" label="Status">
              <Switch />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name="isparent" label="Parent">
              <Switch onChange={(e) => onChangeIsParent(e)} />
            </Form.Item>
          </Col>
        </Row>
        {!isParent && (
          <Form.Item
            value="categoryParent"
            label="Select"
            labelCol={{ span: 24 }}
          >
            <Select
              onChange={handleChangeParentCate}
              style={{ marginBottom: "10px" }}
            >
              <Select.Option value="demo">Demo</Select.Option>
            </Select>

            <Form.Item label="Properties" labelCol={{ span: 24 }}>
              <Checkbox.Group
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
                onChange={onChangeCheckbox}
              >
                <Row>
                  {properties.map((item, index) => (
                    <Col key={index} span={8}>
                      <Checkbox value={item.value}>{item.label}</Checkbox>
                      <MinusCircleFilled
                        onClick={() => handleDelete(item.value)}
                        style={{ cursor: "pointer" }}
                      />
                    </Col>
                  ))}
                </Row>
                <div className="flex flex-col gap-2">
                  <Button onClick={() => setIsNewProperty(true)}>
                    Add new properties
                  </Button>
                  {isNewProperty && (
                    <div className="flex flex-col gap-2">
                      <Input
                        value={newProperty}
                        placeholder="Enter new properties"
                        onChange={(e) => handleOnChangeInput(e)}
                      ></Input>
                      <Button onClick={handleAddNewProperties}>Add</Button>
                    </div>
                  )}
                </div>
              </Checkbox.Group>
            </Form.Item>
          </Form.Item>
        )}
        <Form.Item>
          <Button htmlType="submit">Thêm mới</Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateCategory;
