import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header>
      <div className="row mb-4">
        <div className="col-3">
          <div className="logo">
            <h1>LOGO</h1>
          </div>
        </div>
        <div className="col-9">
          <div className="add_top">
            <img src={process.env.PUBLIC_URL + "/add2.png"} alt="" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="nav d-flex bg-primary mb-4">
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/advertise-with-us">Advertise With us</Link>
                </li>
                <li>
                  <Link to="/widget">website widget</Link>
                </li>
                <li>
                  <Link to="/tech-news">Tech news</Link>
                </li>
                <li>
                  <Link to="/contact">Contact us</Link>
                </li>
              </ul>
            </div>
            <div className="searchBar">
              <div className="form-group">
                <input
                  type="text"
                  className="searchBox"
                  placeholder="Search..."
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;