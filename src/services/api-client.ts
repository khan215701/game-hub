import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "82d4950812f2464096925226bc0fd355",
  },
});
