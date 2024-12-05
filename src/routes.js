import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './pages/mainscreen/mainscreen';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Dashboard from './pages/dashboard/dashboard';
import MyCourse from './pages/mycourse/mycourse';
import Chat from './pages/chat/chat';
import EditProfile from './pages/editprofile/editprofile';
import CoinExchange from './pages/coinexchange/coinexchange';
import CreateAds from './pages/createads/createads';
import Notifications from './pages/notifications/notifications';
import HelpCenter from './pages/helpcenter/helpcenter';

function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainScreen />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/my-course" element={<MyCourse />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/coin-exchange" element={<CoinExchange />} />
                <Route path="/create-ads" element={<CreateAds />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/help-center" element={<HelpCenter />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;
