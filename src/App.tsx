import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from '../src/components/Header';
import { Main } from '../src/components/Main';

import './App.css';

function App() {

  return (
    <>
      <Header />
      <Main />
      <SpeedInsights />
    </>
  )
}

export default App
