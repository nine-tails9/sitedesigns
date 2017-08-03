<template>
  <div class="first">

    <nav class="navbar" style=" background-color: #fff;">
    <div class="navbar-brand">
      <a class="navbar-item" href="http://www.sitedesigns.xyz">
        <img src="/src/assets/logo.png" width="50%" height="500%">
      </a>



      <div class="navbar-burger burger" data-target="navMenuExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navMenuExample" class="navbar-menu">

      <div class="navbar-end">
        <a class="navbar-item" href="#about-us" target="_blank" style="color:black;">
          Who We are
        </a>
        <a class="navbar-item" href="#portfolio" target="_blank" style="color:black;">
          Web Portfolio
        </a>
        <a class="navbar-item" href="#Pricing" target="_blank" style="color:black;">
          Pricing
        </a>
  	  <a class="navbar-item" href="#Contact-Us" target="_blank" style="color:black;">
          Contact Us
        </a>
        <a class="navbar-item"><iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2FSiteDesigns.xyz&layout=button_count&size=large&mobile_iframe=true&width=84&height=28&appId"
          width="84" height="35" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" ></iframe></a>
      </div>
    </div>
  </nav>
  <div class="bg">
    <h1 class="title1">Project tracking for distributed companies.</h1>
    <h2 class="subtitle1"><br>Are you spread across different cities and time zones? Some of your team traveling?
       We built Blossom for you.</h2>

       <div id = "container">
         <img src="src/assets/thumbnail.png" class="thumbnail" ><div class="play-button" id="btn"></div></img>
         <svg height="0" xmlns="http://www.w3.org/2000/svg">
      <filter id="drop-shadow">
          <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
          <feOffset dx="12" dy="12" result="offsetblur"/>
          <feFlood flood-color="rgba(0,0,0,0.5)"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
          </feMerge>
      </filter>
  	</svg>

           <div id = "overlay"></div>
                   </div>
           <div id = "video">
           </div>

  </div>
  <div class="about-us" id="about-us">

    <h1 class="about-title">We're a little bit different</h1>
    <h2 class="about-title-2">introducing Bronco</h2>
    <div class="about-para">At Bronco, we try and do things differently. Our passion and success is down to a team of talented experts
    working with a range of clients across multiple industries. We have all our resource and
    expertise in-house so who you talk to and meet
    
    </div>

  </div>
  <hr>

  <div class="bubble"> <h1 class="chat-title">Prioritising usability to increase conversion</h1> <br>
    <div class="portfolio-image"><figure class="image is-128x128">
    <img src="/src/assets/1.svg">
  </figure></div>
  <div class="chat-para">It's simple. The easier a website is to use the more likely your users become customers.
    Building on years of experience gives us an understanding of the barriers that affect conversion and how to avoid these
  </div>
  </div>
              <div class="bubble2"> <h1 class="chat-title">Prioritising usability to increase conversion</h1> <br>
                <div class="portfolio-image"><figure class="image is-128x128">
                <img src="/src/assets/2.svg">
              </figure></div>
              <div class="chat-para">It's simple. The easier a website is to use the more likely your users become customers.
                Building on years of experience gives us an understanding of the barriers that affect conversion and how to avoid these</div>
               </div>


                <div class="bubble"> <h1 class="chat-title">Prioritising usability to increase conversion</h1> <br>
                            <div class="portfolio-image"><figure class="image is-128x128">
                            <img src="/src/assets/3.svg">
                          </figure></div>
                          <div class="chat-para">It's simple. The easier a website is to use the more likely your users become customers.
                            Building on years of experience gives us an understanding of the barriers that affect conversion and how to avoid these</div>
                          </div>

                                      <div class="bubble2">
                                        <h1 class="chat-title">Prioritising usability to increase conversion</h1> <br>
                                        <div class="portfolio-image"><figure class="image is-128x128">
                                        <img src="/src/assets/4.svg">
                                      </figure></div>
                                                <div class="chat-para">It's simple. The easier a website is to use the more likely your users become customers.
                                                  Building on years of experience gives us an understanding of the barriers that affect conversion and how to avoid these</div>
                                                </div><hr>
  <div class="portfolio-box">
    <div class="portfolio-image"><figure class="image is-128x128">
    <img src="/src/assets/5.svg">
  </figure></div>
    <div class="portfolio-content"><div class="portfolio-title">Responsive design with a mobile-first approach</div>
  At Bronco we code almost exclusively in PHP, and so when it comes to Content Management Systems (CMS) we've built up a lot of experience with WordPress.
  Its fluidity and large community of plugin developers make it the ideal choice for many blogs and websites.</div><hr>

<div class="css-slider-mask" >
  <ul class="css-slider with-responsive-images with-selection-disabled with-reflection with-fade-in">
    <li class="slide" tabindex="1" id="l1">
      <span class="slide-outer">
        <span class="slide-inner">
          <!-- each slide-gfx needs a unique id if you wish to use reflections, you will also need to update .with-reflection in core.css //-->
          <span class="slide-gfx" id="s1">
            <img src="/src/layouts/15.jpg" />
          </span>
        </span>
      </span>
    </li>
    <li class="slide" tabindex="1" id="l2">
      <span class="slide-outer">
        <span class="slide-inner">
          <span class="slide-gfx" id="s2">
            <img src="/src/layouts/14.jpg" />
          </span>
        </span>
      </span>
    </li>
    <li class="slide" tabindex="1" id="l3">
      <span class="slide-outer">
        <span class="slide-inner">
          <span class="slide-gfx" id="s3">
            <img src="/src/layouts/13.jpg" />
          </span>
        </span>
      </span>
    </li>
    <li class="slide" tabindex="1" id="l4">
      <span class="slide-outer">
        <span class="slide-inner">
          <span class="slide-gfx" id="s4">
            <img src="/src/layouts/12.jpg" />
          </span>
        </span>
      </span>
    </li>
    <li class="slide" tabindex="1" id="l5">
      <span class="slide-outer">
        <span class="slide-inner">
          <span class="slide-gfx" id="s5">
            <img src="/src/layouts/11.jpg" />
          </span>
        </span>
      </span>
    </li>
  </ul>
</div>
<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient gradientUnits="objectBoundingBox" id="gradient" x2="0" y2="1">
      <stop stop-color="rgba(0,255,255,0.00)" offset="0.0"/>
      <stop stop-color="rgba(0,255,255,0.30)" offset="0.5"/>
      <stop stop-color="rgba(0,255,255,1.00)" offset="1.0"/>
    </linearGradient>
    <radialGradient id="gradient2">
        <stop offset="10%" stop-color="rgba(255,255,255,1)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0)"/>
    </radialGradient>
    <mask id="mask" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox" x="0" y="0" width="100%" height="100%">
      <ellipse fill="url(#gradient2)" cx="0" cy="1" rx="1" ry="0.8"/>
      <ellipse fill="url(#gradient2)" cx="1" cy="1" rx="1" ry="0.8"/>
    </mask>
  </defs>
</svg>
  </div>
</div>

</template>
