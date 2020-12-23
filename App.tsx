import 'react-native-gesture-handler'
import React from 'react'
import { UtilityThemeProvider } from 'react-native-design-utility'
//main navigator
import Routes from './src'
//theme
import {theme} from './src/utils/constants/theme'
//context

import { RootStoreProvider } from './src/context/RootStoreContext'
import { rootStore } from './src/stores/RootStore'

const App: React.FC = () => (
  <RootStoreProvider rootStore={rootStore}>
    <UtilityThemeProvider theme={theme}>
      <Routes/>
    </UtilityThemeProvider>
  </RootStoreProvider>
)

export default App
