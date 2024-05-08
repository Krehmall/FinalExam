import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Root from "./pages/root";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import ChooseParkingPage from "./pages/choose-parking";
import ActiveParkingPage from "./pages/active-parking";
import HistoryPage from "./pages/history";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<LoginPage />} />
      <Route path="signup" element={<RegisterPage />} />
      <Route path="choose-parking" element={<ChooseParkingPage />} />
      <Route path="active-parking" element={<ActiveParkingPage />} />
      <Route path="history" element={<HistoryPage />} />
    </Route>
  )
);

export default router;
