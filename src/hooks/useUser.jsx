import axios from "axios";
import URL from "../environment";

export default function useUser() {
  const url = `${URL}/user`;

  const login = async (body) => {
    try {
      const res = await axios.patch(`${url}/login`, body);
      return res.data;
    } catch (err) {
      const { response } = err;
      const { data } = response;
      throw data;
    }
  };

  return { login };
}
