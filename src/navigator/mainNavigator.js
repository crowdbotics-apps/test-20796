import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile114680Navigator from '../features/UserProfile114680/navigator';
import Settings114679Navigator from '../features/Settings114679/navigator';
import Settings114677Navigator from '../features/Settings114677/navigator';
import SignIn2114675Navigator from '../features/SignIn2114675/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile114680: { screen: UserProfile114680Navigator },
Settings114679: { screen: Settings114679Navigator },
Settings114677: { screen: Settings114677Navigator },
SignIn2114675: { screen: SignIn2114675Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
