import App from "./App";
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
  return {
    isLogined: state.auth.success
  }
}

const AppContainer = ({ isLogined }) => {
  console.log(isLogined)
  return (
    <App isLogined={isLogined}>
    </App>
  );
};

export default connect(mapStateToProps)(AppContainer);
