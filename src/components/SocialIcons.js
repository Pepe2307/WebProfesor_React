const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="https://www.instagram.com/munisanmiguel/" target="_blank">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Michael Yeates' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.facebook.com/MuniSanMiguelBA" target="_blank">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Michael Yeates' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
