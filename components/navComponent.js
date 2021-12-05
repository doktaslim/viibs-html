class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          color: #e0e0e0;
          font-family: Poppings
        }
        header {
          width: 100%;
          z-index: 100
        }
        .nav-container {
          display: flex;
          align-items: center;
          margin: 0;
          padding: 0px 5px;
          background-color: #1b1b32!important;
          max-width: 100%;
          overflow-x: hidden
        }
        
        nav {
          display: flex;
          align-items: center;
          width: 100%;
          overflow-x: hidden
        }
        .cate_evt {
          display: flex;
          align-items: center;
          margin-left: 20px
        }
        .cate_evt h1 a {
          font-size: 2rem;
          margin-right: 30px
        }
        nav a {
          color: #e0e0e0;
          font-size: 14px;
          margin-left: 5px
        }
        nav a:hover {
          text-decoration: none;
          color: #e0e0e0
        }
        nav #categories, #events {
          margin-right: 20px;
          font-size: 1.2rem
        }
        nav .util {
          float: right;
          width: 70%;
          display: flex;
          align-items: center;
          justify-content: space-between
        }
        nav form {
          display: flex;
          align-items: center;
          color: #000
          width: 200px;
          margin-left: 15px
        }
        nav form input {
          height: 35px;
          width: 300px;
          border: none;
          padding: 5px 10px;
          border-top-right-radius: 10px;
          border-bottom-right-radius: 10px;
          margin-right: 10px;
          outline: none;
          color: #000;
          font-size: 14px;
        }

        #search {
          width: 50px;
          height: 35px;
          border: none;
          border-bottom-left-radius: 10px;
          border-top-left-radius: 10px;
          font-size: 17px;
          padding: 6px;
          margin-right: -2px
        }
        #search .fa {
          color: #000
        }
        .auth_user {
          display: none;
          align-items: center;
          font-size: 17px;
          margin-top: 12px;
        }

        .auth_user i {
          margin: 10px
        }
        .auth_user p {
          margin-left: 20px
        }
        nav button {
          border: none;
          color: #000;
          width: 90px;
          height: 32px;
          font-size: 13px;
          border-radius: 3px;
          margin-left: 10px;
        }
        nav button:hover {
          background: #d4d4d4
        }
        nav #login {
          display: block
        }
        nav .up {
          display: none
        }
        .cate_dropdown {
          display: inline-block;
        }
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #1b1b32;
          min-width: 350px;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 10000;
          padding: 10px;
          top: 43px;
          border-radius: 5px
        }
        .dropdown-content a {
          color: #f1f1f1;
          padding: 8px 8px;
          width: 150px;
          text-decoration: none;
          display: block;
          z-index: 100
        }
        .v_line {
          width: 2px;
          height: 220px;
          margin-left: 100px;
          background-color:  #2a2a40;
          z-index: 10000000;
          position: absolute;
          top: 60px;
          left: 200px;
          border-radius: 3px;
          display: none

        }
        
        .dropdown-content a:hover {
          background-color: #2a2a40;
          border-radius: 5px;
        }
        
        .cate_dropdown:hover .dropdown-content {display: block;}
        .cate_dropdown:hover .v_line {display: block;}
        
        #sub1 {
          display: flex;
          position: relative
        }
        .sub_list {
          position: absolute;
          right: 0px;
          display: none
        }
        .sub_list p {
          margin: 0;
        }

        #sub2 .sub_list {
          top: 10px;
          right: 10px
        }
        #sub3 .sub_list {
          top: 10px;
          right: 10px
        }
        #sub4 .sub_list {
          top: 10px;
          right: 10px
        }
        #sub5 .sub_list {
          top: 10px;
          right: 10px
        }
        #sub6 .sub_list {
          top: 10px;
          right: 10px
        }

        .dropdown-content #sub1:hover .sub_list {display: block}
        .dropdown-content #sub2:hover .sub_list {display: block}
        .dropdown-content #sub3:hover .sub_list {display: block}
        .dropdown-content #sub4:hover .sub_list {display: block}
        .dropdown-content #sub5:hover .sub_list {display: block}
        .dropdown-content #sub6:hover .sub_list {display: block}

        .logo {
          margin-right: -20px
        }

        #auth_dropdown_menu {
          display: flex;
          align-items: center;
          cursor: pointer;
          margin-left: 10px
        }

        .auth_dropdown-content {
          display: none;
          position: absolute;
          background-color: #1b1b32;
          min-width: 160px;
          color: #fff;
          box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
          z-index: 1;
          overflow-x: hidden;
          top: 60px;
          right: 0;
          border-radius: 3px;
          padding: 3px 4px 5px 3px
        }

        .auth_dropdown-content a {
          float: none;
          color: #f9f9f9;
          padding: 8px 8px;
          text-decoration: none;
          display: block;
          text-align: left;
        }

        #auth_dropdown_menu:hover .auth_dropdown-content {
          display: block;
        }
        .auth_dropdown-content a:hover {
          background-color: #2a2a40;
          border-radius: 2px;
        }

        #logout {
          position: relative;
          left: 14px;
          cursor: pointer
        }

        #auth_dropdown_menu:hover .down {
          display: none
        }
        #auth_dropdown_menu:hover .up {
          display: block
        }

        
        
      </style>
      <header>
        <div class="container nav-container">
        
          <nav>
            <div class="cate_evt ">
              <h1><a href="#">Viibs</a></h1>
              <div class="cate_dropdown">
                <a id="categories" href="#"><i class="fas fa-th-large"></i> Categories</a>
                <div>
                  <div class="dropdown-content">
                    <div id="sub1">
                      <a href="#">Actors</a>
                      <div class="sub_list">
                        <p><a href="#">Comedy</a></p>
                        <p><a href="#">Comic-con</a></p>
                        <p><a href="#">Nollywood</a></p>
                        <p><a href="#">View all</a></p>
                      </div>
                      </div>
                      <div id="sub2">
                        <a href="#">Athletes</a>
                        <div class="sub_list">
                          <p><a href="#">Football</a></p>
                          <p><a href="#">Basketball</a></p>
                          <p><a href="#">Golf</a></p>
                          <p><a href="#">Gymnastics</a></p>
                          <p><a href="#">View all</a></p>
                        </div>
                      </div>
                      <div id="sub3">
                        <a href="#">Musicians</a>
                        <div class="sub_list">
                          <p><a href="#">Pop</a></p>
                          <p><a href="#">R&B</a></p>
                          <p><a href="#">Gospel</a></p>
                          <p><a href="#">Hip Hop</a></p>
                          <p><a href="#">Rappers</a></p>
                          <p><a href="#">View all</a></p>
                        </div>
                      </div>
                      <div id="sub4">
                        <a href="#">Realty TV</a>
                        <div class="sub_list">
                          <p><a href="#">Big Brother 9ja</a></p>
                          <p><a href="#">MTV</a></p>
                          <p><a href="#">View all</a></p>
                        </div>
                      </div>
                      <div id="sub5">
                        <a href="#">Comedians</a>
                        <div class="sub_list">
                          <p><a href="#">Roasts</a></p>
                          <p><a href="#">Saturday Night life</a></p>
                          <p><a href="#">Youtube comedians</a></p>
                          <p><a href="#">Twitter comedians</a></p>
                          <p><a href="#">View all</a></p>
                        </div>
                      </div>
                      <div id="sub6">
                        <a href="#">Creators</a>
                        <div class="sub_list">
                          <p><a href="#">Bloggers</a></p>
                          <p><a href="#">Film makers</a></p>
                          <p><a href="#">Influencers</a></p>
                          <p><a href="#">Youtube</a></p>
                          <p><a href="#">View all</a></p>
                        </div>
                      </div>
                    </div>
                  <div class="v_line"></div>
                </div>
              </div>
              
              <a id="events" href="#"><i class="far fa-calendar-alt"></i> Events</a>
            </div>
            
            <div class="util">
              <form>
                <button id="search" type="submit"><i class="fa fa-search"></i></button>
                <input type="text" placeholder="Search.." name="search">
              </form>
              <div class="auth_user">
                <p><a href="#"><i class="far fa-bookmark"></i></a></p>
                <div id="auth_dropdown_menu">
                  <p class="logo">Logo</p>
                  <p class="up"><i class="fas fa-chevron-up"></i></p>
                  <p class="down"><i class="fas fa-chevron-down"></i></p>
                  <div class="auth_dropdown-content">
                    <a href="#">Account</a>
                    <a href="#">Orders</a>
                    <a href="#">Saved</a>
                    <a href="#">Gift cards</a>
                    <a href="#">My events</a>
                    <div id="logout">Logout</div>
                  </div>
                </div>
              </div>
              <button id="login">Login</button>
            </div>
          </nav>
        </div>
      </header>
    `;
  }
}



customElements.define('nav-component', Navbar);