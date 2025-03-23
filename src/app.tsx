import { BrowserRouter, Navigate, Route, Routes, Session } from 'react-router';
import MyPage from './components/pages/MyPage';
import ReviewPage from './components/pages/ReviewPage';
import PlacePage from './components/pages/PlacePage';
import ExhibitionPage from './components/pages/ExhibitionPage';
import Layout from './layout/Layout';
import EditProfilePage from './components/pages/EditProfilePage';
import WriteReviewPage from './components/pages/WriteReviewPage';
import LoginPage from './components/pages/LoginPage';
import { useEffect, useState } from 'react';
import supabase from './lib/supabase';

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    void supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session as unknown as Session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session as unknown as Session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {session ? (
          <Route path="*" element={<Navigate to="/exhibition" />} />
        ) : (
          <Route path="login" element={<LoginPage />} />
        )}
        {session ? (
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
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
