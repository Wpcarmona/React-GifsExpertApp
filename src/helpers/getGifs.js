export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=owZ9Dij5Ob99IQu3tUsObnbs9E7XNE47&q=${category}&limit=20`;
    const res = await fetch(url)
    const { data } = await res.json();

    const gifs = data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.downsized_medium.url
    }));
    return gifs;
}