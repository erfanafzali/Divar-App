import api from "../configs/api";

const getProfile = async () => {
  try {
    const res = await api.get("user/whoami");
    return res || false;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getPost = () => api.get("post/my");

const getAllPost = () => api.get("");

const deletePost = (id) => api.delete(`post/delete/${id}`);

export { getProfile, getPost, deletePost, getAllPost };
