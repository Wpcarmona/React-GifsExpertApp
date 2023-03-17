import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async() => {
        const dataImages = await getGifs(category);
        setimages(dataImages);
        setIsLoading(false)
    }

    useEffect(() => {
        getImages();
    }, [])


  return {
    images,
    isLoading
  }

}
