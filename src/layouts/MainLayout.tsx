import {Link, Outlet } from 'react-router-dom';
import '../styles/MainLayout.css';

const MainLayout = () => {
    return (
        <div className="main-layout">
                <header>
                <nav className="navnav">
                        <Link to="/">Main</Link>
                        <Link to="/favorites">Favorites</Link>
                    </nav>
                </header>
            <main className="main-layout__content">
                <Outlet /> {}
            </main>
            <footer className="main-layout__footer">
                © 2024 Recipe App
            </footer>
        </div>
    );
};

export default MainLayout;