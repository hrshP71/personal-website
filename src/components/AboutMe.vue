<template>
  <section id="secondSection">
    <div class="container">
      <div class="row about-me">
        <div class="col-12 me-card">
          <div class="personal-information">
            <p>Özgür Seyidoğlu</p>
            <p>Web Frontend Engineer &amp; Mobile Frontend Developer</p>
          </div>
          <div class="row tech-stack">
            <div
              class="col-6 col-lg-3"
              @mouseenter="hover1 = true"
              @mouseleave="hover1 = false"
              :class="{ active: hover1 }"
            >
              <div class="spinner-card">
                <font-awesome-icon
                  class="icons html"
                  :icon="[ 'fab', 'html5' ]"
                />
              </div>
              <div class="backcard">
                <ul>
                  <li>
                    UI/UX
                  </li>
                  <li>
                    Responsive
                  </li>
                  <li>
                    Structured
                  </li>
                  <li>
                    SEO Principles
                  </li>
                  <li>
                    Custom grids
                  </li>
                  <li>
                    Canvas
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-6 col-lg-3"
              @mouseenter="hover2 = true"
              @mouseleave="hover2 = false"
              :class="{ active: hover2 }"
            >
              <div class="spinner-card">
                <font-awesome-icon
                  class="icons css"
                  :icon="[ 'fab', 'css3' ]"
                />
              </div>
              <div class="backcard">
                <ul>
                  <li>
                    UI/UX
                  </li>
                  <li>
                    Responsive
                  </li>
                  <li>
                    Preprocessors
                  </li>
                  <li>
                    Animations
                  </li>
                  <li>
                    SMACSS
                  </li>
                  <li>
                    Flexbox
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-6 col-lg-3"
              @mouseenter="hover3 = true"
              @mouseleave="hover3 = false"
              :class="{ active: hover3 }"
            >
              <div class="spinner-card">
                <font-awesome-icon
                  class="icons js"
                  :icon="[ 'fab', 'js' ]"
                />
              </div>
              <div class="backcard">
                <ul>
                  <li>
                    Vanilla JS
                  </li>
                  <li>
                    ES6+
                  </li>
                  <li>
                    Semantic
                  </li>
                  <li>
                    Animations
                  </li>
                  <li>
                    No Libraries if no need
                  </li>
                  <li>
                    Performance &amp; Reusability
                  </li>
                </ul>
              </div>

            </div>
            <div
              class="col-6 col-lg-3"
              @mouseenter="hover4 = true"
              @mouseleave="hover4 = false"
              :class="{ active: hover4 }"
            >
              <div class="spinner-card">
                <font-awesome-icon
                  class="icons vue"
                  :icon="[ 'fab', 'vuejs' ]"
                />
              </div>
              <div class="backcard">
                <ul>
                  <li>
                    Absolutely Love Vue!
                  </li>
                  <li>
                    Template &amp; CLI
                  </li>
                  <li>
                    Atomic components
                  </li>
                  <li>
                    Router
                  </li>
                  <li>
                    Vuex
                  </li>
                  <li>
                    Nuxt
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-3">
              <div class="spinner-card">
                <font-awesome-icon
                  class="icons gulp"
                  :icon="[ 'fab', 'gulp' ]"
                />
              </div>
              <div class="backcard">
                <ul>
                  <li>
                    Prefered Task Runner
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-lg-3">
              <div class="spinner-card">
                <div class="icons-not-fa">
                  <svg
                    width="50%"
                    height="50%"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin meet"
                  >
                    <path
                      d="M237.248 18.752c12.04 12.04 18.291 27.122 18.748 45.247V192c-.457 18.12-6.707 33.207-18.748 45.247-12.04 12.04-27.127 18.291-45.251 18.752H63.999c-18.125-.46-33.207-6.711-45.247-18.752C6.712 225.208.46 210.121 0 192.001V64c.46-18.125 6.711-33.207 18.752-45.247C30.792 6.712 45.874.46 63.999 0h127.998c18.124.46 33.211 6.711 45.251 18.752zm-17.655 103c-4.023-4.002-6.114-9.024-6.28-15.066V64c-.128-6.042-2.202-11.072-6.221-15.091-4.02-4.023-9.054-6.093-15.095-6.22h-21.312v106.626L85.315 42.687H63.999c-6.042.128-11.072 2.198-15.091 6.221-4.023 4.02-6.093 9.05-6.22 15.09v42.688c-.167 6.042-2.258 11.064-6.281 15.066-4.02 3.997-9.05 6.08-15.091 6.246 6.041.17 11.072 2.253 15.09 6.25 4.024 4.002 6.115 9.024 6.281 15.066V192c.128 6.037 2.198 11.072 6.221 15.091 4.02 4.02 9.05 6.093 15.09 6.22h21.317V106.687l85.37 106.627h21.312c6.041-.128 11.076-2.202 15.095-6.221 4.02-4.02 6.093-9.054 6.22-15.09v-42.688c.167-6.042 2.258-11.064 6.281-15.066 4.02-3.997 9.05-6.08 15.091-6.25-6.041-.167-11.072-2.249-15.09-6.246z"
                      fill="#3C5AFD"
                    />
                  </svg>
                </div>

              </div>
            </div>
            <div class="col-6 col-lg-3">
              <div class="spinner-card">
                <div class="icons-not-fa">
                  <svg
                    height="40%"
                    viewBox=".29 .22 77.26 95.75"
                    width="40%"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <path
                        d="m48.75 95.97-25.91-25.74 14.32-14.57 40.39 40.31z"
                        fill="#02539a"
                      />
                      <g fill="#45d1fd">
                        <path
                          d="m22.52 70.25 25.68-25.68h28.87l-39.95 39.95z"
                          fill-opacity=".85"
                        />
                        <path d="m.29 47.85 14.58 14.57 62.2-62.2h-29.02z" />
                      </g>
                    </g>
                  </svg>
                </div>
              </div>

            </div>
            <div class="col-6 col-lg-3">
              <div class="spinner-card">
                <div class="icons-not-fa">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70%"
                    height="21%"
                    viewBox="2.146 180.818 494.707 139.364"
                  >
                    <path
                      d="M143.491 235.256l.001-.006-3.953 14.007 3.952-14.001zM163.818 265.664l-4.355-.025 4.355.025zM162.698 286.583h.004l-26.093.095 26.089-.095zM168.169 265.689l-4.357-.025 4.357.025zM164.985 284.805l4.545-17.334-4.545 17.338v-.004zM261.055 204.977l-8.466 39.804 8.466-39.804zM239.29 204.977l-6.428 29.735 6.428-29.738v.003z"
                      fill="#6ba0ab"
                    />
                    <path
                      d="M259.605 203.186h-18.106c-1.004 0-2.001.806-2.216 1.788l-6.428 29.737-6.428 29.738c-.213.982-1.209 1.785-2.213 1.785h-12.815c-12.679 0-11.212-8.771-8.615-20.783l.078-.363.285-1.514c.017-.098.037-.196.053-.285l.579-3.083.62-3.305c.189-.996.475-2.453.662-3.368l2.922-14.277 2.924-14.278c.202-.984-.458-1.793-1.462-1.793H190.86c-1.005 0-2 .809-2.205 1.791l-3.996 18.958-3.995 18.956c-.004.008-.005.021-.006.029l-.372 1.762c-4.603 21.014-3.382 41.051 21.632 41.678.409.013.726.016.726.016h39.265c1.004 0 1.999-.807 2.209-1.791l8.468-39.801 8.467-39.805c.208-.986-.444-1.791-1.448-1.792zM331.834 266.441c1.006 0 1.664.808 1.462 1.789l-1.759 8.595M329.782 285.423l1.757-8.599-1.758 8.601.001-.002zM327.577 287.23l.008-.002c-5.327.043-21.339.164-33.374.164 14.646.001 33.365-.162 33.366-.162zM283.41 255.374c-.016-.94 1.057-2.562 2.062-2.562l-2.265-.037c-1.016 10.246.203 2.599.203 2.599z"
                      fill="#6ba0ab"
                    />
                    <path
                      d="M295.861 287.391c-.115 0-.234 0-.353.002.119-.002.238-.002.353-.002zM331.834 266.441c1.006 0 1.664.808 1.462 1.789l-1.759 8.595-.286 1.401M304.434 287.368h-.073.073zM299.988 287.383h-.261.261zM298.632 287.387c-.146 0-.286 0-.427.004.141-.004.281-.004.427-.004zM297.252 287.391h-.374.374zM299.729 287.383l-1.097.002 1.097-.002zM304.361 287.368zM327.59 287.229c-3.904.03-13.547.104-23.163.144 9.61-.039 19.256-.114 23.163-.144zM329.782 285.426l1.473-7.199-1.474 7.205.001-.006zM298.208 287.391h-.956.956zM295.507 287.393h-1.292 1.292zM296.874 287.391h-1.019 1.019zM32.029 255.589l2.812-12.467-3.215 14.252-3.086 14.517 2.705-12.725c.207-.986.562-2.596.784-3.577zM65.69 202.976H45.807c-1.006 0-2.009.803-2.233 1.782l-1.885 8.322-1.885 8.325c-.222.979.418 1.782 1.425 1.782h20.038c1.004 0 2.003-.803 2.219-1.785l1.822-8.322 1.822-8.316v-.002c.213-.983-.433-1.786-1.44-1.786zM61.363 230.659v-.002l-5.832 26.979 5.832-26.977zM3.601 320.053s10.023.129 16.395.129c-4.84 0-12.833-.09-16.403-.131l.01.002h-.002zM37.652 230.655l-2.815 12.467 2.815-12.467z"
                      fill="#6ba0ab"
                    />
                    <path
                      d="M59.925 228.871H39.884c-1.005 0-2.009.803-2.231 1.785l-2.815 12.468-2.812 12.468c-.222.98-.576 2.592-.784 3.574l-2.705 12.725-2.703 12.729c-.21.979-.642 2.565-.964 3.521 0 0-3.743 11.14-10.038 11.012a94.583 94.583 0 0 1-.786-.014c-3.049-.06-5.446-.103-5.446-.103h-.004c-1.003-.017-2.012.771-2.247 1.743l-2.078 8.736-2.076 8.731c-.233.978.397 1.78 1.396 1.798 3.569.044 11.563.137 16.403.137 15.722 0 24.009-8.715 29.322-33.777l6.218-28.771 5.832-26.979c.212-.979-.438-1.783-1.441-1.783zM344.604 286.372c-1.005 0-1.653-.806-1.441-1.79l15.075-70.614M365.555 284.58l6.101-30.141-6.101 30.141z"
                      fill="#6ba0ab"
                    />
                    <path
                      d="M343.377 285.479c-.123-.492-.051-1.699.162-2.684l7.155-33.518-7.537 35.305c-.212.984.438 1.792 1.439 1.792h1.831c-1 0-2.929-.403-3.05-.895zM364.363 285.971c-.547.221-1.818.401-2.825.401h1.831c1.005 0 1.992-.806 2.188-1.792l.362-1.792c-.196.985-1.007 2.959-1.556 3.183zM368.607 269.51l2.688-13.302c-.001.008-.002.021-.005.026l-2.683 13.276zM428.092 218.698l.831 3.431c.229.982-.406 1.779-1.409 1.782M365.921 282.789l2.688-13.278-2.688 13.278zM427.266 215.184l.822 3.515-.822-3.515zM371.297 256.209c.2-.984.53-2.579.74-3.557l2.874-13.464-3.257 15.253-.357 1.768zM358.48 212.811c-.201.95-.456 2.15-.631 2.945l-7.149 33.521 7.537-35.308.243-1.158z"
                      fill="#6ba0ab"
                    />
                    <path
                      d="M428.917 222.129l-.83-3.431-.822-3.515-.416-1.779c-1.628-6.324-6.402-9.974-16.777-9.974l-16.153-.018-14.875-.017H362.3c-1.005 0-2 .803-2.207 1.788l-.739 3.498-.871 4.13-.243 1.157-7.537 35.308-7.154 33.518c-.213.983-.285 2.19-.163 2.683.121.494 2.05.896 3.061.896h15.101c1.006 0 2.278-.184 2.825-.403.548-.223 1.356-2.196 1.559-3.183l2.688-13.278 2.687-13.274c.001-.006.002-.018.005-.022l.358-1.771 3.256-15.25 2.876-13.472c.213-.979 1.203-1.779 2.206-1.782l47.518-.023c.986-.006 1.621-.804 1.391-1.786z"
                      fill="#6ba0ab"
                    />
                    <path
                      d="M490.086 191.104c-1.006.007-2.65.013-3.656.013h-15.21c-1.005 0-2.293.68-2.856 1.51l-33.63 49.269c-.569.832-1.221.708-1.439-.271l-2.475-10.855c-.228-.981-1.23-1.782-2.234-1.782h-21.62c-1.007 0-1.604.789-1.328 1.756l9.688 33.938c.272.967.296 2.56.047 3.528l-4.226 16.427c-.252.975.368 1.771 1.373 1.771h21.368c1.005 0 2.032-.797 2.282-1.771l4.224-16.427c.249-.974.948-2.429 1.558-3.231l54.599-72.46c.605-.803.277-1.457-.727-1.45l-5.738.035zM318.322 233.609l-.002-.021c-.126 1.091-1.137 1.892-2.141 1.892h-27.406c-.948 0-1.435-.645-1.291-1.439.008-.023.013-.043.022-.063 0 0-.009.002-.021.009.009-.032.009-.061.019-.092 0 0 .056-.193.124-.466 2.618-6.96 7.951-11.528 17.976-11.528 11.284-.002 13.487 5.51 12.72 11.708zm-8.042-31.639c-35.185 0-43.521 21.356-48.198 42.911-4.68 21.971-4.275 42.512 32.133 42.512h1.292c.115-.002.233-.002.349-.002h2.353c.145-.004.279-.004.426-.004l1.101-.002h.258c1.438-.002 2.903-.01 4.367-.015h.073c9.613-.038 19.259-.109 23.163-.142.998-.019 1.979-.82 2.185-1.797l1.474-7.205.287-1.4 1.758-8.594c.203-.983-.455-1.791-1.461-1.791h-32.729c-13.02 0-16.886-3.459-15.462-13.629h52.323l-.005.006c.013 0 .024-.006.036-.006.831-.019 1.6-.588 1.905-1.354.058-.146.104-.3.127-.458l-.006.006c7.762-29.3 5.532-49.035-27.749-49.036zM143.986 233.497l-.495 1.753-.001.006-3.951 14.001-3.949 13.999c-.273.967-1.318 1.76-2.326 1.76h-20.912c-15.862 0-19.724-12.406-15.862-30.706 3.861-18.716 11.434-30.352 27.045-31.529 21.335-1.61 25.603 13.396 20.451 30.716zm14.342 30.441s9.859-23.938 12.098-37.767c3.066-18.509-6.202-45.353-41.998-45.353-35.594 0-51.049 25.629-56.947 53.49-5.897 28.063 1.829 52.672 37.219 52.473l27.918-.104 26.094-.096c1.005-.008 2.032-.806 2.289-1.776l4.545-17.338c.253-.973-.362-1.773-1.366-1.777l-4.356-.023-4.355-.023c-.854-.009-1.344-.561-1.24-1.293a1.65 1.65 0 0 1 .106-.408h-.007v-.005z"
                      fill="#6ba0ab"
                    />
                    <path
                      d="M334.521 247.916c0 .662-.537 1.201-1.2 1.201-.662 0-1.199-.539-1.199-1.201s.537-1.197 1.199-1.197c.663-.001 1.2.534 1.2 1.197z"
                      fill="#6ba0ab"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AboutDesc />
  </section>
