import Navbar from "./NavBar";
import { useDispatch } from "react-redux";
import {
  setJWTToken,
  setFirstName,
  setLastName,
  setUserId,
  setIsUserLoggedIn,
  setIsUserFreelancer,
} from "../../../redux/authSlice";
import { useEffect } from "react";

export default function Header(props) {
  const { jwt, loggedInUserInfo, isUserFreelancer } = props;
  // console.log("logged info", loggedInUserInfo.idusers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (loggedInUserInfo) {
      dispatch(setJWTToken(jwt)); // store jwt in redux store
      dispatch(setIsUserFreelancer(isUserFreelancer));
      loggedInUserInfo && dispatch(setUserId(loggedInUserInfo.idusers)); //if loggedInUserInfo is not null then set userid in redux store
      loggedInUserInfo && dispatch(setFirstName(loggedInUserInfo.first_name)); //if loggedInUserInfo is not null then set userid in redux store
    }
  }, [loggedInUserInfo]);

  // TODO: set other user informations on authSlice( Redux State)

  return (
    <header className="sticky top-0 z-50">
      <Navbar {...props} />
    </header>
  );
}
