.white {
    color: #FFFFFF;
}

.NSGcenter {
    text-align: center;
}

/* These will line up from left if needed
#NSGCircleNavBar {
    display: inline;
    float: left;
}
#NSGFontNavBar {
    clear: none;
    display: inline;
    float: left;
    margin-left: 10px;
}
*/

/*.NSGMiddle {
    vertical-align: middle;
}
*/

/* Jumbor Header Home Page*/
.jumboHeaderText {
    text-align: center;
    /*vertical-align: middle;*/
    padding-top: 20px;
    color: #FFFFFF;
    /*position: relative;
    top: 50%;
    transform: translateY(-50%);*/
}

.jumbotronInnerShadow {
    -webkit-box-shadow: inset 0px 0px 20px 10px rgba(0,0,0,0.1);
    -moz-box-shadow: inset 0px 0px 20px 10px rgba(0,0,0,0.1);
    box-shadow: inset 0px 0px 20px 10px rgba(0,0,0,0.1);
}

/* Navbar Drop Shadow */
.navbarDropShadow {
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.42);
    -moz-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.42);
    box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.42);
}

.navbarInnerShadow {
    -webkit-box-shadow: inset 0px 0px 15px 5px rgba(0,0,0,0.1);
    -moz-box-shadow: inset 0px 0px 15px 5px rgba(0,0,0,0.1);
    box-shadow: inset 0px 0px 15px 5px rgba(0,0,0,0.1);
}

#vertAlignJumbo {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

/* This counters the spacing issue on the product list page with <a> links */
.aLinkSpacingFix p a {
    padding: 0em !important;
    display: inline !important;
    text-decoration: none;
}

.NSGCategoryButtonPadding {
    margin: 0px 25px 25px 25px;
}

.NSGCategoryButton {
    -webkit-box-shadow: 8px 8px 15px 0px rgba(0,0,0,0.42);
    -moz-box-shadow: 8px 8px 15px 0px rgba(0,0,0,0.42);
    box-shadow: 8px 8px 15px 0px rgba(0,0,0,0.42);
}


/* Fixes row issues with Category List page */
.panel-category-list ul li a h5 {
    height: 50px;
}

/* Fixes row issues with Product List page */
.panel-product-list ul li h3 {
    font-size: 15px;
}

.shoppingCartIndicator ul li a {
    color: #FFFFFF;
}

.navLogo {
    max-width: 100%;
    max-height: 30px;
}

/* Fixed Product Image */
.fixedProductImage {
    position: fixed !important;
}
/* Alters image size on main product page - overrides same class in bootstrap-451.css */
.product-image-large {
  margin: 0 auto;
  max-height: 400px;
  max-width: 100%;
}
.testy {
    max-height: 200px;
}
/*.NSGCategoryButton:hover {
    margin: 0px 25px 30px 25px;
}*/

/*.NSGCategoryButtonPadding {
    padding: 0px 25px 25px 25px;
}*/

/*.NSGCategoryButtonPadding:hover {
    padding: 0px 25px 25px 25px;
}*/

.NSGCategoryTitle {
    color: #0B3648;
    font-size: 13pt;
    font-style: bold;
    /* offset-x | offset-y | blur-radius | color */
    /*text-shadow: 2px 2px 5px #000000;*/
}

.NSGCategoryTitle:hover {
    color: #E04F4F;
}

.officialCNCS {
    font-family:'Source Sans Pro', arial, serif;
    font-size: 12pt;
    font-style: italic;
    text-align: left;
    width: 85%;
    /*margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 15px;
    margin-left: 10px;*/
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 15px;
    padding-left: 10px;
}

/*This is used for the header when closed for holidays*/
.NSGHoliday {
    font-family:'Source Sans Pro', arial, serif;
    font-size: 25pt;
    font-style: italic;
    font-weight: bold;
    color: #000000;
    width: 100%;
    text-align: center;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 15px;
    padding-left: 10px;
    /*text-shadow: 2px 2px 4px #A1A1A1;*/
}

