import data from './data'
import axios from 'axios';

const ProductionConfiguration = {
  AHVVA_SERVICE_ADDRESS: "https://testyduoconline.com/api",
}

const DevelopmentConfiguration = {
  AHVVA_SERVICE_ADDRESS: "https://testyduoconline.com/api",
}

export const config = process.env.REACT_APP_ENV !== undefined ?
  (process.env.REACT_APP_ENV === "production" ? ProductionConfiguration : DevelopmentConfiguration)
  : (process.env.NODE_ENV === "production" ? ProductionConfiguration : DevelopmentConfiguration);

export const api = axios.create({
  baseURL: config.AHVVA_SERVICE_ADDRESS,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

async function getPosts() {
  console.log(process.env.REACT_APP_ENV)
  return api.get('/display_sub');
  // return Promise.all(data.posts);
}

export default {
  getPosts
}