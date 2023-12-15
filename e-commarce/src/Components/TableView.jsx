import React, { useState } from "react";
import { Modal } from "antd";
import CategoryInput from "./Layouts/Forms/CategoryInput";
import { toast } from "react-hot-toast";
import axios from "axios";
import {
  api_endpoint,
  updateCategory,
} from "../API_ENDPOINTS/API_endPoints";
import { DeleteCategoryById } from "../Utiles/api_services";

const TableView = ({ categories }) => {
  const [show, setshow] = useState(false);
  const [deleteModal, setdeleteModal] = useState(false);
  const [selected, setselected] = useState(null);
  const [updatedName, setupdatedName] = useState("");
  const DeleteCategory = async (id) => {
    try {
      await DeleteCategoryById(id).then((resp) => {
        if (resp.data.success) {
          toast.success(resp.data.message);
        } else {
          toast.error(resp.data.message);
        }
      });
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  const updatedCategory = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${api_endpoint}${updateCategory}/${selected._id}`,
        { name: updatedName }
      );
      if (data.success) {
        toast.success(data.message);
        setupdatedName("");
        setselected(null);
        setshow(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };
  return (
    <div className="table-responsive-md">
      <table className="table table-bordered p-2">
        <thead>
          <tr>
            <th scope="col">Serial No</th>
            <th scope="col">Category Name</th>
            <th scope="col">Operation</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr key={category._id}>
                <td>{index + 1}</td>
                <td>{category.name}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() => {
                      setshow(true);
                      setupdatedName(category.name);
                      setselected(category);
                    }}
                  >
                    <i className="text-primary mx-1 fa-solid fa-eye"></i>
                  </button>
                  <button
                    className="btn"
                    onClick={() => {
                      setdeleteModal(true);
                    }}
                  >
                    <i className="text-danger mx-1 fa-solid fa-trash"></i>
                  </button>
                  <Modal
                    title="Delete Category"
                    open={deleteModal}
                    onOk={() => {
                      DeleteCategory(category._id);
                      setdeleteModal(false);
                    }}
                    onCancel={() => setdeleteModal(false)}
                  >
                    <p>Do you want to delete category</p>
                  </Modal>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal
        title="Edit Category"
        onCancel={() => setshow(false)}
        footer={null}
        open={show}
      >
        <CategoryInput
          handleSubmitfun={updatedCategory}
          value={updatedName}
          setValue={setupdatedName}
          InputButtonText={"Update Category"}
          placeholder="Enter Name to Update existing Category"
        />
      </Modal>
    </div>
  );
};

export default TableView;
