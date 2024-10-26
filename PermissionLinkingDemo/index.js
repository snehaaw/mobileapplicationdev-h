/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MainLogin from './src/MainLogin';

AppRegistry.registerComponent(appName, () => MainLogin);
