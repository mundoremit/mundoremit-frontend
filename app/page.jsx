  <!-- Header start -->
  <header class="header">
    <div class="container">
      <div class="row flex-nowrap">
        <nav class="navbar navbar-expand-lg justify-content-between align-items-center">
          <a class="navbar-brand p-0 m-0" href="#">
            <img src="./images/logo.svg" alt="logo" width="214" height="40" />
          </a>

          <div class="navigation-link-button d-flex align-items-center">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">Menu 1</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Menu 2</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Menu 3</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Menu 4</a>
                </li>
                <!-- <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a class="dropdown-item" href="#">Menu 1</a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">Menu 2</a>
                    </li>
                  </ul>
                </li> -->
              </ul>
            </div>
            <div class="select-language-flag">
              <button class="language-button btn dropdown-toggle d-flex align-items-center" type="button" id="langMenu"
                data-bs-toggle="dropdown" aria-expanded="false">
                <img src="./images/eng-flag-img.png" alt="ENG" width="18" height="18" id="headerLangFlag"
                  class="header-flag-img" />
                <span id="headerLangText">ENG</span>
              </button>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="langMenu">
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#"
                    onclick="changeLang('ENG', './images/eng-flag-img.png')">
                    <img src="./images/eng-flag-img.png" alt="eng" width="18" height="18" id="langFlag"
                      class="header-flag-img" />
                    ENG
                  </a>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#"
                    onclick="changeLang('INR', './images/inr-flag-img.png')">
                    <img src="./images/inr-flag-img.png" alt="inr" width="18" height="18" id="langFlag"
                      class="header-flag-img" />
                    INR
                  </a>
                </li>
                <li>
                  <a class="dropdown-item d-flex align-items-center" href="#"
                    onclick="changeLang('USD', './images/usd-flag-img.png')">
                    <img src="./images/usd-flag-img.png" alt="usd" width="18" height="18" id="langFlag"
                      class="header-flag-img" />
                    USD
                  </a>
                </li>
              </ul>
            </div>
            <div class="header-button-box d-flex">
              <button class="btn header-btn-action button-primary header-login-btn d-flex align-items-center">
                Log In
                <img src="./images/sign-in-icon.svg" alt="icon" width="24" height="24" />
              </button>
              <button class="btn header-btn-action button-primary header-register-btn d-flex align-items-center">
                Register
                <img src="./images/user-icon.svg" alt="icon" width="24" height="24" />
              </button>
            </div>
          </div>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </div>
  </header>
  <!-- Header end -->

  <!-- banner section -->
  <section class="home-banner-section section-space-b position-relative">
    <div class="container">
      <div class="row">
        <div class="banner-section-inner">
          <div class="banner-section-main-section">
            <!-- <img
                src="./images/home-banner-image.png"
                alt="banner image"
                width="1170"
                height="704"
              /> -->
            <div class="banner-content d-flex">
              <div class="banner-heading">
                <h1 class="tlt banner-title section_heading">Affordable. Swiss Quality. Speed Delivery.</h1>
              </div>
              <div class="banner-send-money-form">
                <h2 class="tlt banner-form-title section_heading">Send Money</h2>
                <form action="" class="form-field">
                  <div class="form-field-row">
                    <label for="SendExactlyField" class="form-label">You send exactly</label>
                    <div class="input-with-select-box">
                      <input type="text" class="form-control form-input" id="SendExactlyField" placeholder="80,000" />
                      <div class="select-country-field z-3">
                        <div class="select-language-flag">
                          <button class="language-button btn dropdown-toggle d-flex align-items-center" type="button"
                            id="sendLangMenu" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="./images/inr-flag-img.png" alt="INR" width="18" height="18" id="sendLangFlag"
                              class="header-flag-img" />
                            <span id="sendLangText">INR</span>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="SendExactly">
                            <li>
                              <a class="dropdown-item d-flex align-items-center" href="#"
                                onclick="SendExactlySelect('ENG', './images/eng-flag-img.png')">
                                <img src="./images/eng-flag-img.png" alt="eng" width="18" height="18" id="langFlag"
                                  class="header-flag-img" />
                                ENG
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item d-flex align-items-center" href="#"
                                onclick="SendExactlySelect('INR', './images/inr-flag-img.png')">
                                <img src="./images/inr-flag-img.png" alt="inr" width="18" height="18" id="langFlag"
                                  class="header-flag-img" />
                                INR
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item d-flex align-items-center" href="#"
                                onclick="SendExactlySelect('USD', './images/usd-flag-img.png')">
                                <img src="./images/usd-flag-img.png" alt="usd" width="18" height="18" id="langFlag"
                                  class="header-flag-img" />
                                USD
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-field-row">
                    <label for="RecipientGets" class="form-label">Recipient gets</label>
                    <div class="input-with-select-box">
                      <input type="text" class="form-control form-input" placeholder="906.77" id="RecipientGets" />
                      <div class="select-country-field z-2">
                        <div class="select-language-flag">
                          <button class="language-button btn dropdown-toggle d-flex align-items-center" type="button"
                            id="RecipientLangMenu" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="./images/usd-flag-img.png" alt="USD" width="18" height="18" id="RecipientLangFlag"
                              class="header-flag-img" />
                            <span id="RecipientLangText">USD</span>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="RecipientLangMenu">
                            <li>
                              <a class="dropdown-item d-flex align-items-center" href="#"
                                onclick="RecipientGetsSelect('ENG', './images/eng-flag-img.png')">
                                <img src="./images/eng-flag-img.png" alt="eng" width="18" height="18" id="langFlag"
                                  class="header-flag-img" />
                                ENG
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item d-flex align-items-center" href="#"
                                onclick="RecipientGetsSelect('INR', './images/inr-flag-img.png')">
                                <img src="./images/inr-flag-img.png" alt="inr" width="18" height="18" id="langFlag"
                                  class="header-flag-img" />
                                INR
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item d-flex align-items-center" href="#"
                                onclick="RecipientGetsSelect('USD', './images/usd-flag-img.png')">
                                <img src="./images/usd-flag-img.png" alt="usd" width="18" height="18" id="langFlag"
                                  class="header-flag-img" />
                                USD
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-field-row bank-transfer-field">
                    <label for="BankTransfer" class="form-label">
                      Paying with</label>
                    <div class="input-with-select-box">
                      <input type="text" class="form-control form-input" placeholder="Bank transfer"
                        id="BankTransfer" />
                      <div class="select-country-field z-1">
                        <div class="select-language-flag">
                          <button class="language-button btn dropdown-toggle d-flex align-items-center" type="button"
                            id="BankTransferMenu" data-bs-toggle="dropdown" aria-expanded="false">
                            <!-- <img
                                src="./images/usd-flag-img.png"
                                alt="USD"
                                width="18"
                                height="18"
                                id="RecipientLangFlag"
                                class="header-flag-img"
                              /> -->
                            <span id="BankTransferLangText">Change</span>
                          </button>
                          <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="BankTransferMenu">
                            <li>
                              <a class="dropdown-item d-flex align-items-center" href="#"
                                onclick="BankTransferSelect('Bank transfer', './images/eng-flag-img.png')">
                                <!-- <img
                                    src="./images/eng-flag-img.png"
                                    alt="eng"
                                    width="18"
                                    height="18"
                                    id="langFlag"
                                    class="header-flag-img"
                                  /> -->
                                Bank transfer
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item d-flex align-items-center" href="#"
                                onclick="BankTransferSelect('Credit Card', './images/inr-flag-img.png')">
                                <!-- <img
                                    src="./images/inr-flag-img.png"
                                    alt="inr"
                                    width="18"
                                    height="18"
                                    id="langFlag"
                                    class="header-flag-img"
                                  /> -->
                                Credit Card
                              </a>
                            </li>
                            <li>
                              <a class="dropdown-item d-flex align-items-center" href="#"
                                onclick="BankTransferSelect('UPI', './images/usd-flag-img.png')">
                                <!-- <img
                                    src="./images/usd-flag-img.png"
                                    alt="usd"
                                    width="18"
                                    height="18"
                                    id="langFlag"
                                    class="header-flag-img"
                                  /> -->
                                UPI
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="banner-bank-transfer-total">
                    <table class="bank-transfer-table">
                      <tbody>
                        <tr>
                          <td>
                            Bank transfer fee
                            <img src="./images/info-icon.svg" alt="info icon" width="14" height="14"
                              class="banner-info-icon" />
                          </td>
                          <td>0 INR</td>
                        </tr>
                        <tr>
                          <td>Our Fee</td>
                          <td>1,337 INR</td>
                        </tr>
                        <tr class="table-before-total-row">
                          <td>
                            GST
                            <img src="./images/info-icon.svg" alt="info icon" width="14" height="14"
                              class="banner-info-icon" />
                          </td>
                          <td>381.57 INR</td>
                        </tr>

                        <tr class="table-total-amount">
                          <td>Total included fees</td>
                          <td>1,718.57 INR</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="should-arrive-details">
                    <div class="should-arrive-title">
                      Should arrive
                      <span class="should-arrive-value">by Friday</span>
                    </div>
                  </div>
                  <button
                    class="btn banner-send-money-btn button-primary w-100 justify-content-center header-login-btn d-flex align-items-center">
                    Send Money
                    <img src="./images/btn-arrow-up-white.svg" alt="arrow icon" width="24" height="24"
                      class="button-arrow-icon" />
                  </button>
                </form>
              </div>
            </div>
            <!-- <h1 style="text-align: center">banner section</h1> -->
          </div>
        </div>
      </div>
    </div>
    <div class="banner-shape-1 section-shape-img position-absolute">
      <img src="./images/shape-image/banner-shape-img1.svg" width="115" height="109" alt="shape image"
        class="banner-shape-img" />
    </div>
    <div class="banner-shape-2 section-shape-img position-absolute">
      <img src="./images/shape-image/banner-shape-img2.svg" width="115" height="143" alt="shape image"
        class="banner-shape-img" />
    </div>
  </section>

  <!-- open free account section -->
  <section class="free-account-section section-space-b position-relative">
    <div class="container">
      <div class="row">
        <div class="open-free-account-box">
          <div class="open-free-account-box-inner d-flex align-items-center">
            <div class="free-account-image">
              <img src="./images/free-account-img.png" alt="img" width="400" height="363" />
            </div>
            <div class="free-account-content">
              <h2 class="tlt free-account-title section_heading font_color_white">Lorem ipsum dolor sit amet consectetur Pretium vestibulum .</h2>
              <p class="free-account-description font_color_white">
                Lorem ipsum dolor sit amet consectetur. Pretium vestibulum
                amet in morbi orci ac. Nullam enim porttitor enim tincidunt
                dignissim amet. Vulputate a risus sit viverra praesent.
                Suscipit nec feugiat gravida eu tellus lacus risus.Lorem ipsum
                dolor sit amet consectetur.
              </p>
              <button
                class="btn free-account-btn button-primary justify-content-center header-login-btn d-flex align-items-center">
                Open Free Account

                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="button-arrow-icon">
                  <path
                    d="M8.24999 5.74995L18 5.74995C18.1989 5.74995 18.3897 5.82897 18.5303 5.96962C18.671 6.11027 18.75 6.30104 18.75 6.49995V16.2499C18.75 16.4489 18.671 16.6396 18.5303 16.7803C18.3897 16.9209 18.1989 16.9999 18 16.9999C17.8011 16.9999 17.6103 16.9209 17.4697 16.7803C17.329 16.6396 17.25 16.4489 17.25 16.2499V8.31026L6.53062 19.0306C6.38988 19.1713 6.19901 19.2504 5.99999 19.2504C5.80097 19.2504 5.6101 19.1713 5.46936 19.0306C5.32863 18.8898 5.24957 18.699 5.24957 18.4999C5.24957 18.3009 5.32863 18.1101 5.46936 17.9693L16.1897 7.24995L8.24999 7.24995C8.05108 7.24995 7.86031 7.17093 7.71966 7.03028C7.57901 6.88963 7.49999 6.69886 7.49999 6.49995C7.49999 6.30104 7.57901 6.11027 7.71966 5.96962C7.86031 5.82897 8.05108 5.74995 8.24999 5.74995Z"
                    fill="#00A8E0" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div class="free-account-icon-with-content">
          <div class="free-account-icon-with-title d-grid align-items-center">
            <div class="free-account-icon-with-content-items">
              <div class="free-account-round-icon">
                <img src="./images/trusted-millions-icon.svg" alt="icon" width="32" height="32" />
              </div>
              <h3 class="free-account-icon-title">Trusted by Millions</h3>
            </div>
            <div class="free-account-icon-with-content-items">
              <div class="free-account-round-icon">
                <img src="./images/customer-support-icon.svg" alt="icon" width="32" height="32" />
              </div>
              <h3 class="free-account-icon-title">24/7 Customer Support</h3>
            </div>
            <div class="free-account-icon-with-content-items">
              <div class="free-account-round-icon">
                <img src="./images/authantication-icon.svg" alt="icon" width="32" height="32" />
              </div>
              <h3 class="free-account-icon-title">2 factor authantication</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="free-account-shape-1 section-shape-img position-absolute">
      <img src="./images/shape-image/free-account-shape-img1.svg" width="114" height="114" alt="shape image"
        class="free-account-shape-img" />
    </div>
  </section>

  <!-- the power of trust section -->
  <section class="the-power-trust-section section-space-b position-relative">
    <div class="container">
      <div class="row">
        <div class="the-power-trust-outside-box">
          <div class="the-power-trust-box">
            <div class="the-power-trust-inner-box">
              <div class="the-power-trust-inner-sub-box">
                <div class="the-power-trust-inner-sub-box-content">
                  <h2 class="tlt the-power-trust-title section_heading text-center">The Power of Trust, Speed, Value & Swiss Quality.</h2>
                  <p class="the-power-trust-description text-center">
                    Lorem ipsum dolor sit amet consectetur. At vel vitae at
                    nulla metus sodales cras. Elit ac nibh morbi ipsum. Diam
                    ullamcorper morbi leo id id pretium
                  </p>

                  <div class="the-power-trust-card d-grid">
                    <div class="the-power-trust-card-items">
                      <img src="./images/power-of-trust-card-img1.svg" alt="card img" width="138" height="90"
                        class="the-power-trust-card-img" />
                      <h3 class="the-power-trust-card-title">
                        Best Exchange Rates
                      </h3>
                      <p class="the-power-trust-card-desc">
                        Save more on every transfer with <br />
                        competitive, transparent pricing.
                      </p>
                    </div>
                    <div class="the-power-trust-card-items">
                      <img src="./images/power-of-trust-card-img2.svg" alt="card img" width="118" height="90"
                        class="the-power-trust-card-img" />
                      <h3 class="the-power-trust-card-title">
                        Swiss Quality & Trust
                      </h3>
                      <p class="the-power-trust-card-desc">
                        Experience precision, reliability, and world-class
                        security — trusted globally.
                      </p>
                    </div>
                    <div class="the-power-trust-card-items">
                      <img src="./images/power-of-trust-card-img3.svg" alt="card img" width="121" height="90"
                        class="the-power-trust-card-img" />
                      <h3 class="the-power-trust-card-title">
                        Fast Transfers 24/7
                      </h3>
                      <p class="the-power-trust-card-desc">
                        Send money instantly — even on weekends and holidays.
                      </p>
                    </div>
                    <div class="the-power-trust-card-items">
                      <img src="./images/power-of-trust-card-img4.svg" alt="card img" width="102" height="90"
                        class="the-power-trust-card-img" />
                      <h3 class="the-power-trust-card-title">
                        Secure & Transparent
                      </h3>
                      <p class="the-power-trust-card-desc">
                        No hidden fees, full control, and end-to -end
                        encrypted transactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="the-power-trust-action d-flex justify-content-center">
                <button class="btn button-primary justify-content-center header-login-btn d-flex align-items-center">
                  Open Free Account
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="button-arrow-icon">
                    <path
                      d="M8.24999 5.74995L18 5.74995C18.1989 5.74995 18.3897 5.82897 18.5303 5.96962C18.671 6.11027 18.75 6.30104 18.75 6.49995V16.2499C18.75 16.4489 18.671 16.6396 18.5303 16.7803C18.3897 16.9209 18.1989 16.9999 18 16.9999C17.8011 16.9999 17.6103 16.9209 17.4697 16.7803C17.329 16.6396 17.25 16.4489 17.25 16.2499V8.31026L6.53062 19.0306C6.38988 19.1713 6.19901 19.2504 5.99999 19.2504C5.80097 19.2504 5.6101 19.1713 5.46936 19.0306C5.32863 18.8898 5.24957 18.699 5.24957 18.4999C5.24957 18.3009 5.32863 18.1101 5.46936 17.9693L16.1897 7.24995L8.24999 7.24995C8.05108 7.24995 7.86031 7.17093 7.71966 7.03028C7.57901 6.88963 7.49999 6.69886 7.49999 6.49995C7.49999 6.30104 7.57901 6.11027 7.71966 5.96962C7.86031 5.82897 8.05108 5.74995 8.24999 5.74995Z"
                      fill="#00A8E0"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="power-of-trust-shape-1 section-shape-img position-absolute">
      <img src="./images/shape-image/power-of-trust-shape-img1.svg" width="167" height="131" alt="shape image"
        class="power-of-trust-shape-img" />
    </div>
    <div class="power-of-trust-shape-2 section-shape-img position-absolute">
      <img src="./images/shape-image/power-of-trust-shape-img2.svg" width="130" height="172" alt="shape image"
        class="power-of-trust-shape-img" />
    </div>
  </section>

  <!-- Global Money Transfers section -->
  <section class="global-money-transfers-section position-relative">
    <div class="container">
      <div class="row">
        <div class="global-money-transfer-heading">
          <h2 class="tlt global-money-transfer-title section_heading text-center">Global Money Transfers Made Simple and Affordable.</h2>
          <p class="global-money-transfer-description text-center">
            Lorem ipsum dolor sit amet consectetur. Pretium vestibulum amet in
            morbi orci ac. Nullam enim porttitor enim tincidunt dignissim
            amet. Vulputate a risus sit viverra praesent. Suscipit nec feugiat
            gravida eu tellus lacus risus.
          </p>
        </div>
        <div class="global-money-transfer-country d-grid">
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/india-country-img.svg" alt="country img" width="52" height="52" />
              INDIA
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/usa-country-img.svg" alt="country img" width="52" height="52" />
              USA
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/canada-country-img.svg" alt="country img" width="52" height="52" />
              CANADA
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/australia-country-img.svg" alt="country img" width="52" height="52" />
              AUSTRALIA
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/brazil-country-img.svg" alt="country img" width="52" height="52" />
              BRAZIL
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/denmark-country-img.svg" alt="country img" width="52" height="52" />
              DENMARK
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/sweden-country-img.svg" alt="country img" width="52" height="52" />
              SWEDEN
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/egypt-country-img.svg" alt="country img" width="52" height="52" />
              EGYPT
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/france-country-img.svg" alt="country img" width="52" height="52" />
              FRANCE
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/germany-country-img.svg" alt="country img" width="52" height="52" />
              GERMANY
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/china-country-img.svg" alt="country img" width="52" height="52" />
              CHINA
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
          <button class="global-money-transfer-country-items d-flex align-items-center justify-content-between">
            <div class="country-with-name d-flex align-items-center">
              <img src="./images/japan-country-img.svg" alt="country img" width="52" height="52" />
              JAPAN
            </div>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.5625 9.00083C15.5625 8.72033 15.438 8.46008 15.3202 8.26508C15.1935 8.05433 15.0233 7.83683 14.8358 7.62533C14.46 7.20008 13.9695 6.74333 13.494 6.33008C13.0155 5.91458 12.5385 5.53133 12.1823 5.25383C12.0037 5.11433 11.8545 5.00108 11.7502 4.92158C11.6978 4.88258 11.6565 4.85108 11.628 4.83008L11.5958 4.80608L11.5868 4.79933L11.5837 4.79708C11.334 4.61333 10.9815 4.66658 10.797 4.91633C10.6125 5.16683 10.6665 5.51858 10.9163 5.70308L10.926 5.70983L10.956 5.73233C10.9823 5.75183 11.022 5.78108 11.0722 5.81933C11.1727 5.89508 11.3167 6.00533 11.49 6.14033C11.8365 6.41108 12.297 6.78083 12.756 7.17908C13.218 7.58033 13.665 7.99958 13.9928 8.37008C14.013 8.39333 14.0332 8.41658 14.0527 8.43908H3C2.6895 8.43908 2.4375 8.69108 2.4375 9.00158C2.4375 9.31208 2.6895 9.56408 3 9.56408H14.0505C14.0317 9.58583 14.0122 9.60833 13.9928 9.63083C13.665 10.0013 13.218 10.4206 12.756 10.8218C12.297 11.2201 11.8365 11.5898 11.49 11.8606C11.3167 11.9956 11.1727 12.1058 11.0722 12.1816C11.022 12.2198 10.9823 12.2491 10.956 12.2686L10.926 12.2911L10.9163 12.2978C10.6665 12.4823 10.6125 12.8341 10.797 13.0846C10.9815 13.3343 11.334 13.3876 11.5837 13.2038L11.5868 13.2016L11.5958 13.1948L11.628 13.1708C11.6565 13.1498 11.6978 13.1183 11.7502 13.0793C11.8545 12.9998 12.0037 12.8866 12.1823 12.7471C12.5385 12.4688 13.0155 12.0863 13.494 11.6708C13.9695 11.2576 14.46 10.8008 14.8358 10.3756C15.0233 10.1641 15.1935 9.94658 15.3202 9.73583C15.4373 9.54158 15.561 9.28358 15.5625 9.00533"
                fill="#bababa" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>

  <!-- users Says Testimonials section -->
  <section class="users-says-testimonials-section section-space-t position-relative">
    <div class="container">
      <div class="row">
        <div class="users-testimonial">
          <div class="section-header d-flex justify-content-between align-items-center">
            <h2 class="tlt testimonial-title section_heading">What our users Says</h2>
            <div class="slider-controls">
              <button class="prev-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 11.25H9.349C9.671 10.908 10.074 10.534 10.492 10.171C10.979 9.749 11.468 9.356 11.836 9.068C12.02 8.925 12.173 8.808 12.28 8.727C12.333 8.687 12.375 8.656 12.403 8.635L12.435 8.611L12.444 8.604C12.778 8.359 12.849 7.889 12.604 7.555C12.358 7.222 11.889 7.151 11.555 7.396L11.542 7.406L11.507 7.432C11.476 7.455 11.432 7.488 11.376 7.53C11.264 7.615 11.105 7.737 10.914 7.886C10.532 8.183 10.021 8.593 9.508 9.039C8.999 9.481 8.47 9.973 8.063 10.434C7.86 10.663 7.671 10.903 7.53 11.139C7.4 11.353 7.25 11.66 7.25 12C7.25 12.341 7.4 12.647 7.53 12.862C7.671 13.097 7.86 13.337 8.063 13.566C8.47 14.027 8.999 14.52 9.508 14.962C10.021 15.407 10.532 15.817 10.913 16.115C11.105 16.264 11.264 16.385 11.376 16.47C11.432 16.512 11.476 16.545 11.507 16.568L11.542 16.594L11.552 16.601L11.555 16.604C11.889 16.85 12.358 16.778 12.604 16.445C12.849 16.111 12.778 15.642 12.445 15.396L12.443 15.395L12.435 15.389L12.403 15.366C12.375 15.345 12.333 15.313 12.28 15.273C12.173 15.193 12.02 15.076 11.836 14.932C11.468 14.644 10.979 14.252 10.492 13.829C10.074 13.467 9.671 13.093 9.349 12.75H20C20.414 12.75 20.75 12.415 20.75 12C20.75 11.586 20.414 11.25 20 11.25ZM4.75 18V6C4.75 5.586 4.414 5.25 4 5.25C3.586 5.25 3.25 5.586 3.25 6V18C3.25 18.414 3.586 18.75 4 18.75C4.414 18.75 4.75 18.414 4.75 18Z"
                    fill="#00A8E0" />
                </svg>
              </button>
              <button class="next-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M4 11.25H14.651C14.329 10.908 13.926 10.534 13.508 10.171C13.021 9.749 12.532 9.356 12.164 9.068C11.98 8.925 11.827 8.808 11.72 8.727C11.667 8.687 11.625 8.656 11.597 8.635L11.565 8.611L11.556 8.604C11.222 8.359 11.151 7.889 11.396 7.555C11.642 7.222 12.111 7.151 12.445 7.396L12.458 7.406L12.493 7.432C12.524 7.455 12.568 7.488 12.624 7.53C12.736 7.615 12.895 7.737 13.086 7.886C13.468 8.183 13.979 8.593 14.492 9.039C15.001 9.481 15.53 9.973 15.937 10.434C16.14 10.663 16.329 10.903 16.47 11.139C16.6 11.353 16.75 11.66 16.75 12C16.75 12.341 16.6 12.647 16.47 12.862C16.329 13.097 16.14 13.337 15.937 13.566C15.53 14.027 15.001 14.52 14.492 14.962C13.979 15.407 13.468 15.817 13.087 16.115C12.895 16.264 12.736 16.385 12.624 16.47C12.568 16.512 12.524 16.545 12.493 16.568L12.458 16.594L12.448 16.601L12.445 16.604C12.111 16.85 11.642 16.778 11.396 16.445C11.151 16.111 11.222 15.642 11.555 15.396L11.557 15.395L11.565 15.389L11.597 15.366C11.625 15.345 11.667 15.313 11.72 15.273C11.827 15.193 11.98 15.076 12.164 14.932C12.532 14.644 13.021 14.252 13.508 13.829C13.926 13.467 14.329 13.093 14.651 12.75H4C3.586 12.75 3.25 12.415 3.25 12C3.25 11.586 3.586 11.25 4 11.25ZM19.25 18V6C19.25 5.586 19.586 5.25 20 5.25C20.414 5.25 20.75 5.586 20.75 6V18C20.75 18.414 20.414 18.75 20 18.75C19.586 18.75 19.25 18.414 19.25 18Z"
                    fill="#00A8E0" />
                </svg>
              </button>
            </div>
          </div>
          <div class="testimonial-slider">
            <div class="testimonial-card">
              <p class="testimonial-text">
                Aliquet ridiculus mi porta habitant vulputate purus is
                rhoncus, mattis amet enim. Sit purus venenatis velit semper
                lectus sed ornare quam nulla.
              </p>
              <div class="testimonial-user">
                <img src="./images/user-testimonials-img.png" alt="user img" width="50" height="50"
                  class="user-testimonials-image" />
                <div>
                  <h4 class="user-name">Hellena John</h4>
                  <p class="user-role">Co-founder</p>
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <p class="testimonial-text">
                Aliquet ridiculus mi porta habitant vulputate purus is
                rhoncus, mattis amet enim. Sit purus venenatis velit semper
                lectus sed ornare quam nulla.
              </p>
              <div class="testimonial-user">
                <img src="./images/user-testimonials-img.png" alt="user img" width="50" height="50"
                  class="user-testimonials-image" />
                <div>
                  <h4 class="user-name">Michael Carter</h4>
                  <p class="user-role">Co-founder</p>
                </div>
              </div>
            </div>
            <div class="testimonial-card">
              <p class="testimonial-text">
                Aliquet ridiculus mi porta habitant vulputate purus is
                rhoncus, mattis amet enim. Sit purus venenatis velit semper
                lectus sed ornare quam nulla.
              </p>
              <div class="testimonial-user">
                <img src="./images/user-testimonials-img.png" alt="user img" width="50" height="50"
                  class="user-testimonials-image" />
                <div>
                  <h4 class="user-name">Sophia Lee</h4>
                  <p class="user-role">Co-founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Send Money Anywhere section -->
  <section class="send-money-anywhere-section section-space-tb position-relative">
    <div class="container">
      <div class="row">
        <div class="send-money-anywhere-inner">
          <div class="send-money-anywhere-bg">
            <div class="send-money-anywhere-box-content">
              <img src="./images/send-money-anywhere-icon.svg" alt="icon" width="60" height="60"
                class="send-money-anywhere-icon" />
              <h2 class="tlt send-money-anywhere section_heading font_color_white">Send Money Anywhere Try It Today!</h2>
              <div class="send-money-anywhere-action d-flex justify-content-start">
                <button class="btn button-primary justify-content-start header-login-btn d-flex align-items-center">
                  Open Free Account
                  <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="button-arrow-icon">
                    <path
                      d="M8.24999 5.74995L18 5.74995C18.1989 5.74995 18.3897 5.82897 18.5303 5.96962C18.671 6.11027 18.75 6.30104 18.75 6.49995V16.2499C18.75 16.4489 18.671 16.6396 18.5303 16.7803C18.3897 16.9209 18.1989 16.9999 18 16.9999C17.8011 16.9999 17.6103 16.9209 17.4697 16.7803C17.329 16.6396 17.25 16.4489 17.25 16.2499V8.31026L6.53062 19.0306C6.38988 19.1713 6.19901 19.2504 5.99999 19.2504C5.80097 19.2504 5.6101 19.1713 5.46936 19.0306C5.32863 18.8898 5.24957 18.699 5.24957 18.4999C5.24957 18.3009 5.32863 18.1101 5.46936 17.9693L16.1897 7.24995L8.24999 7.24995C8.05108 7.24995 7.86031 7.17093 7.71966 7.03028C7.57901 6.88963 7.49999 6.69886 7.49999 6.49995C7.49999 6.30104 7.57901 6.11027 7.71966 5.96962C7.86031 5.82897 8.05108 5.74995 8.24999 5.74995Z"
                      fill="#00A8E0"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="send-money-anywhere-shape-1 section-shape-img position-absolute">
      <img src="./images/shape-image/send-money-shape-img1.svg" width="95" height="109" alt="shape image"
        class="send-money-anywhere-shape-img" />
    </div>
    <div class="send-money-anywhere-shape-2 section-shape-img position-absolute">
      <img src="./images/shape-image/send-money-shape-img2.svg" width="94" height="143" alt="shape image"
        class="send-money-anywhere-shape-img" />
    </div>
  </section>

  <div class="faq-and-footer-section-background">
    <!-- FAQ section -->
    <section class="faq-section position-relative">
      <div class="container">
        <div class="row">
          <div class="faq-content">
            <h2 class="tlt faq-title section_heading text-center">Frequently Asked Questions</h2>

            <div class="accordion" id="faqAccordion">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded="true" aria-controls="collapseOne">
                    Lorem ipsum dolor sit amet consectetur Pretium vestibulum.
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur. Pretium vestibulum
                    amet in morbi orci ac. Nullam enim porttitor enim
                    tincidunt dignissim amet. Vulputate a risus sit viverra
                    praesent.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Lorem ipsum dolor sit amet consectetur Pretium vestibulum.
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur. Pretium vestibulum
                    amet in morbi orci ac. Nullam enim porttitor enim
                    tincidunt dignissim amet. Vulputate a risus sit viverra
                    praesent.
                  </div>
                </div>
              </div>

              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Lorem ipsum dolor sit amet consectetur Pretium vestibulum.
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion">
                  <div class="accordion-body">
                    Lorem ipsum dolor sit amet consectetur. Pretium vestibulum
                    amet in morbi orci ac. Nullam enim porttitor enim
                    tincidunt dignissim amet. Vulputate a risus sit viverra
                    praesent.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer start -->
    <footer class="footer">
      <div class="footer-inner">
        <div class="container">
          <div class="row footer-perent-box">
            <div class="footer-col col-12 col-lg-6">
              <div class="footer-logo">
                <a href="#" class="d-flex flex-column">
                  <img class="footer-logo" src="./images/footer-logo.svg" width="214" height="40" alt="footer logo" />
                </a>
                <p class="footer-brand-description">
                  Lorem ipsum dolor sit amet consectetur. Pretium vestibulum
                  amet in morbi orci ac Nullam enim.
                </p>
              </div>
            </div>
            <div class="footer-col col-12 col-md-6 col-lg-2">
              <div class="quick-link">
                <!-- <h3>First Column</h3> -->
                <ul class="footer-link">
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Term & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Disclaimer</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-col col-12 col-md-6 col-lg-2">
              <div class="quick-link">
                <!-- <h3>Second Column</h3> -->
                <ul class="footer-link">
                  <li>
                    <a href="#">Explore</a>
                  </li>
                  <li>
                    <a href="#">How it work?</a>
                  </li>
                  <li>
                    <a href="#">Security</a>
                  </li>
                  <li>
                    <a href="#">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="footer-col col-12 col-md-6 col-lg-2">
              <div class="quick-link">
                <!-- <h3>Third Column</h3> -->
                <ul class="footer-link">
                  <li>
                    <a href="#">Learn</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="social-media-and-copyright-section">
          <div class="footer-separetion-line"></div>
          <div class="container">
            <div class="row">
              <div class="social-media-and-copyright d-flex align-items-center justify-content-between">
                <ul class="copyright-content d-flex">
                  <li class="copyright-items d-flex">
                    <p class="copyright-text m-0">
                      logoipsum © Copyright 2025
                    </p>
                  </li>
                  <li class="copyright-items d-flex">
                    <a href="#" class="copyright-link d-flex">
                      Terms of Use
                    </a>
                  </li>
                  <li class="copyright-items d-flex">
                    <a href="#" class="copyright-link d-flex">
                      Privacy Policy
                    </a>
                  </li>
                </ul>

                <ul class="social-media-icon d-flex">
                  <li>
                    <a href="#" class="social-link d-flex">
                      <img src="./images/facebook-icon.svg" alt="icon" width="10" height="18" />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="social-link d-flex">
                      <img src="./images/instagram-icon.svg" alt="icon" width="18" height="18" />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="social-link d-flex">
                      <img src="./images/linkedin-icon.svg" alt="icon" width="18" height="18" />
                    </a>
                  </li>
                  <li>
                    <a href="#" class="social-link d-flex">
                      <img src="./images/twitter-icon.svg" alt="icon" width="18" height="14" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer End -->
  </div>

  <!-- Bootstrap 5 js Link -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
  <!-- jQuery -->
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <!-- lettering.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lettering.js/0.7.0/jquery.lettering.min.js"></script>
  <!-- textillate.js -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/textillate/0.4.0/jquery.textillate.min.js"></script>
  <!-- Slick slider js -->
  <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

  <script src="./js/main.js"></script>