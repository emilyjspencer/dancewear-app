const Header = () => {
    return (
        <nav className="">
    <div className="container-fluid">
      <span className="navbar-brand">Dancewear</span>
      <button className="navbar-toggler" type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNavDropdown"
      aria-controls='navbarNavDropdown'
      aria-expanded='false'
      aria-label='Toggle Navigation'>

      <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="products">Search Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/dancewear">Dancewear</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="shoes">Danceshoes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/costumes">Costumes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/accessories">Accessories</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/gymnastics">Gymnastics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/sale">Clearance</a>
        </li>
      </ul>
      <ul className="">
        <li className="">
          <a className="" type="button" href="/login">Log in</a>
        </li>
      </ul>
      </div>
    </div>
    </nav>
        
    )
}

export default Header;