</template>

<script>
import '@fortawesome/vue-fontawesome';
import AboutDesc from './AboutDesc';
export default {
  data () {
    return {
      hover1: false,
      hover2: false,
      hover3: false,
      hover4: false,
    };
  },
  components: {
    AboutDesc
  },
}
</script>

<style lang="scss">
@mixin mobile {
  @media (max-width: 992px) {
    @content;
  }
}
.tech-stack {
  padding: 60px 30px;
  @include mobile {
    padding: 30px 0px;
  }
  > div {
    position: relative;
    border-right-width: 7px;
    border-left-width: 2px;
    border-top-width: 0;
    border-bottom-width: 0;
    border-color: #d8d7ed;
    border-style: solid;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 15px 0;
    @include mobile {
      border-left-width: 0;
    }
    &:first-child {
      border-left: 0px;
      border-top: 0px;
    }
    &:nth-child(4n + 1) {
      border-left: 0px;
      border-top: 0px;
    }
    &:nth-child(n)::after {
      content: "Keep Hovering (:";
      position: absolute;
      color: transparent;
      left: 15px;
      line-height: 2;
      width: 0;
      transition: width 0.4s ease-in;
      height: 30px;
      background: radial-gradient(
        rgba(233, 213, 77, 0.9),
        rgba(255, 222, 0, 0.36)
      );
    }
    &:nth-child(2n) {
      border-bottom: 0px;
      border-right: 0px;
    }
    &.active:nth-child(-n + 4) {
      &:nth-child(n)::after {
        animation: panel 1.5s linear 0.3s 1 normal forwards;
      }
      .spinner-card {
        animation: spinner 0.4s ease-in 1.4s 1 normal forwards;
      }
      .backcard {
        transform: perspective(10px);
        animation: spinner 0.2s ease-out 1.8s 1 reverse forwards;
      }
    }
  }
}
@keyframes spinner {
  from {
    transform: perspective(50px) rotateY(0);
    height: 100%;
    width: 100%;
    opacity: 1;
    visibility: visible;
  }
  to {
    visibility: visible;
    transform: perspective(50px) rotateY(90deg);
    height: 0;
    width: 0;
    opacity: 0;
  }
}
@keyframes panel {
  from {
    box-shadow: 2px 2px 10px 10px rgba(255, 255, 255, 0.4),
      inset 2px 2px 10px 10px rgba(255, 255, 255, 0.4);
  }
  5% {
    box-shadow: -2px -2px 10px 10px rgba(255, 255, 255, 0.6),
      inset -2px -2px 10px 10px rgba(255, 255, 255, 0.6);
  }
  10% {
    box-shadow: 0;
  }
  15% {
    width: 90%;
    box-shadow: 0px 0px 19px 12px rgba(233, 213, 77, 0.8),
      inset 0px 0px 19px 12px rgba(233, 213, 77, 0.8);
    color: #121314;
  }
  90% {
    color: #060607;
  }
  95% {
    width: 90%;
    box-shadow: 0px 0px 19px 12px rgba(233, 213, 77, 0.8),
      inset 0px 0px 19px 12px rgba(233, 213, 77, 0.8);
  }
  to {
    width: 0;
  }
}
.spinner-card {
  position: relative;
  padding: 0;
  margin: 20px 0;
  transition: all 0.7s ease-in;

  > svg {
    padding: 15px;
  }
}

