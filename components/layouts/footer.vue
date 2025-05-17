<template>
  <div class="flex mob:flex-col justify-between content-between gap-6 lg:p-10 mob:px-2 bg-[#F4F4F8] mob:gap-20">
    <div class="flex flex-col mob:gap-6 gap-3">
      <img src="~/assets/logo.svg" class="w-[15vw] mob:w-[50%] mr-[25%]" alt="" width="112" height="44">
      <p class="mob:hidden">
        اتاقک سامانه هوشمند اجاره محل اقامت ویژه مسافران است و اکنون در بیش از
        310 شهر فعال است. هدف از ایجاد اتاقک ترویج سفرهای اقتصادی، مناسب برای
        تمام افراد جامعه و گردشگران است. در همین راستا تلاش می‌کنیم
        اقامتگاه‌هایی امن را با کم‌ترین هزینه در اختیار کاربران قرار دهیم
      </p>
      <span class="text-[17px] text-[#48484E] font-semibold mt-20"
        >لینک های پر کاربرد</span
      >
      <div class="flex mob:flex-col gap-20 mt-5">
        <div class="flex gap-x-10">
          <ul class="ul-useful-links">
            <li v-for="(link, index) in links.usefulLinks.slice(0, 4)" :key="index">
              {{ link.title }}
            </li>
          </ul>
          <ul class="ul-useful-links">
            <li v-for="(link, index) in links.usefulLinks.slice(4, 8)" :key="index">
              {{ link.title }}
            </li>
          </ul>
        </div>
        <div class="flex gap-10">
          <ul class="ul-popular-destinations">
            <li class="text-[17px] font-semibold"
              >مقصد های پرطرفدار</li>
            <li v-for="(link, index) in links.popularDestinations.slice(0, 9)" :key="index">
              {{ link.title }}
            </li>
          </ul>
          <ul class="ul-popular-destinations">
            <li v-for="(link, index) in links.popularDestinations.slice(9, 18)" :key="index">
              {{ link.title }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:ml-5 text-[#48484E] gap-2 mob:gap-7">
      <h1 class="text-xl text-center font-semibold">دریافت اتاقک</h1>
      <div class="grid grid-cols-2 mob:w-full mob:gap-3 gap-x-10 gap-y-4">
        <button class="boxs-get-otaghak">
          <span>دریافت از بازار</span><IconsBazar />
        </button>
        <button class="boxs-get-otaghak">
          <span>دریافت از گوگل پلی</span><IconsGooglePlay />
        </button>
        <button class="boxs-get-otaghak">
          <span>دریافت از مایکت</span><IconsMyket />
        </button>
        <button class="boxs-get-otaghak">
          <span>دریافت مستقیم</span><IconsReceiveDirectly />
        </button>
      </div>
      <button class="bg-[#F03E58] w-[34vw] h-12 rounded-lg mt-10 mob:w-full">
        <p class="text-white">ارتباط با پشتیبانی 02191001045</p>
      </button>
      <h1 class="text-xl font-semibold text-center">با اتاقک همراه شوید</h1>
      <div class="flex gap-4 justify-center">
        <LazyIconsInstagram />
        <LazyIconsTelegrm />
        <LazyIconsLinkedin />
        <LazyIconsTwitter />
        <LazyIconsYoutube />
      </div>
      <div class="flex justify-center">
        <p>رتبه اول سیزدهمین جشنواره وب و موبایل ۹۹</p>
      </div>
    </div>
  </div>
</template>
<style scoped>
@tailwind components;
@layer components {
  .ul-useful-links{
    @apply flex flex-col font-semibold gap-5;
  }
  .ul-popular-destinations{
    @apply flex flex-col gap-5;
  }
  .boxs-get-otaghak {
    @apply flex w-full mob:w-[45vw] h-14 rounded-lg bg-white items-center justify-center gap-4;
  }
}
</style>
<script setup>
const { data: links } = await useFetch("/api/linksFooter");

</script>
