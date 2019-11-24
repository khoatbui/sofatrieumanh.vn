<template>
  <div class="call__component">
    <a id="menu-share" href="#" class="float">
      <i class="material-icons">
        contact_support
      </i>
    </a>
    <ul>
      <li>
        <a href="https://m.me/SANXUATSOFA.TM" target="_blank">
          <img src="/images/icon/messenger.png" alt="" />
        </a>
      </li>
      <li>
        <a href="skype:0919025915?chat" target="_blank">
          <img src="/images/icon/skype.png" alt="" />
        </a>
      </li>
      <li>
        <a href="https://zalo.me/0919025915" target="_blank">
          <img src="/images/icon/zalo.png" alt="" />
        </a>
      </li>
      <li>
        <a href="tel:0919025915">
          <i class="material-icons">
            phone
          </i>
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.call__component {
  position: fixed;
  bottom: 0.8rem;
  left: 0.8rem;
  z-index: 99999;
}

.label-container {
  position: fixed;
  bottom: 48px;
  right: 105px;
  display: table;
  visibility: hidden;
}

.label-text {
  color: #fff;
  background: rgba(51, 51, 51, 0.5);
  display: table-cell;
  vertical-align: middle;
  padding: 10px;
  border-radius: 3px;
}

.label-arrow {
  display: table-cell;
  vertical-align: middle;
  color: #333;
  opacity: 0.5;
}

.float {
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 40px;
  right: 40px;
  background-color: #2d57ad;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  z-index: 1000;
  animation: bot-to-top 2s ease-out;
}

ul {
  position: fixed;
  right: 40px;
  padding-bottom: 20px;
  bottom: 50px;
  z-index: 100;
}

ul li {
  list-style: none;
  margin-bottom: 10px;
}

ul li a {
  background-color: #2d57ad;
  color: #fff;
  border-radius: 50px;
  text-align: center;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul li a img {
  height: 25px;
}
ul li a:hover {
  text-decoration: none;
}
ul:hover {
  visibility: visible !important;
  opacity: 1 !important;
}

.my-float {
  font-size: 24px;
  margin-top: 18px;
}
a#menu-share {
  display: flex;
  justify-content: center;
  align-items: center;
}
a#menu-share + ul {
  visibility: hidden;
}

a#menu-share:hover + ul {
  visibility: visible;
  animation: scale-in 0.5s;
}

a#menu-share i {
  animation: rotate-in 0.5s;
}

a#menu-share:hover > i {
  animation: rotate-out 0.5s;
}

@keyframes bot-to-top {
  0% {
    bottom: -40px;
  }
  50% {
    bottom: 40px;
  }
}

@keyframes scale-in {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes rotate-in {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes rotate-out {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>
