export const api_endpoint = "http://localhost:4040";
export const endpointforRegister = "/auth/register";
export const endpointforLogin = "/auth/Login";
export const dashboard = "/auth/user-dashboard";
export const admin_dashboard = "/auth/admin-dashboard";
export const endPointForForgotPassword = "/auth/forgot-password";

//category
export const createCategory = "/category/create-category";
export const updateCategory = "/category/update-category";
export const getAllCategories = "/category/categories";
export const getSingleCategory = "/category/get-category/:slug";
export const deleteCategory = "/category/delete-category";
//products
export const createProduct="/product/create-products"
export const updateProduct="/product/update-product/:pid"
export const getAllProducts="/product/getAll-products"
export const getSingleProduct="/product/get-product/:slug"
export const deleteSingleProductPhoto="/product/getProduct-photo/:pid"
export const deleteSingleProduct="/product/delete-product/:pid"