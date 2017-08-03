<template>
  <div class="first">

    <nav class="navbar" style=" background-color:#fff" id="Top">
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
          Who We Are
        </a>
        <a class="navbar-item" href="#features" target="_blank" style="color:black;">
          Features
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
    <h1 class="title is-4 has-text-white" style="letter-spacing:4px;">THE ORIGINAL</h1>
    <h2 class="title has-text-grey" style="letter-spacing:10px;">CREATIVE DIGITAL DESIGNING</h2>

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
  <div class="about-us about" id="about-us">

    <h1 class="title has-text-grey-dark">We're Little Bit <strong>Different</strong></h1>
    <h2 class="title about-title-2 is-5">Introducing <strong><span style="letter-spacing:2px;">SiteDesigns</span></strong></h2>
    <div class="about-para" style="letter-spacing:1px;">We Are a company of Dev's. We have simple structure and an Ideal sized
      team engrossed with <strong>different</strong> talents. It allows us to react quickly to your needs. We believe
      our lack of <strong>middle management</strong> works best for <strong> us </strong>and our <strong> clients</strong>. So you can talk directly to the person
      who is doing your work with <strong>nothing lost</strong> in translation.

    </div>

  </div>
  <hr>
<h1 class="title has-text-centered" id="features">Features</h1>
  <div class="bubble post2"> <h1 class="chat-title">Responsive design with a mobile-first approach</h1> <br>
    <div class="portfolio-image"><figure class="image is-128x128">
    <img src="/src/assets/2.svg">
  </figure></div>
  <div class="chat-para">With years of responsive design experience you can be sure to maximise the reach of your website beyond the desktop, delivering an appropriate experience no matter where your user is.
</div>
  </div>
              <div class="bubble2 post"> <h1 class="chat-title">Loading in a flash</h1> <br>
                <div class="portfolio-image"><figure class="image is-128x128">
                <img src="/src/assets/1.svg">
              </figure></div>
              <div class="chat-para">
              How frustrating is it to wait for a webpage to load on a slow connection? Our ever evolving build processes
              are optimised to squeeze every last millisecond out of a visually rich and engaging website.</div>
            </div>


                <div class="bubble post2"> <h1 class="chat-title">A unique style to suit</h1> <br>
                            <div class="portfolio-image"><figure class="image is-128x128">
                            <img src="/src/assets/3.svg">
                          </figure></div>
                          <div class="chat-para">
                            Whether building something new or taking inspiration from existing marketing we work to create a design that is the ideal reflection of the
                            research we've undertaken, the business requirements and the feedback we receive throughout the design process.

                          </div>
                          </div>

                                      <div class="bubble2 post">
                                        <h1 class="chat-title">A functional and easy to use website is the baseline</h1> <br>
                                        <div class="portfolio-image"><figure class="image is-128x128">
                                        <img src="/src/assets/4.svg">
                                      </figure></div>
                                                <div class="chat-para">
                                                A website that just works;
                                                this is the minimum we hope to deliver on any new website.
                                                But just being functional isn't always enough to help grow a business.</div>
                                                </div><hr>
  <div class="portfolio-box corousel2">
    <div class="portfolio-image"><figure class="image is-128x128">
    <img src="/src/assets/5.svg">
  </figure></div>
    <div class="portfolio-content"><div class="portfolio-title">Pick from a custom or open-source Templates</div>
    At SiteDesigns we code almost exclusively in Vue Js, and so when it comes to Content Management(CM),
    fluidity and large open source community of developers make it the ideal choice for many blogs and websites.
  But sometimes a pre-existing CMs isn't the best fit to a particular set of requirements;
  In these instances our expert team of developers are well equipped to provide a
   bespoke solution that's well-suited to your needs..</div><hr>

1<div class="css-slider-mask" >
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
