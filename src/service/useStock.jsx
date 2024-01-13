import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, fetchStart } from "../features/authSlice";
import useAxios from "./useAxios";
import { getStockSucces } from "../features/stockSlice";
import { toastError, toastSuccess } from "../helper/ToastNotify";

const useStock = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStock = async (url = "firms") => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken(`/${url}`);
      const apiData = data.data;
      dispatch(getStockSucces(apiData));
    } catch (error) {
      dispatch(fetchFail());
      toastError(`Could not load ${url} information`)
    }
  };
  const deleteStock = async (url = "firms",id) => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken(`/${url}/${id}`);
      const apiData = data.data;
      getStock(url)
    } catch (error) {
      dispatch(fetchFail());
      toastError(`Could not delete ${url} information`)
    }
  };
//   const postStock = async (url = "firms",id) => {

//     dispatch(fetchStart());

//     try {
//       const { data } = await axiosWithToken(`/${url}/${id}`);
//       toastSuccess()
//       getStock(url)
//     } catch (error) {
//       dispatch(fetchFail());
//       toastError(`Could not delete ${url} information`)
//     }
//   };


  return { getStock ,deleteStock, postStock};
};

export default useStock;
