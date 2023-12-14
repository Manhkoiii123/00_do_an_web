/* eslint-disable no-unused-vars */
import { EditOutlined } from "@ant-design/icons";
import { Badge, Button, Input, Popconfirm, Space, Table } from "antd";
import { useEffect, useRef, useState } from "react";
import { MdDelete } from "react-icons/md";
import CreateCategory from "./CreateCategory";
import CategoryDetail from "./CategoryDetail";
import { SearchOutlined } from "@ant-design/icons";
import { callGetHomeProduct } from "../../../services/productApi";
import { callCategoryDetail } from "../../../services/adminApi";

const CategoriesPage = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchHomeData = async () => {
    const res = await callGetHomeProduct();
    if (res.status === 200) {
      setCategories(res.data.productCategorys);
      const tmp = res.data.productCategorys;
      const a = tmp.filter((item) => item.parentId === "");
      setData(a);
    }
  };
  useEffect(() => {
    fetchHomeData();
  }, []);

  const [searchedColumn, setSearchedColumn] = useState("");
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };
  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: "block",
          }}
        />
        <Space>
          <Button
            type="default"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? "#1677ff" : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
  });
  const [openDetail, setOpenDetail] = useState(false);
  const [dataDetail, setDataDetail] = useState(null);
  // console.log(dataDetail);
  const expandedRowRender = (record, index, indent, expanded) => {
    const childrenData = categories.filter((item) => item.parentId !== "");
    const id = record._id;
    const filterChildrendata = childrenData.filter(
      (item) => item.parentId === id
    );
    const columnsChildren = [
      {
        title: "Title",
        dataIndex: "title",
        key: "title",
        render: (text, record, index) => {
          return (
            <a
              onClick={async () => {
                const res = await callCategoryDetail(record._id);
                setDataDetail(res.data.productCategory);
                setOpenDetail(true);
              }}
            >
              {record.title}
            </a>
          );
        },
      },
      {
        title: "Description",
        dataIndex: "description",
        key: "description",
        className: "w-[600px]",
      },
      {
        title: "Status",
        key: "status",
        render: () => <Badge status="success" text="Finished" />,
      },
      {
        title: "Action",
        render: (text, record, index) => {
          return (
            <div style={{ display: "flex", gap: "5px" }}>
              <Popconfirm
                placement="leftTop"
                title="Xác nhận xóa category"
                description="Bạn có chắc chắn muốn xóa category ? "
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
                <EditOutlined />
              </Button>
            </div>
          );
        },
      },
    ];

    return (
      <Table
        columns={columnsChildren}
        dataSource={filterChildrendata}
        pagination={false}
      />
    );
  };
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, record, index) => {
        return (
          <a
            onClick={async () => {
              const res = await callCategoryDetail(record._id);
              setDataDetail(res.data.productCategory);
              setOpenDetail(true);
              // setDataDetail(record);
            }}
          >
            {record.title}
          </a>
        );
      },
      ...getColumnSearchProps("title"),
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      render: (text, record, index) => {
        return (
          <div style={{ display: "flex", gap: "5px" }}>
            <Popconfirm
              placement="leftTop"
              title="Xác nhận xóa category này"
              description="Bạn có chắc chắn muốn xóa category này ? "
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
              <EditOutlined />
            </Button>
          </div>
        );
      },
    },
  ];
  const [openCreateCategory, setOpenCreateCategory] = useState(false);
  return (
    <>
      <div className="p-4 border border-gray-200 rounded-lg">
        <div className="flex items-center justify-between mb-10">
          <span className="uppercase">categories</span>
          <Button onClick={() => setOpenCreateCategory(true)}>
            Add New Category
          </Button>
        </div>
        <Table
          columns={columns}
          expandable={{
            expandedRowRender,
            defaultExpandAllRows: true,
          }}
          dataSource={data}
        />
        <CreateCategory
          openCreateCategory={openCreateCategory}
          setOpenCreateCategory={setOpenCreateCategory}
        />
      </div>
      <CategoryDetail
        dataDetail={dataDetail}
        setDataDetail={setDataDetail}
        openDetail={openDetail}
        setOpenDetail={setOpenDetail}
      ></CategoryDetail>
    </>
  );
};

export default CategoriesPage;
