/* eslint-disable react-hooks/exhaustive-deps */
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Col,
  Form,
  Input,
  Row,
  Tabs,
  Upload,
  message,
  notification,
} from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  callCheckOldPassword,
  callUpdateAvatar,
  callUpdatePassword,
  callUpdateUser,
} from "../../services/authApi";

const Profile = () => {
  const profile = useSelector((state) => state.account.profile);
  const [form] = useForm();
  const [form2] = useForm();
  const init = {
    email: profile.email,
    fullName: profile.fullName,
    phone: profile.phone,
    address: profile.address,
  };
  useEffect(() => {
    form.setFieldsValue(init);
  }, [profile]);
  const updateInfoUser = async (values) => {
    const data = {
      email: values.email,
      phone: values.phone,
      fullName: values.fullName,
      address: values.address,
    };
    const res = await callUpdateUser(data);
    if (res.data.code === 200) {
      message.success("Update thông tin thành công");
    }
  };
  const handleChangePassword = async (values) => {
    const oldPass = {
      password: values.password,
    };
    const newPass = {
      password: values.newPassword,
    };
    const checkPass = await callCheckOldPassword(oldPass);
    if (checkPass.data.code === 200) {
      const updatePass = await callUpdatePassword(newPass);
      if (updatePass.data.code === 200) {
        message.success("Update password thành công");
      }
    } else {
      notification.error({
        description: "Mật khẩu cũ sai rồi",
        message: checkPass.data.message,
      });
    }
  };
  const handleUploadAvatar = async ({ file }) => {
    const res = await callUpdateAvatar(file.name);
    console.log(res);
  };
  const propsUpload = {
    name: "file",
    headers: {
      authorization: "authorization-text",
    },
    customRequest: handleUploadAvatar,
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
  const items = [
    {
      key: "1",
      label: "Cập nhật thông tin",
      children: (
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Avatar size={100} icon={<UserOutlined />} src={profile.avatar} />
              <Upload {...propsUpload}>
                <Button icon={<UploadOutlined />}>Upload avatar</Button>
              </Upload>
            </div>
          </Col>
          <Col span={12}>
            <Form
              form={form}
              name="basic"
              // style={{ maxWidth: 600, margin: '0 auto' }}
              onFinish={updateInfoUser}
              autoComplete="off"
            >
              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email không được để trống!" },
                ]}
              >
                <Input defaultValue={profile.email} />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label="Tên hiển thị"
                name="fullName"
                rules={[
                  { required: true, message: "Tên không được để trống!" },
                ]}
              >
                <Input value={profile.fullName} />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label="Số điện thoại"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Số điện thoại không được để trống!",
                  },
                ]}
              >
                <Input value={profile.phone} />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label="Địa chỉ"
                name="address"
              >
                <TextArea />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">Cập nhật</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      ),
    },
    {
      key: "2",
      label: "Đổi mật khẩu",
      children: (
        <Row gutter={[20, 20]}>
          <Col span={12}>
            <Form
              form={form2}
              name="basic"
              onFinish={handleChangePassword}
              autoComplete="off"
            >
              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label="Mật khẩu hiện tại"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Mật khẩu hiện tại không được để trống!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                labelCol={{ span: 24 }} //whole column
                label="Mật khẩu mới"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Mật khẩu mới không được để trống!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button htmlType="submit">Cập nhật</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      ),
    },
  ];
  return (
    <div className="container p-10 my-12 border border-gray-100">
      <span>Profile</span>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default Profile;
