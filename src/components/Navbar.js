import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar position-fixed navbar-expand-lg navBar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          getSOP
        </a>
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
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">
                Documents
              </a>
            </li>
          </ul>
          <div className="explore">
            <button className="btn buttonNext">Explore</button>
          </div>
        </div>
      </div>
    </nav>
  );
}