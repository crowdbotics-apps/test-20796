import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings114706Navigator from '../features/Settings114706/navigator';
import UserProfile114699Navigator from '../features/UserProfile114699/navigator';
import Settings114698Navigator from '../features/Settings114698/navigator';
import Settings114696Navigator from '../features/Settings114696/navigator';
import SignIn2114694Navigator from '../features/SignIn2114694/navigator';
import Settings114687Navigator from '../features/Settings114687/navigator';
import UserProfile114680Navigator from '../features/UserProfile114680/navigator';
import Settings114679Navigator from '../features/Settings114679/navigator';
import Settings114677Navigator from '../features/Settings114677/navigator';
import SignIn2114675Navigator from '../features/SignIn2114675/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings114706: { screen: Settings114706Navigator },
UserProfile114699: { screen: UserProfile114699Navigator },
Settings114698: { screen: Settings114698Navigator },
Settings114696: { screen: Settings114696Navigator },
SignIn2114694: { screen: SignIn2114694Navigator },
Settings114687: { screen: Settings114687Navigator },
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
