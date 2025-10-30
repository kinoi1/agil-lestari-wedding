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
              <div class="aspect-[4/3.5] relative">
                <img class="absolute" src="/img/love.png" alt="" />
                <div class="leading-none cover-name-padding">
                  <span class="flex flex-col">
                    <span class="text-start">Agil</span>
                    <span class="">&</span>
                    <span class="flex justify-end mr-2"
                      >Lestari</span
                    >
                  </span>
                </div>
              </div>
              <div class="mt-[1.5rem]">
                20 December, 2025
              </div>
              <div>
                <span class="font-nourd text-xs">Inviting you :</span>
              </div>
              <div
                id="invited"
                class="mx-[15%] bg-black aspect-[3.5/1] flex justify-center align-center text-white p-2 rounded-lg overflow-hidden relative"
              >
                <div
                  class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine"
                ></div>
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
            <div class="flex flex-col">
              <div class="mx-[3rem]">
                <img class="" src="/img/bismillah.png" alt="" />
              </div>
              <div>
                <span class="font-salam font-alex leading-none"
                  >"Dengan menyebut nama Allah yang maha pengasih lagi maha
                  penyayang" </span>
                
              </div>
              <div class="mt-2">
                <span class="basic leading-[1.5] block px-4">
                  Maha Suci Allah ‘Azza wa Jalla yang telah menciptakan
                  makhluk-Nya berpasang-pasangan. Dengan memohon Rahmat & Ridho
                  Allah Subhanahu wa Ta’ala, kami mengundang Bapak/Ibu/Saudara/i
                  untuk menghadiri Acara Pernikahan Putra-Putri kami :
                </span>
              </div>
              <div class="font-alex font-bride mt-2">
                Lestari Utami Putri
              </div>
              <div class="basic mb-2">Putri Bapak Endro & Ibu Eli</div>
              <div class="flex justify-center">
                <a
                  href="https://www.instagram.com/lestariut_/"
                  class="h-[20px] bg-black rounded-xl px-2 text-white text-xs"
                  target="_blank"
                >
                  IG @lestariut_
                </a>
              </div>
              <div class="mt-4">
                <span class="font-alex text-[2rem]">&</span>
              </div>
              <div class="font-alex font-bride mt-4">
                Agil Supriyanto
              </div>
              <div class="basic mb-2">
                Putra Bapak Diyanto & Ibu Sumini
              </div>
              <div class="flex justify-center">
                <a
                  href="https://www.instagram.com/agil_supriyanto/"
                  class="h-[20px] bg-black px-2 rounded-xl text-white text-xs"
                  target="_blank"
                >
                  IG @agil_supriyanto
                </a>
              </div>
              <div class="mt-4 basic px-4">
                Semoga Allah memberkahi pernikahan Putra-Putri kami dan
                menjadikannya keluarga yang sakinah mawaddah warahmah
              </div>
            </div>
          </div>
          <div class="page__number">1</div>
        </div>
        <div class="page__half page__half--back">
          <div class="page-content">
            <div class="container-frame"></div>
          </div>
          <div class="page__number">2</div>
        </div>
      </div>

      <!-- Halaman 2 -->
      <div class="page book__page" :style="{ '--page-index': 3 }">
        <div class="page__half page__half--front">
          <div class="page-content">
            <div class="flex flex-col">
              <div class="basic pt-2">
                <span>Insya Allah akan dilaksanakan pada</span>
              </div>
              <div class="mt-2 text-[1.75rem]">Minggu</div>
              <div class="flex flex-row gap-2 mx-2 justify-center mt-2">
                <div
                  class="border-y-4 w-[35%] text-[1.2rem] items-center flex justify-center"
                >
                  Desember
                </div>
                <div class="w-[25%] text-[2rem]">25</div>
                <div
                  class="border-y-4 w-[35%] text-[1.2rem] items-center flex justify-center"
                >
                  2025
                </div>
              </div>
              <div
                class="flex flex-col gap-[0.2rem] text-[0.6rem] mt-4 mx-[10%] text-start justify-center"
              >
                <div class="text-center">
                  Waktu dan Tempat:
                </div>
                <span>Waktu &nbsp; : 10.00 WIB s/d selesai</span>
                <span>Tempat : Kantor kelurahan Soklat</span>
                <span
                  >Alamat : Jl. DI Panjaitan Pasirkareumbi, Kec. Subang, Kab.
                  Subang Jawa Barat</span
                >
                <span>Lokasi :</span>
              </div>

              <div class="flex flex-col mx-4 gap-2 mt-8">
                <span class="basic">
                  Terimakasih atas kehadirannya, mohon maaf bila ada kekurangan
                  dan kesalahan
                </span>
                <span class="font-alex font-salam"
                  >Wassalamualaikum warahmatullahi wabarokatuh</span
                >
              </div>
            </div>
          </div>
          <div class="page__number">3</div>
        </div>
        <div class="page__half page__half--back">
          <div class="page-content"></div>
          <div class="page__number">4</div>
        </div>
      </div>

      <div class="page book__page" :style="{ '--page-index': 4 }">
        <div class="page__half page__half--front">
          <div class="page-content">
            <div class="flex flex-col">
              <h2>Wedding Gift</h2>
              <div class="basic px-[10vw] mt-[1rem]">
                Terima kasih telah menjadi bagian dari momen bahagia kami. Jika
                ingin berbagi kebahagiaan melalui hadiah, silakan gunakan
                pilihan di bawah ini.
              </div>

              <div class="bg-black p-4 mx-[10vw] rounded-2xl flex flex-col">
                <div class="flex flex-row text-white">
                  <img src="/img/bca.svg" alt="" width="35" height="55" />
                  <div class="text-[0.75rem] flex flex-col">
                    <span class=""
                      >1234567 - <button class="salin">Salin</button>
                    </span>
                    <span class="basic"
                      >Atas nama Agil Supriyanto</span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import { onMounted, onBeforeUnmount } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

let xVal = "0%";
if (window.innerWidth < 480) {
  xVal = "-40%";
}
gsap.registerPlugin(ScrollTrigger);
console.log(window.innerWidth);
onMounted(() => {
  const PAGES = Array.from(document.querySelectorAll(".book__page"));
  const lastPage = PAGES.length - 1;
  PAGES.forEach((page, index) => {
    gsap.set(page, { z: -index });

    const startPos = (index + 2) * (window.innerHeight * 0.25);
    const endPos = (index + 3) * (window.innerHeight * 0.25);
    if (index == lastPage) {
      gsap.to(page, {
        rotateY: `-=${155}`,
        scrollTrigger: {
          scrub: 1,
          start: startPos,
          end: endPos,
          markers: false,
        },
      });
    } else {
      gsap.to(page, {
        rotateY: `-=${172 - index / 2}`,
        scrollTrigger: {
          scrub: 1,
          start: startPos,
          end: endPos,
          markers: false,
        },
      });
    }
  });

  gsap.to(".book", {
    scrollTrigger: {
      scrub: 1,
      start: () => 0,
      end: () => window.innerHeight * 0.11,
      markers: false,
    },
    scale: 0.8,
    x: xVal,
    duration: 0.5,
  });

  onBeforeUnmount(() => {
    console.log("Triggers sebelum kill:", ScrollTrigger.getAll().length);
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    gsap.globalTimeline.clear();
  });
});
</script>
