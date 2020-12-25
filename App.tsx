import 'react-native-gesture-handler'
import React from 'react'
import { UtilityThemeProvider } from 'react-native-design-utility'
//main navigator
import Routes from './src'
//theme
import {theme} from './src/utils/constants/theme'
//context
import Store from './src/context/store'
import { RootStoreProvider } from './src/context/RootStoreContext'
import { rootStore } from './src/stores/RootStore'

const App: React.FC = () => (
  <Store>
    <RootStoreProvider rootStore={rootStore}>
      <UtilityThemeProvider theme={theme}>
        <Routes/>
      </UtilityThemeProvider>
    </RootStoreProvider>
  </Store>
)

export default App
