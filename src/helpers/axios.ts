import axios from "axios";
import { productsURL } from "../store/products";

// 싱글톤 패턴으로 axios 인스터스를 생성
const api = axios.create({
  baseURL: productsURL,
});

const GetApi = {
  getProductsItem: (payload: any) => api.get(`/${payload}`),
}

export default GetApi;