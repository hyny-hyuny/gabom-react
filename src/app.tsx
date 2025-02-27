import { BrowserRouter, Route, Routes } from 'react-router';
import MyPage from './components/pages/MyPage';
import ReviewPage from './components/pages/ReviewPage';
import PlacePage from './components/pages/PlacePage';
import ExhibitionPage from './components/pages/ExhibitionPage';
import Layout from './layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="review" element={<ReviewPage />} />
          <Route path="place" element={<PlacePage />} />
          <Route path="exhibition" element={<ExhibitionPage />} />
          <Route path="my" element={<MyPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
