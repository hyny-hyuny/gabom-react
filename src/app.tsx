import { BrowserRouter, Route, Routes } from 'react-router';
import MyPage from './components/pages/MyPage';
import ReviewPage from './components/pages/ReviewPage';
import PlacePage from './components/pages/PlacePage';
import ExhibitionPage from './components/pages/ExhibitionPage';
import Layout from './layout/Layout';
import EditProfilePage from './components/pages/EditProfilePage';
import WriteReviewPage from './components/pages/WriteReviewPage';
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/" element={<Layout />}>
          <Route path="review">
            <Route index element={<ReviewPage />} />
            <Route path="write" element={<WriteReviewPage />} />
          </Route>
          <Route path="place" element={<PlacePage />} />
          <Route path="exhibition" element={<ExhibitionPage />} />
          <Route path="my">
            <Route index element={<MyPage />} />
            <Route path="edit" element={<EditProfilePage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
