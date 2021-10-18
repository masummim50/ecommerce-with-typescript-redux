import axios, { AxiosResponse } from 'axios';
const instance = axios.create({
  baseURL: 'http://localhost:5000'
});
const responseBody =()=> (response:AxiosResponse)=> (response.data);

const requests = {
  get : (url:string)=> instance.get(url).then(responseBody()),
  post : (url:string, body: Object)=> instance.post(url, body).then(responseBody),
  patch : (url:string, body: Object)=> instance.patch(url, body).then(responseBody),
  delete : (url:string)=> instance.delete(url).then(responseBody())
}

export default requests;