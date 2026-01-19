const Layout = ({ children }) => {
  return (
    <div
      style={{
        padding: "20px",
        fontFamily: "Arial",
        background: "#f4f4f4",
        minHeight: "100vh",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
