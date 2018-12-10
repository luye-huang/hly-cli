<template>
  <div id="examples">
    <header>
      <div class="wrapper">
          <a style="font-size: 20px; font-weight: 700; padding-left: 10px; width: 256px; display: inline-block;" class="text-green fl tc">IZY</a>
          <!--<h2 style="display: inline-block;color: #777">izyUI 组件库</h2>-->
      </div>
    </header>
    <section class="m-t-80">
      <div class="wrapper">
        <nav class="navs">
          <ul>
            <li v-for="navItem in navItems">
              <router-link :to="navItem.path">{{ navItem.label }}</router-link>
            </li>
          </ul>
        </nav>
        <section class="content">
          <router-view/>
        </section>
      </div>
    </section>
    <footer></footer>
  </div>
</template>

<script>
    import { getNavItems } from '../../router/util';
    export default {
        data() {
            return {
                navItems: getNavItems()
            }
        }
    };
</script>

<style>

  #examples {
    text-align: left;
  }

  #examples {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #examples header {
    position: fixed;
    height: 60px;
    padding: 20px 0 0 0;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 888;
    background-color: white;
  }

  #examples .m-t-80 {
    margin: 80px 0 0;
  }

  #examples nav {
    position: absolute;
  }

  #examples .wrapper {
    margin: 0 auto;
    width: 1180px;
  }

  #examples .navs {
    width: 200px;
  }

  #examples .navs ul li {
    display: list-item;
    text-align: left;
  }

  #examples .navs ul li a {
    line-height: 40px;
    height: 40px;
    color: #444;
    font-size: 14px;
    font-weight: 500;
    padding: 0 10px;
    width: 100%;
    display: inline-block;
    text-transform: capitalize;
  }

  #examples .navs ul li:hover a, #examples .navs ul li a.actived{
    background-color: #f2fdf7;
    color: #1dc160;
  }

  #examples .wrapper .content {
    padding-left: 256px;
  }

  #examples .tc {
    text-align: left;
  }

  #examples .text-green {
    color: #1dc160;
  }

  #examples .fl {
    float: left;
  }

  section .izy-select {
    width: 200px;
  }

  /** demo page ***/
  .title, .demo, .attrs {
    margin-bottom: 40px;
  }

  a {
    color: #1dc160;
  }
  .tl {
    text-align: left;
  }

  .title, .demo, .attrs {
    margin-bottom: 40px;
  }

  .demo {
    border: 1px solid #ebeef5;
  }
  .demo .header {
    padding: 10px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
  }

  .demo .header .oper {
    font-size: 18px;
    color: #999;
    float: right;
    cursor: pointer;
    vertical-align: top;
    line-height: 18px;
  }

  .demo .body {
    padding: 18px 20px;
  }

  #example table {
    border: none;
  }

  table th {
    text-align: left;
    white-space: nowrap;
    color: #666;
    font-weight: 400;
  }

  #examples table th, #examples table td {
    border-bottom: 1px solid #d8d8d8;
    border-top: none;
    border-left: none;
    border-right: none;
    padding: 15px;
    max-width: 250px;
  }

  tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    background-color: #fff;
    font-size: 14px;
    margin-bottom: 45px;
    line-height: 1.5em;
  }
</style>
