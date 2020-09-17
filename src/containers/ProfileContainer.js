import { connect } from 'react-redux';
import Profile from '../pages/Profile/Profile';

const mapStateToProps = (state) => {
  return {
    user: state.main.user,
  };
};

const ProfileContainer = connect(mapStateToProps)(Profile);

export default ProfileContainer;
