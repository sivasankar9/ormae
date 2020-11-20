import {createStore} from 'redux';

const rootReducer = ()=>({name:'siva'})
const store = createStore(rootReducer);

export {store}