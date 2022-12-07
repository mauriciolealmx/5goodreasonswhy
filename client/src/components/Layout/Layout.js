import { Link } from 'react-router-dom';

import './layout.css';

const name = '5 good reasons why';

const Layout = ({ children, home = true }) => {
  return (
    <div className="container">
      <header className="header">
        <div className="headerBanner">
          <Link to="/">{name}</Link>
        </div>
        <h1>{name}</h1>
      </header>
      <main className="main">{children}</main>
      {!home && (
        <div className="backToHome">
          <Link to="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
