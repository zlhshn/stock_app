import { toastError, toastSuccess } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import useAxios from "./useAxios";

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosPublic, axiosWithToken } = useAxios();

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/auth/login",userInfo);
      dispatch(loginSuccess(data));
      toastSuccess("Login is successful.");
      navigate("/dashboard");
    } catch (error) {
      dispatch(fetchFail());
      toastError("The login process failed.");
      console.log(error);
    }
  };

  return { login };
};

export default useAuth;