/*Used when we have tech difficulties*/
.phoneDown {
    font-family:'Source Sans Pro', arial, serif;
    font-size: 17pt;
    color: red;
    font-style: italic;
    font-weight: bold;
    text-align: left;
    width: 85%;
    padding-top: 5px;
    padding-right: 5px;
    padding-bottom: 15px;
    padding-left: 10px;
    /*text-shadow: 2px 2px 4px #A1A1A1;*/
}

/*Footer CSS*/

* {
    margin: 0;
}

.flushFooter, .push {
    height: 210px; /* .push must be the same height as .footer */
}

.NSGwrapper {
    min-height: 100%;
    margin: 0 auto -210px; /* the bottom margin is the negative value of the footer's height */
}

.NSGfooter {
    /*margin-right: 5em;
    margin-left: 4em;
    margin-top: 0px;
    margin-bottom: 0px;*/
    font-size: 13pt;
    margin-top: 0px;
    clear: both;
    background-color: #dedede;
    height: 150px;
    width: 100%;
    bottom: 0;
    padding: 30px 0px;
    /*padding-top: 5em;
    padding-right: 3px;
    padding-bottom: 3px;
    padding-left: 5px;*/
    /*background-image: url(Images/IB.png);
    background-repeat: no-repeat;
    background-position: 5px 5px;*/
}

.NSGxsFooter {
    margin-top: 0px;
    clear: both;
    background-color: #dedede;
    height: 150px;
    bottom: 0;
    padding: 45px 0px;
    /*padding-top: 5em;
    padding-right: 3px;
    padding-bottom: 3px;
    padding-left: 5px;*/
    /*background-image: url(Images/IB.png);
    background-repeat: no-repeat;
    background-position: 5px 5px;*/
}

.NSGxxsFooter {
    margin-top: 0px;
    clear: both;
    background-color: #dedede;
    height: 150px;
    bottom: 0;
    padding: 55px 0px;
    /*padding-top: 5em;
    padding-right: 3px;
    padding-bottom: 3px;
    padding-left: 5px;*/
    /*background-image: url(Images/IB.png);
    background-repeat: no-repeat;
    background-position: 5px 5px;*/
}

.footLeft {
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0em;
    padding-right: 3px;
    padding-bottom: 0px;
    padding-left: 55px;
    float: left;
}

.xsFootLeft {
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0em;
    padding-right: 3px;
    padding-bottom: 0px;
    padding-left: 25px;
    float: left;
    width: 100%;
    max-width: 225px;
}
.xxsFootLeft {
    margin-right: 0px;
    margin-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-top: 0em;
    padding-right: 3px;
    padding-bottom: 0px;
    padding-left: 20px;
    float: left;
    width: 100%;
    max-width: 180px;
}

.footRight {
    margin-right: 0em;
    margin-left: 0em;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-right: 25px;
    float: right;
}

.xsFootRight {
    margin-right: 0em;
    margin-left: 0em;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-right: 10px;
    float: right;
    font-size: 2vw;
}
.xxsFootRight {
    margin-right: 0em;
    margin-left: 0em;
    margin-top: 0px;
    margin-bottom: 0px;
    padding-right: 10px;
    float: right;
    font-size: 1.8vw;
}

.socialFooter {
    margin-top: 0px;
    clear: both;
    background-color: #2F2D2E;
    height: 60px;
    width: 100%;
    bottom: 0;
    padding: 10px 0px 0px 60px;
}

/* Use this to transition icons */
.iconTrans,
.iconTrans:hover,
.iconTrans:focus {
  -webkit-transition: all ease-in-out 0.5s;
  -moz-transition: all ease-in-out 0.5s;
  -ms-transition: all ease-in-out 0.5s;
  -o-transition: all ease-in-out 0.5s;
  transition: all ease-in-out 0.5s;
}

.socialFooter > .text-left > .iconTrans {
    color: #F7F7F7; /*E04F4F*/
}

.socialFooter > .text-left > .iconTwitter:hover {
    color: #00ACED !important; /* 2B2B2B */
}
.socialFooter > .text-left > .iconFacebook:hover {
    color: #3B5998 !important; /* 2B2B2B */
}
.socialFooter > .text-left > .iconInstagram:hover {
    color: #517fA4 !important; /* 2B2B2B */
}
.socialFooter > .text-left > .iconLinkedIn:hover {
    color: #007BB6 !important; /* 2B2B2B */
}

