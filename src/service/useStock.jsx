import { useDispatch } from "react-redux";
import {
  fetchFail,
  getStockSucces,
  getPromiseSuccess,
  fetchStart,
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastError, toastSuccess } from "../helper/ToastNotify";

const useStock = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStock = async (url = "firms") => {
    dispatch(fetchStart());

    try {
      const { data } = await axiosWithToken(`/${url}/`);
      const apiData = data.data;
      dispatch(getStockSucces({ apiData, url }));
    } catch (error) {
      dispatch(fetchFail());
      toastError(`Could not load ${url} information`);
    }
  };

  const getPromise = async (endpoints) => {
    dispatch(fetchStart());
    try {
      const responses = await Promise.all(
        endpoints.map((endpoint) => axiosWithToken(endpoint))
      );
      const data = responses.map((response) => response?.data?.data);
      dispatch(getPromiseSuccess({ data, endpoints }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const deleteStock = async (url = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/${url}/${id}/`);
      toastSuccess(`${url} information has been deleted`);
      getStock(url);
    } catch (error) {
      dispatch(fetchFail());
      toastError(`Could not delete ${url} information`);
    }
  };

  const postStock = async (url = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`, info);
      toastSuccess(`${url} information has been added`);
      getStock(url);
    } catch (error) {
      dispatch(fetchFail());
      toastError(`${url} information could not be added`);
    }
  };

  const putStock = async (url = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/${url}/${info._id}/`, info);
      toastSuccess(`${url} information has been edited`);
      getStock(url);
    } catch (error) {
      dispatch(fetchFail());
      toastError(`${url} information could not be edited`);
    }
  };

  const searchStock = async (url = "firms", value) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}/?search[name]=${value}`);
      const apiData = data.data;
      dispatch(getStockSucces({ apiData, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  return {
    getStock,
    deleteStock,
    postStock,
    putStock,
    searchStock,
    getPromise,
  };
};

export default useStock;
