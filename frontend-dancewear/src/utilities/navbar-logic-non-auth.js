import MainNavigation from "../components/Navigation/MainNavigation/MainNavigation";
import AuthenticationService from "../services/AuthenticationService";

const NavbarLogicNonAuth = () => {
  const currentUser = AuthenticationService.getCurrentUser();
  console.log(currentUser);

  return (
    <>
      <MainNavigation />
    </>
  );
};

export default NavbarLogicNonAuth;
