import { UPDATE_USER } from './actionNames';
import { RESET_WHOLE_STORE } from '../actionNames';

const getInitialStore = () => ({
  user: null,
});

export default (store = getInitialStore(), { type, data }) => {
  switch (type) {
    case RESET_WHOLE_STORE:
      return getInitialStore();

    case UPDATE_USER:
      return {
        ...store,
        user: data,
      };

    default:
      return store;
  }
};
