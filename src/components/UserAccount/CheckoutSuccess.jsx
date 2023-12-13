import { Button, Result } from "antd";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <div className="container mx-auto">
      <Result
        status="success"
        title="Đặt hàng thành công !"
        subTitle="Bạn đã đặt hàng thành công. Cảm ơn bạn đã tin tưởng "
        extra={[
          <Button key="console">Go To Order History</Button>,
          <Link to="/" key="home">
            <Button>Home</Button>,
          </Link>,
        ]}
      />
    </div>
  );
};

export default CheckoutSuccess;
