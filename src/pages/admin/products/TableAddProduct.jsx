import { Table } from "antd";
const data = [
  {
    key: "1",
    name: "John",
    age: 32,
    address: "New York",
  },
  {
    key: "2",
    name: "Doe",
    age: 28,
    address: "San Francisco",
  },
  {
    key: "3",
    name: "Smith",
    age: 45,
    address: "Los Angeles",
  },
  {
    key: "4",
    name: "Jane",
    age: 36,
    address: "Chicago",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record, index) => {
      const obj = {
        children: text,
        props: {},
      };
      if (index === 0) {
        obj.props.rowSpan = 3;
      }
      if (index === 1) {
        obj.props.rowSpan = 0;
      }

      return obj;
    },
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
    render: (text, record, index) => {
      const obj = {
        children: text,
        props: {},
      };

      // Add rowSpan to the first row of the table
      if (index === 0) {
        obj.props.rowSpan = 3;
      }

      if (index === 1) {
        obj.props.rowSpan = 0;
      }

      return obj;
    },
  },
];
const TableAddProduct = () => <Table dataSource={data} columns={columns} />;
export default TableAddProduct;
