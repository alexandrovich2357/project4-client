import axios from "axios";

class Service {
  constructor() {
    this.service = axios.create({
      baseURL: `http://localhost:4000/fileup`,
      // withCredentials: true
    });
  }
  handleUpload = async (theFile) => {
    console.log("file in service: ", theFile);
    try {
      const res = await this.service.post("/upload", theFile);
      return res.data;
    } catch (error) {
      // console.log(error);
    }
  };

  saveNewImage = async (newImage) => {
    console.log("new thing is: ", newImage);

    try {
      const res = await this.service.post("/images/create", newImage);
      return res.data;
    } catch (error) {
      // console.log(error);
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
