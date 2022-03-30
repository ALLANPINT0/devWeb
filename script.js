// Generate series of `.navbar-expand-*` responsive classes for configuring
// where your navbar collapses.
.navbar-expand {
    @each $breakpoint in map-keys($grid-breakpoints) {
      $next: breakpoint-next($breakpoint, $grid-breakpoints);
      $infix: breakpoint-infix($next, $grid-breakpoints);
  
      // stylelint-disable-next-line scss/selector-no-union-class-name
      &#{$infix} {
        @include media-breakpoint-up($next) {
          flex-wrap: nowrap;
          justify-content: flex-start;
  
          .navbar-nav {
            flex-direction: row;
  
            .dropdown-menu {
              position: absolute;
            }
  
            .nav-link {
              padding-right: $navbar-nav-link-padding-x;
              padding-left: $navbar-nav-link-padding-x;
            }
          }
  
          .navbar-nav-scroll {
            overflow: visible;
          }
  
          .navbar-collapse {
            display: flex !important; // stylelint-disable-line declaration-no-important
            flex-basis: auto;
          }
  
          .navbar-toggler {
            display: none;
          }
  
          .offcanvas-header {
            display: none;
          }
  
          .offcanvas {
            position: inherit;
            bottom: 0;
            z-index: 1000;
            flex-grow: 1;
            visibility: visible !important; // stylelint-disable-line declaration-no-important
            background-color: transparent;
            border-right: 0;
            border-left: 0;
            @include transition(none);
            transform: none;
          }
          .offcanvas-top,
          .offcanvas-bottom {
            height: auto;
            border-top: 0;
            border-bottom: 0;
          }
  
          .offcanvas-body {
            display: flex;
            flex-grow: 0;
            padding: 0;
            overflow-y: visible;
          }
        }
      }
    }
  }