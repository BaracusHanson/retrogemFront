import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-purple-700 text-base-content text-white">
      <aside>
        <img src={logo} alt="" className="w-42 h-20" />
        <p>
          RETROGEM&#169;
          <br />
          Disponible depuis 2023 &#8482;
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Achat</a>
        <a className="link link-hover">Vente</a>
        <a className="link link-hover">mise en contact</a>
        <a className="link link-hover">collections</a>
      </nav>
      <nav>
        <header className="footer-title">Guide</header>
        <a className="link link-hover">Retrogem</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Nembres</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">thermes d'utilisation</a>
        <a className="link link-hover">Confidentialité</a>
        <a className="link link-hover">Cookies</a>
      </nav>
    </footer>
  );
};

export default Footer;
