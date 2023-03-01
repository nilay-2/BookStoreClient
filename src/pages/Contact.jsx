import React from 'react'

export default function Contact() {
  function togglesearch() {
    console.log("toggle  called");
    document.getElementById("searchToggle").classList.toggle("active");
    console.log(document.getElementById("searchToggle").classList);
  }
  function search(e){
    e.preventDefault();
    const key = document.getElementById("searchinp").value;
    window.location.href = `/search/${key}`
  }
  return (
    <div class="site-wrap">

      <div className="site-navbar py-2">

        <div className="search-wrap" id='searchToggle'>
          <div className="container">
            <a className="search-close js-search-close"><span onClick={togglesearch} className="icon-close2"></span></a>
            <form onSubmit={search}>
            <input type="text" id='searchinp' className="form-control" placeholder="Search keyword and hit enter..." />
          </form>
          </div>
        </div>

        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="logo">
              <div className="site-logo">
                <a href="/home" className="js-logo-clone">BookWorm</a>
              </div>
            </div>
            <div className="main-nav d-none d-lg-block">
              <nav className="site-navigation text-right text-md-center" role="navigation">
                <ul className="site-menu  d-none d-lg-block">
                  <li ><a href="/home">Home</a></li>
                  <li><a href="/shop">Store</a></li>
                  {/* <li className="has-children">
<a href="#">Dropdown</a>
<ul className="dropdown">
<li><a href="#">Supplements</a></li>
<li className="has-children">
<a href="#">Vitamins</a>
<ul className="dropdown">
<li><a href="#">Supplements</a></li>
<li><a href="#">Vitamins</a></li>
<li><a href="#">Diet &amp; Nutrition</a></li>
<li><a href="#">Tea &amp; Coffee</a></li>
</ul>
</li>
<li><a href="#">Diet &amp; Nutrition</a></li>
<li><a href="#">Tea &amp; Coffee</a></li>

</ul>
</li> */}
                  <li><a href="/about">About</a></li>
                  <li className="active"><a href="/contact">Contact</a></li>
                  <li><a href="/productform">Sell</a></li>
                  <li><a href="/myproducts">My Products</a></li>
                </ul>
              </nav>
            </div>
            <div className="icons">
              <a href='#' className="icons-btn d-inline-block js-search-open"><span onClick={togglesearch} className="icon-search"></span></a>
              <a href="/cart" className="icons-btn d-inline-block bag">
                <span className="icon-shopping-bag"></span>
                {/* <span className="number">2</span>  */}
              </a>
              <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                className="icon-menu"></span></a>
            </div>
          </div>
        </div>
      </div>
      <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2 class="h3 mb-5 text-black">Get In Touch</h2>
            </div>
            <div class="col-md-12">

              <form action="#" method="post">

                <div class="p-3 p-lg-5 border">
                  <div class="form-group row">
                    <div class="col-md-6">
                      <label for="c_fname" class="text-black">First Name <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="c_fname" name="c_fname" />
                    </div>
                    <div class="col-md-6">
                      <label for="c_lname" class="text-black">Last Name <span class="text-danger">*</span></label>
                      <input type="text" class="form-control" id="c_lname" name="c_lname" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_email" class="text-black">Email <span class="text-danger">*</span></label>
                      <input type="email" class="form-control" id="c_email" name="c_email" placeholder="" />
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_subject" class="text-black">Subject </label>
                      <input type="text" class="form-control" id="c_subject" name="c_subject" />
                    </div>
                  </div>

                  <div class="form-group row">
                    <div class="col-md-12">
                      <label for="c_message" class="text-black">Message </label>
                      <textarea name="c_message" id="c_message" cols="30" rows="7" class="form-control"></textarea>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-lg-12">
                      <input type="submit" class="btn btn-primary btn-lg btn-block" value="Send Message" />
                    </div>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>



      <div class="site-section bg-primary">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="text-white mb-4">Offices</h2>
            </div>
            <div class="col-lg-4">
              <div class="p-4 bg-white mb-3 rounded">
                <span class="d-block text-black h6 text-uppercase">Mumbai</span>
                <p class="mb-0">VESIT, Hashu Adwani Memorial Complex, Collector's Colony, Chembur, Mumbai, Maharashtra</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="p-4 bg-white mb-3 rounded">
                <span class="d-block text-black h6 text-uppercase">Manipal</span>
                <p class="mb-0">Udupi - Karkala Rd, Eshwar Nagar, Manipal, Karnataka</p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="p-4 bg-white mb-3 rounded">
                <span class="d-block text-black h6 text-uppercase">Sancoale</span>
                <p class="mb-0">NH 17B, Bypass, Road, Zuarinagar, Sancoale, Goa</p>
              </div>
            </div>
          </div>
        </div>

      </div>


      <hr style={{ border: "2px solid black" }} />
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">

              <div className="block-7">
                <h3 className="footer-heading mb-4">About Us</h3>
                <p>Made by students. For students. We are students just like you who have faced the same problem of buying books every semester. Rather than buying new books we found a better solution and are sharing it with you.</p>
              </div>

            </div>
            <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
              <h3 className="footer-heading mb-4">Quick Links</h3>
              <ul className="list-unstyled">
                <li><a href="/shop">Store</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/productform">Sell</a></li>
              </ul>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="block-5 mb-5">
                <h3 className="footer-heading mb-4">Contact Info</h3>
                <ul className="list-unstyled">
                  <li className="address">VESIT, Hashu Adwani Memorial Complex, Collector's Colony, Chembur, Mumbai, Maharashtra 400074</li>
                  <li className="phone"><a href="tel://999999999">9999999999</a></li>
                  <li className="email"><a href="bookworm@gmail.com">bookworm@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
