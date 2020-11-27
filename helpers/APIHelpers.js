import axios from 'axios';
import Cookie from 'universal-cookie';

const cookies = new Cookie();

const API_BASE_URL =
	process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF === 'dev'
		? process.env.NEXT_PUBLIC_DEV_API_BASE_URL
		:  process.env.NEXT_PUBLIC_API_BASE_URL

const instance = axios.create({
  baseURL: API_BASE_URL,
});

console.log(API_BASE_URL);
console.log(process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF)
const useConfig = (config) => {
  const customConfig = config;
  const kathekonToken = cookies.get("kathekonToken");

  if (kathekonToken) {
    customConfig.headers.Authorization = `Bearer ${kathekonToken}`
  }

  return customConfig;
};

instance.interceptors.request.use(useConfig);

const APIHelper = {
  get(endpoint, config = null) {
		return config ? instance.get(endpoint, config) : instance.get(endpoint);
	},

	post(endpoint, data, config = null) {
		return config ? instance.post(endpoint, data, config) : instance.post(endpoint, data);
	},

	patch(endpoint, data) {
		return instance.patch(endpoint, data);
	},

	delete(endpoint, config = null) {
		return config ? instance.delete(endpoint, config) : instance.delete(endpoint);
	},

	put(endpoint, data, config) {
		return config ? instance.put(endpoint, data, config) : instance.put(endpoint, data);
	},
}

export default APIHelper;
