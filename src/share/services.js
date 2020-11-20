import fetcher from './fetch';

export const getPhotosRecords =async (params='_start=0&_limit=5') => {

    const myData = await fetcher(params);

    return myData.json();
};

