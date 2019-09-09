import { authHeader } from "../helpers/authHeader";
import { handleResponse } from "../helpers/handleResponse";
import axios from "axios";

const config = {
  //   apiUrl: "https://saverscardapi.azurewebsites.net/api"
  apiUrl: "http://localhost:4000/api"
};

export const fileService = {
  upload,
  download
};

function upload(file) {
  const data = new FormData();
  data.append("file", file);
  return axios
    .post(`${config.apiUrl}/file/upload`, data, {})
    .then(res => {
      // then print response status

      console.log("upload success");
      return res.data.path;
    })
    .catch(err => {
      // then print response status
      console.log("upload fail");
    });
}

function download(filename) {
  axios
    .get(`${config.apiUrl}/file/download`, {
      params: {
        file: filename
      }
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
}
