
import MainNavigationAdmin from '../components/Navigation/MainNavigation/MainNavigationAdmin';
import MainNavigation from '../components/Navigation/MainNavigation/MainNavigation';
import MainNavigationDanceTeacher from '../components/Navigation/MainNavigation/MainNavigationDanceTeacher';
import MainNavigationUser from '../components/Navigation/MainNavigation/MainNavigationUser';
import AuthenticationService from "../services/AuthenticationService";

const NavbarLogic = () => {


    const currentUser = AuthenticationService.getCurrentUser();
    console.log(currentUser)
 

    return (
        <>
   
        <MainNavigation />
         

{currentUser && currentUser.user.authorities[0].authority === 'DANCE_TEACHER' && 
        <MainNavigationDanceTeacher />
      }

      {currentUser && currentUser.user.authorities[0].authority === 'USER' &&
      <MainNavigationUser />
      }

      {currentUser && currentUser.user.authorities[0].authority === 'ADMIN' && 
      <MainNavigationAdmin />
      }
    
    </>
    )
    }

export default NavbarLogic;