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
            <div class="flex flex-col relative">
              <span class="text-[4rem] leading-none mt-2">Wedding</span>
              <div
                class="aspect-[4/3.5] relative"
              >
                <img class="absolute" src="/img/love.png" alt="" />
                <div class="p-[4.5rem] leading-none">
                  <span class="flex flex-col">
                    <span class="text-[2rem] text-start">Agil</span>
                    <span class="text-[2rem]">&</span>
                    <span class="text-[2rem] flex justify-end mr-2"
                      >Lestari</span
                    >
                  </span>
                </div>
              </div>
              <div class="mt-[1.5rem]">
                24 December, 2025
              </div>
              <div>
                <span>Inviting you</span>
              </div>
              <div
                id="invited"
                class="mx-[15%] bg-black aspect-[3.5/1] flex justify-center align-center text-white p-2 rounded-lg overflow-hidden relative"
              ><div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine">

              </div>
            </div>
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
    x: "-35%",
    duration: 0.5,
  });

  const PAGES = Array.from(document.querySelectorAll(".book__page"));
  // Set posisi awal tiap halaman
  PAGES.forEach((page, index) => {
    gsap.set(page, { z: -index });

    // Formula start & end berdasarkan urutan halaman
    const startPos = (index + 2) * (window.innerHeight * 0.25);
    const endPos = (index + 3) * (window.innerHeight * 0.25);

    // Animasi membalik halaman
    gsap.to(page, {
      rotateY: `-=${175 - index / 2}`,
      scrollTrigger: {
        scrub: 1,
        start: startPos,
        end: endPos,
        markers: false,
      },
    });
  });
});
</script>