.backcard {
  position: absolute;
  transition: all 0.7s ease-out;
  top: 0;
  left: 0;
  visibility: hidden;
  width: 100%;
  height: 100%;

  ul {
    padding-inline-start: 0;
    padding: 0 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    flex-direction: column;
    z-index: 1;
  }
  li {
    position: relative;
    width: 100%;
    cursor: default;
    &::after {
      content: "";
      transition: all 0.7s ease-out;
      position: absolute;
      right: -10px;
      font-size: 16px;
      top: 9px;
      width: 6px;
      height: 6px;
      border-radius: 6px;
      background-color: #d8d7ed;
    }
    &:hover {
      &::after {
        right: calc(95% + 6px);
        box-shadow: 0 -1px 2px 2px white;
        width: 25px;
      }
    }
  }
}
.icons {
  font-size: 150px;
  @include mobile {
    text-align: center;
  }
  &.gulp {
    color: #e34b4f;
  }

  &.vue {
    color: #2eb47e;
  }

  &.html {
    color: #e75c26;
  }

  &.css {
    color: #046fa8;
  }

  &.js {
    color: #e9d54d;
  }

  &.vue {
    color: #2eb47e;
  }
}

.personal-information {
  padding-top: 50px;
}

.icons-not-fa {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

#secondSection {
  font-family: "Arima Madurai", cursive;
  position: relative;
  background-size: 40%;
  background-position: 7%;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  @include mobile {
    padding: 0 10px;
  }
  .about-me {
    margin-top: 100px;

    @include mobile {
      margin-top: 50px;
    }
  }
}

.me-card {
  text-align: center;
  border-radius: 15px;
  background-color: #121314;
  box-shadow: 2px 2px 17px 10px rgba(0, 0, 0, 0.76);
  color: #d8d7ed;
  margin: 50px 0;

  p {
    margin-bottom: 0.8rem;
    font-size: 36px;
    line-height: 0.92;
    font-weight: 700;

    @include mobile {
      font-size: 24px;
      word-break: break-word;
      margin-bottom: 0.4rem;
    }
  }
}

#secondSection {
  background-color: #ffff00;
}
</style>