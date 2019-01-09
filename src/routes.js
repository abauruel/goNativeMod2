import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Repositories from '~/pages/Repositories';
import Organizations from '~/pages/Organizations';

import { colors } from '~/styles';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Welcome,
      User: createBottomTabNavigator(
        {
          Repositories,
          Organizations,
        },
        {
          tabBarOptions: {
            showBar: true,
            showLabel: false,
            activeTintColor: colors.white,
            inativeTintColor: colors.whiteTransparent,
            style: {
              backgroundColor: colors.secundary,
            },
          },
        },
      ),
    },
    {
      initialRouteName: userLogged ? 'User' : 'Welcome',
    },
  ),
);

export default Routes;
