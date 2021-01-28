function fetchImage(name, page = 1) {
    const KEY = '19139373-51a46ea3c9fa156df343c1c67';
    const BASE_URL = 'https://pixabay.com/api/'

    return fetch(
         `${BASE_URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    ).then(response => {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(new Error('Invalid request'));
    })
}

const imagesAPI = {
    fetchImage,
};

export default imagesAPI;