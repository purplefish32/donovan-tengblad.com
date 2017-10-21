import styled from 'styled-components';

const Wrapper = styled.aside`
  width: 180px;
  top: $top-height;
  left: 0;
  z-index: 904;
  display: block;
  min-height: 100%;
  background: rgba(0,0,0,.75);
  height: 100%;
  position: fixed;


  .al-sidebar-list {
    margin: 0;
    padding: 18px 0 0 0;
    list-style: none;
  }

  .al-sidebar-sublist .subitem-submenu-list {
    padding-left: 15px;
  }

  .subitem-submenu-link {
    .fa {
      top: 7px;
    }
  }

  .al-sidebar-list-item {
    display: block;
    position: relative;
    float: none;
    padding: 0;
    &.selected:not(.with-sub-menu) {
      background-color: $primary;
      a.al-sidebar-list-link {
        color: $sidebar-text;
        b {
          color: $sidebar-text;
        }
      }
    }
  }

  .al-sidebar-list-item, .ba-sidebar-sublist-item {
    &.ba-sidebar-item-expanded {
      > .al-sidebar-list-link {
        b {
          transform: rotate(180deg);
        }
      }

      > .al-sidebar-sublist {
        display: block;
      }
    }
  }

  a.al-sidebar-list-link {
    display: block;
    height: 42px;
    padding-left: 18px;
    text-shadow: none;
    font-size: 13px;
    text-decoration: none;
    color: $sidebar-text;
    line-height: 42px;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      color: $primary;
      b {
        color: $primary;
      }
    }
    i {
      margin-right: 18px;
      width: 16px;
      display: inline-block;
    }
    b {
      display: block;
      opacity: 1;
      width: 14px;
      height: 14px;
      line-height: 14px;
      text-shadow: none;
      font-size: 18px;
      position: absolute;
      right: 10px;
      top: 12px;
      padding: 0;
      text-align: center;
      color: $sidebar-text;
      transition: transform 0.2s linear;
    }
  }

  .slimScrollBar, .slimScrollRail {
    border-radius: 0px !important;
    width: 4px !important;
    left: 176px;
  }

  @mixin layout-collapsed() {
    .al-main {
      margin-left: 50px;
    }

    .al-footer {
      padding-left: 83px
    }
  }

  @mixin default-sublist() {
    padding: 0;
    list-style: none;
    position: relative;
    display: none;
    &.expanded {
      display: block;
    }
    > li {
      display: block;
      float: none;
      padding: 0;
      border-bottom: none;
      position: relative;
      a {
        display: block;
        text-shadow: none;
        font-size: 13px;
        text-decoration: none;
        color: $sidebar-text;
        padding-left: 52px;
        height: auto;
        line-height: 29px;
        &:hover {
          color: $primary;
        }
      }
      &.selected:not(.with-sub-menu) > a {
        border: none;
        background-color: $primary;
        &:hover {
          color: $sidebar-text;
        }
      }

    }
  }

  .al-sidebar-sublist {
    @include default-sublist();
  }

  .sidebar-hover-elem{
    width: 4px;
    background: $primary;
    position: absolute;
    top: -150px;
    left: 176px;
    transition: all 0.5s ease;
    transition-property: top, height;
    height: 42px;
    display: block;
  }

  .sidebar-select-elem {
    display: block;
    top: 94px;
  }

  @mixin sidebar-collapsed() {
    .al-sidebar {
      width: 52px;

      .fa-angle-down, .fa-angle-up {
        opacity: 0;
      }

      .al-sidebar-sublist {
        position: absolute;
        top: -1px;
        left: 52px;
        @include bg-translucent-dark(0.8);
        width: 0;
        display: block;
        overflow: hidden;
        transition: width 0.5s ease;
        &.slide-right {
          width: 135px;
        }
        &:before {
          display: none;
        }
        li {
          &:before {
            display: none;
          }
          a {
            padding-left: 18px;
            padding-right: 18px;
            min-width: 130px;
            white-space: nowrap;
          }
        }
      }

      .sidebar-hover-elem, .sidebar-select-elem {
        left: 48px;
      }
    }
  }

  @mixin sidebar-hidden() {
    .al-sidebar {
      width: 0;
    }
    .sidebar-hover-elem, .sidebar-select-elem {
      display: none;
    }
  }

  @mixin sidebar-overlap() {
    .al-sidebar {
      width: 180px;
      @include bg-translucent-dark(0.75);
      transition: width 0.5s ease;

      .fa-angle-down, .fa-angle-up {
        opacity: 1;
      }

      .al-sidebar-sublist {
        @include default-sublist();
        top: auto;
        left: auto;
        background: none;
        width: auto;
        overflow: visible;
        transition: none;
      }

      .sidebar-hover-elem, .sidebar-select-elem {
        left: 180px - 4;
        transition: left 0.5s ease;
      }
    }
  }

  @media (min-width: 1200px) {
    .menu-collapsed {
      @include layout-collapsed();
    }
  }

  @media (min-width: $resXS + 1) {
    .menu-collapsed {
      @include sidebar-collapsed();
    }
  }

  @media (max-width: 1200px) and (min-width: $resXS) {
    @include layout-collapsed();
  }

  @media (max-width: 1200px) {
    @include sidebar-overlap();
  }

  @media (max-width: $resXS) {
    .menu-collapsed {
      @include sidebar-hidden();
    }
    .al-main {
      margin-left: 0;
    }
    .al-footer {
      padding-left: 0;
    }
  }
`;

export default Wrapper;

//https://github.com/akveo/blur-admin/blob/f89cdf09168dc5e376e90623d7d541632354b702/src/sass/theme/components/_sidebar.scss