.vertIcon {
    padding-left: 5px;
}

.contactFooterText {
    font-size: 4vw;
}

/*Gives items a list style*/
.prod-desc-list-style ul {
    list-style-type: circle;
    margin-left:25px;
}


/* Shopping Cart Circle */
.shoppingCartNavBar li a i:first-of-type{
    border-radius: 50%;
    border: 1px solid #fff;
    text-align: center;
    padding: 10px;
    margin-top: -10px;
}

/* Product Image */
.fixedImage {
    position: fixed;
    padding: 1500px 500px 50px 80px;
}

/* Search Bar */
.customSearchBar {
    float: right !important;
    width: 65%;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
}

/*PP Item Timetable settings*/

.tablePPTimeline {
    border:2px;
    border-style: solid;
    border-color: #0B3648;
    border-collapse:collapse;
    box-shadow: 5px 5px 10px 0px rgba(119, 119, 119, 0.3);
    -moz-box-shadow: 5px 5px 10px 0px rgba(119, 119, 119, 0.3);
    -webkit-box-shadow: 5px 5px 10px 0px rgba(119, 119, 119, 0.3);
    background-color: #dedede;
}

.thPPTimeline {
    border:2px;
    border-style: solid;
    border-color: #0B3648;
    border-collapse:collapse;
    padding:5px;
  text-align:center;
}

.tdPPTimeline {
  font-family: arial,helvetica,sans-serif;
  font-size: 14px;
  font-weight: bold;
    border:2px;
    border-style: solid;
    border-color: #0B3648;
    border-collapse:collapse;
    padding:5px;
    text-align:center;
}

#fontProduct {
    color: #000000;
}

#fontProgram {
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    color: #000000;
    text-indent: 0px;
    width: 100%;
    margin-top: 8px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
}

#footerFont {
    font-size: 10px;
}

#mainbkg {
    /*background-color: #e9e9e9;*/
    margin-top: 0px;
    margin-right: 20px;
    margin-bottom: 0px;
    margin-left: 15em;
    padding-top: 1em;
    padding-right: 0px;
    padding-bottom: .25em;
    padding-left: 3em;
}

#mainnav {
    /*background-color: #136ca8;*/
    margin-right: 5px;
    margin-left: 0em;
    margin-top: 0em;
    margin-bottom: 0px;
    text-align: left;
    padding-top: 0em;
    padding-right: 0em;
    padding-bottom: 0em;
    padding-left: 0em
    /*background-image: ;
    border-top-width: 4px;
    border-top-style: solid;
    border-top-color: #73a2c7;*/
}

