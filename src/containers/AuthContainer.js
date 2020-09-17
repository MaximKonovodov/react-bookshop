import { connect } from 'react-redux';
import { updateUser } from '../store/main/actions';
// import Profile from '../pages/Profile/Profile';
import Auth from '../pages/Auth/Auth';

const mapStateToProps = (state) => {
  return {
    user: updateUser(state.user),
  };
};

const AuthContainer = connect(mapStateToProps)(Auth);

export default AuthContainer;
