import { UPDATE_USER, TOGGLE_LOADER } from './actionNames';

export const updateUser = (data) => ({ type: UPDATE_USER, data });
export const toggleLoader = (data) => ({ type: TOGGLE_LOADER, data });

export const authorize = () => {
  return async (dispatch) => {
    try {
      dispatch(toggleLoader(true));
      // Request
      const user = {};

      dispatch(updateUser(user));
    } catch (err) {
      console.error(err);
      dispatch(updateUser(null));
    } finally {
      dispatch(toggleLoader(false));
    }
  };
};
