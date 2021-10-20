import axios from 'axios';

const API_KEY = '23121091-79cfae32e8a9d261b4a6138dc';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const fetchPictures = async (query, page = 1) => {
    try {
        const {
            data: { hits },
        } = await axios.get(
            `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
        );
        return hits;
    } catch (error) {
        console.log(error.message);
    }
};

export { fetchPictures };
// https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12
