const key = 'mcW717O5ixEbekadzuiSjIhBYm5whdmo';
export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ key }&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({  //retorno un objeto
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) )
    
    return gifs;
}