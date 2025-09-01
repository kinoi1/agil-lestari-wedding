<template>
  <div class="wedding-container">
    <div class="book">
      <div class="book__spine"></div>

      <!-- Cover Depan -->
      <div
        class="page book__page book__cover book__cover--front"
        :style="{ '--page-index': 1 }"
      >
        <div class="page__half page__half--front">
          <div class="page-content font-alex relative h-full">
            <div class="flex flex-col">
              <span class="text-[4rem]">Wedding</span>
              <span class="flex flex-col">
                <span class="text-[2.5rem]">Agil</span>
                <span class="text-xl">&</span>
                <span class="text-[2.5rem]">Lestari</span>
              </span>
            </div>
            <div class="absolute left-[50%] transform-middle w-[350px]">
              <img src="/img/love.png" alt="" />
            </div>
          </div>
        </div>
        <div class="page__half page__half--back">
          <div class="book__insert"></div>
        </div>
      </div>

      <!-- Halaman 1 -->
      <div class="page book__page" :style="{ '--page-index': 2 }">
        <div class="page__half page__half--front">
          <div class="page-content">
            Hai this is page 1
          </div>
          <div class="page__number">1</div>
        </div>
        <div class="page__half page__half--back">
          <div class="page-content">
            <div class="container-frame">
              tes
            </div>
          </div>
          <div class="page__number">2</div>
        </div>
      </div>

      <!-- Halaman 2 -->
      <div class="page book__page" :style="{ '--page-index': 3 }">
        <div class="page__half page__half--front">
          <div class="page-content"></div>
          <div class="page__number">3</div>
        </div>
        <div class="page__half page__half--back">
          <div class="page-content"></div>
          <div class="page__number">4</div>
        </div>
      </div>

      <div class="page book__page" :style="{ '--page-index': 4 }">
        <div class="page__half page__half--front">
          <div class="page-content"></div>
          <div class="page__number">5</div>
        </div>
        <div class="page__half page__half--back">
          <div class="page-content"></div>
          <div class="page__number">6</div>
        </div>
      </div>

      <div class="page book__page" :style="{ '--page-index': 6 }">
        <div class="page__half page__half--front">
          <div class="page-content"></div>
          <div class="page__number">7</div>
        </div>
        <div class="page__half page__half--back">
          <div class="page-content"></div>
          <div class="page__number">8</div>
        </div>
      </div>

      <div class="page book__page" :style="{ '--page-index': 6 }">
        <div class="page__half page__half--front">
          <div class="page-content"></div>
          <div class="page__number">9</div>
        </div>
        <div class="page__half page__half--back">
          <div class="page-content"></div>
          <div class="page__number">10</div>
        </div>
      </div>
      <!-- ... Lanjutkan sesuai HTML aslinya ... -->

      <!-- Cover Belakang -->
      <div
        class="page book__page book__cover book__cover--back"
        :style="{ '--page-index': 7 }"
      >
        <div class="page__half page__half--front"></div>
        <div class="page__half page__half--back"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // Animasi book
  gsap.to(".book", {
    scrollTrigger: {
      scrub: 1,
      start: () => 0,
      end: () => window.innerHeight * 0.25,
      markers: false,
    },
    scale: 1,
    x: "0",
    duration: 0.5,
  });

  const PAGES = Array.from(document.querySelectorAll(".book__page"));
  console.log(PAGES.length);
  const TOTAL_PAGES = 7;
  console.log(document.documentElement.scrollHeight);
  console.log((0 + 20) * (window.innerHeight * 0.25));
  // Set posisi awal tiap halaman
  PAGES.forEach((page, index) => {
    gsap.set(page, { z: -index });

    // Formula start & end berdasarkan urutan halaman
    const startPos = (index + 2) * (window.innerHeight * 0.25);
    const endPos = (index + 3) * (window.innerHeight * 0.25);

    // Animasi membalik halaman
    gsap.to(page, {
      rotateY: `-=${180 - index / 2}`,
      scrollTrigger: {
        scrub: 1,
        start: startPos,
        end: endPos,
        markers: false,
      },
    });

    // Efek zoom ke buku (opsional hanya di halaman pertama)
    if (index === 0) {
      gsap.to(".book", {
        scale: 1,
        x: "0%",
        scrollTrigger: {
          start: startPos,
          end: endPos,
          markers: false,
        },
      });
    }

    // Gerakan z-index agar halaman bergeser ke belakang
    gsap.to(page, {
      z: index,
      scrollTrigger: {
        scrub: 1,
        start: startPos,
        end: endPos,
      },
    });
  });

});

</script>

<style scoped>
:global(*) {
  box-sizing: border-box;
}

:global(:root) {
  --page-count: 20;
  --page-scroll: 19;
  --underline: rgba(64, 64, 64, 0.4);
  --spine: #000;
  --cover: #fefcf6;
  --bg: #4d4d4d;
  --insert: #d9d9d9;
  --page: #e6e6e6;
}

