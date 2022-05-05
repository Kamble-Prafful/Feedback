import { Link } from "react-router-dom";

const Header = ({ bgColor, textColor }) => {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <>
      <header style={headerStyles}>
        <div className="container">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>Feedback UI</h2>
          </Link>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

export default Header;
