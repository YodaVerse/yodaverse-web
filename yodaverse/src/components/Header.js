import "./Header.css";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
          <span class="navbar-brand">Navbar</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <span class="nav-link active" aria-current="page">
                  Home
                </span>
              </li>
              <li class="nav-item">
                <span class="nav-link">Link</span>
              </li>
              <li class="nav-item dropdown">
                <span
                  class="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </span>
                <ul class="dropdown-menu">
                  <li>
                    <span class="dropdown-item" href="#">
                      Action
                    </span>
                  </li>
                  <li>
                    <span class="dropdown-item" href="#">
                      Another action
                    </span>
                  </li>
                  <li>
                    <hr class="dropdown-divider"></hr>
                  </li>
                  <li>
                    <span class="dropdown-item" href="#">
                      Something else here
                    </span>
                  </li>
                </ul>
              </li>
            </ul>
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
