import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '86b569c9a2msh44c2a0f39251d33p1f11a8jsndb5f16e5e5a3',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    })
    return data;
}