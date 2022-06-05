import { connect } from "react-redux";
import Navig from "./Nav";

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}

const NavContainer = connect(mapStateToProps)(Navig)

export default NavContainer;
