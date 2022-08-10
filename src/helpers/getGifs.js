export const getGifs = async (category) => {
     const url = `https://api.giphy.com/v1/gifs/search?api_key=nj5NDHdQSaXD0HlD73mbrFyi4PhnlOyk&q=${category}&limit=10&offset=0&rating=G&lang=en&limit=10`;
     const resp = await fetch(url);
     const { data } = await resp.json();
     const gifs = data.map((img) => ({
          id: img.id,
          title: img.title,
          url: img.images.downsized_medium.url,
     }));
     return gifs;
};