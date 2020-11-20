import { createStore } from 'redux';
import { accountReducer} from './reducers';

const store = createStore(accountReducer);
export default store; 