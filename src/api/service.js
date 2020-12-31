import axios from "axios";

class Service {

  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API_URI+'/api',
      //  withCredentials: true
    });
  }

  handleUpload = async (theFile) => {
    console.log("file in service: ", theFile);
    try {
      const res = await this.service.post("/upload", theFile);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  saveNewImage = async (aNewImage) => {
    console.log("new thing is: ", aNewImage);

    try {
      const res = await this.service.post("/images/create", aNewImage);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  

  getMovies = async () => {
    try {
      const res = await this.service.get("/movies");
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const axiosRequestFunctions = new Service();

export default axiosRequestFunctions;
