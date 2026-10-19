import { LanguageProvider } from './i18n';
import Header from '../src/components/Header';
import { Main } from '../src/components/Main';

import './App.css';

function App() {

  return (
    <LanguageProvider>
      <Header />
      <Main />
    </LanguageProvider>
  )
}

export default App
