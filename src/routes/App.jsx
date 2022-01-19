import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home.jsx';
import NotFound from '../pages/NotFound';
import EmailSent from '../containers/EmailSent';
import LoginFresh from '../containers/LoginFresh';
import '../styles/global.css';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={ <Home /> } />
                    <Route exact path="/login" element= { <Login />} />
                    <Route exact path="/recovery-password" element={ <RecoveryPassword /> } />
                    <Route exact path="/email-sent" element={ <EmailSent /> } />
                    <Route exact path="/login-fresh" element={ <LoginFresh /> } />
                    <Route exact path="*" element={ <NotFound />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;