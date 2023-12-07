import './App.css'
import { useLoadingLogo } from './custom-hooks/useLoadingLogo.js'
import { Suspense, lazy, useEffect } from 'react'
import { Provider } from './contexts/useLanguage.jsx'
import { SetGlobalStyles } from './assets/scripts/SetGlobalStyles'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/not-found/PageNotFound.jsx'
import { Resume } from './components/resume/Resume.jsx'
const Loading = lazy(() => import('./pages/loading/Loading.jsx'))
const Main = lazy(() => import('./pages/main/Main.jsx'))

function App () {
  const { loaded } = useLoadingLogo()

  useEffect(() => {
    SetGlobalStyles()
  }, [])

  return (
    <>
      <Provider>
        <Suspense>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={loaded ? <Main /> : <Loading />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='*' element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </Provider>
    </>
  )
}

export default App