/* Theme CSS Edits */
.container .navbar-nav li.active a:hover {
  background-color: #99C24D; /*#A8AB00*/
}
.container .navbar-nav li.active a:focus {
  background-color: #99C24D; /*#A8AB00*/;
}
.navbar-default .navbar-nav .open > a {
  background-color: #99C24D; /*#A8AB00*/
}
.navbar-default .navbar-nav .open > a:hover {
  background-color: #99C24D; /*#A8AB00*/
}
.navbar-default .navbar-nav .open > a:focus {
  background-color: #99C24D; /*#A8AB00*/
}
.navbar-nav li.dropdown li > a:hover {
  background-color: #99C24D; /*#A8AB00*/
}
.navbar-nav li.dropdown li > a:focus {
  background-color: #99C24D; /*#A8AB00*/
}
.navbar .container .navbar-nav li.active .fa-caret-down {
  color: #99C24D; /*#A8AB00*/
}
.navbar-nav li.dropdown li > a {
  color: #333333;
}
.navbar-nav li.dropdown li > a:hover {
  color: #FFFFFF;
}
.navbar .container .navbar-nav.pull-right li a i:first-of-type {
  border-color: #FFFFFF;
}
.badge {
  background-color: undefined;
}
/* Change Shopping Cart Indicator Number Color */
.badge {
  color: #FFFFFF;
}
.navbar-default {
  background-color: #0B3648; /*0B3648*/
}
.container .navbar-nav li a {
  color: #FFFFFF;
}
.container .navbar-nav li.active > a {
  background-color: #99C24D; /*#A8AB00*/
}
.container .navbar-nav li.active > a {
  color: undefined;
}
.navbar-default, .dropdown-mega {
  border-color: ;
}
body {
  background-color: #F7F7F7;
}
body {
  color: #333333;
}
.text-primary {
  color: #0B3648;
}
.text-info {
  color: #31708F;
}
body a {
  color: #E04F4F;
}
.btn-primary {
  background-color: #0B3648;
}
.btn-primary, .btn-primary:hover {
  color: #FFFFFF;
}
.btn-primary {
  border-color: #081B24;
}
.btn-primary:hover {
  background-color: #051118;
}
.btn-default {
  background-color: #FFFFFF;
}
.btn-default, .btn-default:hover {
  color: #333333;
}
.btn-default {
  border-color: #CCCCCC;
}
.btn-default:hover {
  background-color: #EBEBEB;
}
.btn-info {
  background-color: #5BC0DE;
}
.btn-info, .btn-info:hover {
  color: #FFFFFF;
}
.btn-info {
  border-color: #46B8DA;
}
.btn-info:hover {
  background-color: #39B3D7;
}
.btn-success {
  background-color: #5CB85C;
}
.btn-success, .btn-success:hover {
  color: #FFFFFF;
}
.btn-success {
  border-color: #4CAE4C;
}
.btn-success:hover {
  background-color: #00AB41;
}
.btn-warning {
  background-color: #f0ad4e;
}
.btn-warning, .btn-warning:hover {
  color: #FFFFFF;
}
.btn-warning {
  border-color: #EEA236;
}
.btn-warning:hover {
  background-color: #ED9C28;
}
.btn-danger {
  background-color: #E04F4F; /*D9534F*/
}
.btn-danger, .btn-danger:hover {
  color: #FFFFFF;
}
.btn-danger {
  border-color: #D43F3A;
}
.btn-danger:hover {
  background-color: #D2322D;
}
.jumbotron {
  background-color: #3E7CB1; /*3E7CB1*/
}
h2 .jumbotron {
  color: #FFFFFF;
}
.panel-primary .panel-heading .panel-title {
  background-color: #cf5c36; /*002A45*/
}
.panel-primary .panel-heading .panel-title {
  color: #FFFFFF;
}
.panel-default .panel-heading .panel-title {
  background-color: #F5F5F5;
}
.panel-default .panel-heading .panel-title {
  color: #333333;
}
.panel {
  background-color: #FFFFFF;
}
.panel-footer {
  background-color: #F5F5F5;
}
.panel-category-list .well {
  background-color: #FFFFFF;
}
.panel-category-list .well h5 {
  color: #333333;
}
.panel-category-list .well {
  border-color: #F7F7F7;
}
/* Adjust product list border/backgrounds $ak */
.panel-product-list {
    border-radius: 0px;
    border-color: transparent;
}
.panel-product-list .well {
  background-color: transparent;
}
.panel-product-list .aLinkSpacingFix {
  color: #333333;
}
.panel-product-list .well {
  border-color: transparent;
}/*Changes size of images on category page*/
.thumbnail img {
  max-height: 100px; /*must match smallest size of thumbnail image*/
  max-width: 100%;
  margin: 0 auto 15px;
}

/* Float Shadow */
.hvr-float-shadow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    position: relative;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
}
.hvr-float-shadow:before {
    pointer-events: none;
    position: absolute;
    z-index: -1;
    content: '';
    top: 100%;
    left: 5%;
    height: 10px;
    width: 90%;
    opacity: 0;
    background: -webkit-radial-gradient(center, ellipse, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0) 80%);
    /* W3C */
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform, opacity;
    transition-property: transform, opacity;
}
.hvr-float-shadow:hover, .hvr-float-shadow:focus, .hvr-float-shadow:active {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    /* move the element up by 5px */
}
.hvr-float-shadow:hover:before, .hvr-float-shadow:focus:before, .hvr-float-shadow:active:before {
    opacity: 1;
    -webkit-transform: translateY(5px);
    transform: translateY(5px);
    /* move the element down by 5px (it will stay in place because it's attached to the element that also moves up 5px) */
}

/* Grow */
.hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}

.hvr-grow:hover,
.hvr-grow:focus,
.hvr-grow:active {
    transform: scale(1.1);
}
