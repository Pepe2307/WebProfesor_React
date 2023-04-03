import MuniLogo from "../images/msm.png"
import NavLinks from "./NavLinks";
import logo from "../images/logo.svg";

const Header = () => {
    const styles = {
        MuniLogo: {
            /* height: "1vw", */
          },
    };
  return (
    <header className="header">
      <img className="logo" src={MuniLogo} alt="logo" style={styles.MuniLogo}/>
      <NavLinks />
    </header>
  );
};

export default Header;
