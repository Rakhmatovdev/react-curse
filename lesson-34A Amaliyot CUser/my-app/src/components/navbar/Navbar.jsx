import "./Navbar.css";
const Navbar = ({userLength}) => {
  return (
    <div className="navbar">
      <div className="container navbar-container">
        <h1 className="navbar-logo">JR</h1>
        <h3 className="navbar-counter">{userLength>0?"You have: "+userLength:"No users :("}</h3>
      </div>
    </div>
  );
};

export default Navbar;
