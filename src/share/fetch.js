const eventsApi = 'http://jsonplaceholder.typicode.com/photos';

export default (params, options = {}) => {

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        },
        ...options
    };

    const apiResponse = fetch(`${eventsApi}/${params}`, headers)
        .then(resp => resp);

    return apiResponse;
};