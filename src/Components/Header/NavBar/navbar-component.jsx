import './navbar-component.scss';

function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbarDetail">
            <div class="container-fluid">
                <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown border border-transparent">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Television
                            </a>
                            <ul class="dropdown-menu dropdownDetail pe-5" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">LG</a></li>
                                <li><a class="dropdown-item" href="#">Samsung</a></li>
                                <li><a class="dropdown-item" href="#">Sony</a></li>
                                <li><a class="dropdown-item" href="#">TCL</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown ps-5">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Mobile Phone
                            </a>
                            <ul class="dropdown-menu dropdownDetail ps-5" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Samsung</a></li>
                                <li><a class="dropdown-item" href="#">Apple</a></li>
                                <li><a class="dropdown-item" href="#">Huawei</a></li>
                                <li><a class="dropdown-item" href="#">LG</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown ps-5">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Desktops
                            </a>
                            <ul class="dropdown-menu dropdownDetail ps-5" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Apple</a></li>
                                <li><a class="dropdown-item" href="#">HP</a></li>
                                <li><a class="dropdown-item" href="#">Dell</a></li>
                                <li><a class="dropdown-item" href="#">ASUS</a></li>
                               
                            </ul>
                        </li>
                        <li class="nav-item dropdown ps-5">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Laptops
                            </a>
                            <ul class="dropdown-menu dropdownDetail ps-5" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Apple</a></li>
                                <li><a class="dropdown-item" href="#">HP</a></li>
                                <li><a class="dropdown-item" href="#">Dell</a></li>
                                <li><a class="dropdown-item" href="#">ASUS</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown ps-5">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accessories
                            </a>
                            <ul class="dropdown-menu dropdownDetail ps-5" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Apple</a></li>
                                <li><a class="dropdown-item" href="#">HP</a></li>
                                <li><a class="dropdown-item" href="#">Longitech</a></li>
                                <li><a class="dropdown-item" href="#">Microsoft</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;