:global(body) {
  width: 100vw;
  /* height: calc(((var(--page-count) + 2) * var(--page-scroll)) * 1vh); */
  height: 100vh;
  background: url("/img/background.jpg") repeat center center / cover;
  /* overflow-x: hidden; */
}

:global(h1) {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  margin: 0;
  font-size: 2rem;
  color: #fff;
  font-family: "Google sans", sans-serif;
}

* {
  box-sizing: border-box;
}

:root {
  --page-count: 20;
  --page-scroll: 19;
  --underline: rgba(64, 64, 64, 0.4);
  --spine: #000;
  --cover: #fefcf6;
  --bg: #4d4d4d;
  --insert: #d9d9d9;
  --page: #e6e6e6;
}
.wedding-container {
  height: calc(((var(--page-count) + 2) * var(--page-scroll)) * 1vh);
  overflow-x: hidden;
}
h1 {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  margin: 0;
  font-size: 2rem;
  color: #fff;
  font-family: "Google sans", sans-serif;
}

body {
  width: 100vw;
  height: calc(8 * 25vh);
  background: url("/img/background.jpg");
  overflow-x: hidden;
}

.page {
  height: 100%;
  width: 100%;
  position: relative;
  transform-style: preserve-3d;
}

.page .page__number {
  position: absolute;
  color: #808080;
  bottom: 1rem;
  font-size: 1vmin;
}

.page__half--front .page__number {
  right: 1rem;
}

.page__half--back .page__number {
  left: 1rem;
}

.page__half {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: rotateY(calc(var(--rotation) * 1deg))
    translate3d(0, 0, calc((0.5 * var(--coefficient)) * 1px));
  -webkit-clip-path: inset(0 0.5% 0 0.5%);
  clip-path: inset(0 0.5% 0 0.5%);
}

.page__half--front {
  --rotation: 0;
  --coefficient: 0;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 0 5% 5% 0;
}

.page__half--back {
  --rotation: 180;
  --coefficient: 2;
  border-radius: 5% 0 0 5%;
}

.book {
  height: 85vmin;
  position: fixed;
  width: 60vmin;
  min-width: 150px;
  min-height: 200px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
  transform-style: preserve-3d;
  perspective: 1200px;
  will-change: transform;
}

.book__insert {
  content: "";
  position: absolute;
  height: 94%;
  width: 94%;
  background: var(--insert);
  top: 50%;
  right: -1rem;
  transform: translate(0, -50%);
  border-radius: 5% 0 0 5%;
}

.book__spine {
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  background: var(--spine);
  transform-origin: 0 50%;
  width: 12px;
  transform: translate3d(0, 0, -13px) scaleX(1) rotateY(0deg);
}

.book__page {
  position: absolute;
  left: 2%;
  top: 50%;
  border-radius: 0 5% 5% 0;
  transform: translate(0, -50%);
  height: 94%;
  width: 94%;
  z-index: calc(((var(--page-count) + 2) - var(--page-index)) * 2);
  transform-origin: 0% 50%;
}

.book__cover {
  border-radius: 0 5% 5% 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 0;
  background: var(--cover);
}

.book__cover--front {
  transform-origin: 0 50%;
}

.book__cover--front .page__half--back {
  border-right: 1rem solid var(--spine);
}

.book__cover--back {
  transform-origin: 0% 50%;
  left: 2% !important;
}

.book__cover--back .page__half--front {
  border-left: 1rem solid var(--spine);
}

.book__cover--back .book__insert {
  left: 0;
  border-radius: 0 5% 5% 0;
}

.book__page:not(.book__cover) .page__half {
  background: repeating-linear-gradient(
        0deg,
        transparent 0 1rem,
        /* var(--underline) 1rem calc(1rem + 1px), //Uncoment if zahid want lines*/
          transparent calc(1rem + 1px)
      )
      0 1rem/100% 100% no-repeat,
    var(--page);
}

.sticker {
  height: 15%;
  position: absolute;
  bottom: 5%;
  right: 5%;
  transform: rotate(-25deg);
}

.code {
  line-height: 1.2;
  font-family: monospace;
  white-space: pre-line;
  max-width: 100%;
  max-height: 100%;
  font-weight: bold;
  color: #0f0f0f;
  text-shadow: 2px 2px 0 #1c1c1c;
  border-radius: 5%;
  display: block;
  overflow: hidden;
}

.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  height: 25%;
}

.video {
  height: 80% !important;
}

/*         img, .video {
            width: 90%;
            height: 90%;
            -o-object-fit: center;
            object-fit: center;
            z-index: 2;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        } */

a,
.video-container {
  height: 100%;
  width: 100%;
  position: relative;
  display: block;
}
.page-content {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
}

.container-frame {
  overflow: hidden;
  position: fixed;
  width: 165px;
  height: 292px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.frames {
  will-change: transform;
}

.font-alex {
  font-family: "Alex Brush", cursive;
}
.text-white {
  color: #fff;
}

.transform-middle {
  transform: translate(-50%, -50%);
}
</style>
