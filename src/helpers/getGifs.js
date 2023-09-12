
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=1dSIxQ2j1XK8L6VyMb63cOeIthq9Vz6g&q=${category}&limit=10`

    const resp = await fetch(url)
    const { data } = await resp.json()

    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url:img.images.downsized_medium.url

        }

    })
    
    return gifs;
}
