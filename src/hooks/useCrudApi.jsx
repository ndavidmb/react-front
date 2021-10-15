import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../App";
import URL from "../environment";
const useCrudApi = (name) => {
  const { toast, setToast } = useContext(AppContext);
  const url = `${URL}/${name}`;

  const getAll = async () => {
    try {
      const { data } = await axios.get(url);
      if (data.error) {
        throw data.status;
      }
      return data;
    } catch (err) {
      if (typeof err === "string") {
        throw { status: err, type: "warning" };
      }
      const {
        response: { data },
      } = err;
      throw { ...data, type: "danger" };
    }
  };

  const create = async (obj) => {
    try {
      const { data } = await axios.post(url, obj);
      setToast({
        ...toast,
        visible: true,
        message: data.status,
        type: "success",
      });
      return data;
    } catch (err) {
      const {
        response: { data },
      } = err;
      console.log(data);

      setToast({
        ...toast,
        visible: true,
        message: data?.error ? data.error : data,
        type: "danger",
      });
      return data;
    }
  };

  const update = async (obj) => {
    try {
      const { data } = await axios.put(`${url}/${obj.id}`, obj);
      setToast({
        ...toast,
        visible: true,
        message: data.status,
        type: "success",
      });
      return data;
    } catch (err) {
      const {
        response: { data },
      } = err;
      setToast({
        ...toast,
        visible: true,
        message: data,
        type: "danger",
      });
      return data;
    }
  };

  const remove = async (id) => {
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      setToast({
        ...toast,
        visible: true,
        message: data.status,
        type: "success",
      });
      return data;
    } catch (err) {
      // const {
      //   response: { data },
      // } = err;
      // setToast({
      //   ...toast,
      //   visible: true,
      //   message: data,
      //   type: "danger",
      // });
      return err;
    }
  };

  return { getAll, create, update, remove };
};

export default useCrudApi;
