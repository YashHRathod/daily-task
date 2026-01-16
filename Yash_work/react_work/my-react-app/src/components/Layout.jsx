const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>My App</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
