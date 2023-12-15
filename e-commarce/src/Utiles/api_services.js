import axios from "axios";
import {
  api_endpoint,
  getAllCategories,
  deleteCategory,
} from "../API_ENDPOINTS/API_endPoints";
export async function FetchAllCategories() {
  try {
    return await axios.get(`${api_endpoint}${getAllCategories}`);
  } catch (error) {
    console.log(error);
  }
}
export async function DeleteCategoryById(id) {
  try {
    return await axios.delete(`${api_endpoint}${deleteCategory}/${id}`);
  } catch (error) {
    console.log(error);
  }
}
