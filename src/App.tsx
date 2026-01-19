import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import HomePage from './pages/HomePage'
import BrowsePage from './pages/BrowsePage'
import ContentDetailPage from './pages/ContentDetailPage'
import ReaderPage from './pages/ReaderPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <Helmet>
        <title>Blue Veil Studios | Stories, Manga & Webtoons</title>
        <meta
          name="description"
          content="Discover captivating short stories, manga, and webtoons from Blue Veil Studios. Immerse yourself in worlds of fantasy, adventure, and wonder."
        />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/read/:slug" element={<ContentDetailPage />} />
        <Route path="/read/:slug/:chapter" element={<ReaderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
