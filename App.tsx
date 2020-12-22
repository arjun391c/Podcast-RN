import 'react-native-gesture-handler'
import React from 'react'
import { UtilityThemeProvider } from 'react-native-design-utility'
//main navigator
import Routes from './src'
//theme
import {theme} from './src/utils/constants/theme'

const App: React.FC = () => (
  <UtilityThemeProvider theme={theme}>
    <Routes/>
  </UtilityThemeProvider>
)

export default App
