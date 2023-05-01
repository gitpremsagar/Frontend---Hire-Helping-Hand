import Navbar from "./NavBar";
import { useDispatch } from "react-redux";
import {
  setJWTToken,
  setFirstName,
  setLastName,
  setUserId,
  setIsUserLoggedIn,
} from "../../../redux/authSlice";

export default function Header(props) {
  const { jwt, loggedInUserInfo } = props;
  const dispatch = useDispatch();
  dispatch(setJWTToken(jwt)); // store jwt in redux store
  // TODO: set other user informations on authSlice( Redux State)

  return (
    <header className="sticky top-0 z-50">
      <Navbar {...props} />
    </header>
  );
}
