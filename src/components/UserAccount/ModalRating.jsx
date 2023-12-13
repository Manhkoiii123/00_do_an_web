/* eslint-disable react/prop-types */
import { Form, Modal, Rate, Space } from "antd";
import { useForm } from "antd/es/form/Form";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
import Button from "../Button";

const ModalRating = ({ showModalRating, setShowModalRating }) => {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  const [form] = useForm();
  const onFinish = (values) => {
    console.log(values);
  };
  const [value, setValue] = useState(3);
  const [valueFeedback, setValueFeedback] = useState("");
  return (
    <Modal
      title="Rating"
      open={showModalRating}
      maskClosable={false}
      footer={() => <></>}
      onOk={() => setShowModalRating(false)}
      onCancel={() => setShowModalRating(false)}
    >
      <Form onFinish={onFinish} form={form}>
        <Form.Item name="rate" label="Rating" labelCol={{ span: 24 }}>
          <Space>
            <Rate tooltips={desc} onChange={setValue} value={value} />
            {value ? <span>{desc[value - 1]}</span> : ""}
          </Space>
        </Form.Item>
        <Form.Item name="feedback" label="Feedback" labelCol={{ span: 24 }}>
          <TextArea
            value={valueFeedback}
            onChange={(e) => setValueFeedback(e.target.value)}
            placeholder="Enter your feedback"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item
        >
          <Button
            kind="primary"
            onClick={() => form.submit()}
            className="w-full"
          >
            Publish Review
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalRating;
