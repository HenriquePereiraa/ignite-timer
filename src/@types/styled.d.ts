import 'styled-components'
import { defaultTheme } from '../styles/theme/default'

type ThemeType = typeof defaultTheme

// declare module => está criando uma tipagem para o modulo styled-components do npm
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
