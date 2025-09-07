import { useState } from "react";
import axios from "axios";

const baseUrl:string = "localhost:8000"

export default function Home() {
  const [blogdata, setBlogData] = useState();
  const getLatestBlogs = async () => {
    axios.get(`${baseUrl}/api/blogs`)
  };

  return <></>;
}
