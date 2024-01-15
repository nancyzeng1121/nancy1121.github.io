import MarkdownFile from "../components/MarkdownFile";
import axios from "axios";

export  const getFile = async () => {
  const arr: any = []
  for (const v of Object.keys(MarkdownFile)) {
    const url = `${window.origin}${MarkdownFile[v]}`
    const response =  await axios.get(url)
    const res = response.data
    arr.push(res)
  }
  return arr
}
