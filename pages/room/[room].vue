<template>
  <Head>
      <Title>ویلا دوبلکس استخردار آبگرم آریا ،3 خوابه در گیسوم - اتاقک</Title>
      <Meta name="description" content="اجاره روزانه ویلا دوبلکس استخردار آبگرم آریا  6 خوابه با ارزان ترین قیمت در گیسوم با ضمانت بازگشت وجه و پشتیبانی 24 ساعته " />
      <meta property="og:title" content="ویلا دوبلکس استخردار آبگرم آریا ،3 خوابه در گیسوم - اتاقک">
      <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, 
user-scalable=no"
    />
    </Head>
  <div class="flex flex-col gap-6 font-iran-sans text-[#48484E] lg:px-5 mob:w-full overflow-x-hidden">
    <div class="flex h-[70vh] relative gap-5 mob:hidden">
      <img :src="rooms[0].images[0]" alt="" class="w-[55vw] filter brightness-100 hover:brightness-75 transition duration-300 ease-in-out" />
      <div class="flex" v-for="room in rooms">

      <NuxtLink to="/" class="grid grid-cols-2 gap-2">
          <img
            :src="image"
            class="filter brightness-100 hover:brightness-75 transition duration-300 ease-in-out w-[20vw] h-[34vh]"
            alt=""
            v-for="image in room.images.slice(1, 5)"
          />
        </NuxtLink>
        <div
          class="flex gap-2 items-center justify-center bg-black bg-opacity-60 w-[20.4%] h-[34vh] absolute left-0 2xl:left-7 bottom-1"
        >
          <span class="text-white font-bold">مشاهده تصاویر بیشتر</span>
          <IconsImageFlash />
        </div>
      </div>
    </div>
    <ClientOnly>
    <div class="relative flex-col w-full  gap-5 lg:hidden"  v-for="room in rooms">
      <swiper
        :navigation="true"
        :pagination="true"
        :breakpoints="{
          0: { slidesPerView: 1, showSwitchArrows: false },
          600: { slidesPerView: 1.6 },
          900: { slidesPerView: 3.6},
          1500: {
          slidesPerView: 4.6,
          spaceBetween: 10, // فاصله بین اسلایدها
        },
        }"
        :spaceBetween="10"
        :modules="modules"
        class="flex mySwiper"
       
      >
        <!-- <div  class=""> -->
        <swiper-slide v-for="image in room.images">
         <NuxtImg :src="image" class="w-full h-[50vh]"/>
        </swiper-slide>
        <!-- </div> -->
      </swiper>
    </div>
  </ClientOnly>
    <div class="flex mob:px-[3%]">
      <div class="flex flex-col gap-5">
        <nav class="flex" aria-label="Breadcrumb">
          <ol
            class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse"
          >
            <li class="inline-flex items-center">
              <a
                href="#"
                class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                اجاره ویلا
              </a>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <a
                  href="#"
                  class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                  >گیلان</a
                >
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg
                  class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
                <span
                  class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
                  >گیسوم</span
                >
              </div>
            </li>
          </ol>
        </nav>
        <h1 class="text-[1.5rem] text-xl mob:text-sm font-bold">
          ویلا استخردار آبگرم آریا ، در گیسوم
        </h1>
        <PartsRoomManagerInfo />
        <div class="flex gap-3 items-center mob:text-sm">
          <IconsPrime />
          <div class="flex flex-col">
            <h3 class="text-xl mob:text-sm font-semibold">اتاقک پرایم</h3>
            <p>راحتی خیال شما با اقامتگاههای منتخب و آنی</p>
          </div>
        </div>
        <div class="flex gap-3 border-b pb-4 border-slate-400">
          <IconsPool />
          <h3 class="text-xl font-semibold mob:text-sm">اقامتگاه‌های استخردار</h3>
        </div>
        <div class="flex flex-col gap-3 border-b pb-4 border-slate-400">
          <h3 class="text-xl font-semibold">ضمانت اتاقک</h3>
          <div
            class="flex p-4 gap-2 border items-center rounded-xl w-[30%] mob:w-full border-slate-400"
          >
            <IconsWarranty />
            <h3 class="text-lg font-bold">ضمانت تحویل اقامتگاه</h3>
          </div>
          <p>
            ضمانت تحویل اقامتگاه اتاقک، به مهمان اطمینان می‌دهد در صورت عدم لغو
            رزرو از سوی وی، اقامتگاهی که رزرو کرده‌است را با مشخصات ثبت شده در
            سایت، در زمان مقرر تحویل بگیرد و در غیر این صورت وجه واریزی خود را
            کاملا و بدون کسر هیچ‌گونه کارمزدی پس بگیرد.
          </p>
          <NuxtLink to="/room/2387189" class="text-[#446BFF] font-semibold"
            ><span>بیشتر بدانید</span> <IconsFlashLink
          /></NuxtLink>
        </div>
        <PartsRoomAboutResidence v-for="room in rooms" :room="room" />
        <div class="flex flex-col gap-4 mt-4 border-b pb-4 border-slate-400">
          <h4 class="text-xl font-semibold">
            روزانه و ماهانه استخردار آبگرم آریا، 200 متر برای 6 نفر به همراه 4
            نفر اضافی در شهر گیسوم با تضمین بهترین کیفیت و قیمت در اتاقک
          </h4>
          <p>
            ویلا آریا با استخر آبگرم از واحدهای منتخب و پرایم اتاقک برای آرامش و
            تفریح شماست. این ویلا با زیر بنای 200 متر مربع در روستای کیش خاله
            منطقه گیسوم واقع شده است. دسترسی به ویلا از مسیر جاده رشت-آستارا
            امکان‌پذیر است. ویلا دارای سه اتاق خواب، حمام و سرویس بهداشتی ایرانی
            و فرنگی و جکوزی است. حیاط ویلا برای پارک 4 خودرو مناسب است. قابل
            توجه مهمانان همراه با سالمند، کودک و افراد دارای معلولیت این ...
          </p>
          <NuxtLink to="/room/2387189" class="text-[#446BFF] font-bold"
            ><span>نمایش جزئیات بیشتر</span> <IconsFlashLink
          /></NuxtLink>
        </div>
        <div
          v-for="room in rooms"
          class="flex flex-col gap-4 border-b pb-4 border-slate-400"
        >
          <PartsRoomFacilitiesResidence :room="room" />
        </div>
        <h3 class="text-xl font-semibold">مقررات زمانی اقامتگاه</h3>
        <div class="flex gap-3">
          <div
            class="flex flex-col gap-2 border w-1/4 mob:w-full pb-4 border-slate-400 rounded-xl p-4"
          >
            <p>زمان ورود</p>
            <h4 class="font-bold text-xl">ساعت ۱۴:۰۰</h4>
          </div>
          <div
            class="flex flex-col gap-2 border w-1/4 mob:w-full pb-4 border-slate-400 rounded-xl p-4"
          >
            <p>زمان خروج</p>
            <h4 class="font-bold text-xl">ساعت ۱۱:۴۵</h4>
          </div>
        </div>
        <h3 class="text-xl font-semibold">قوانین اقامتگاه</h3>
        <div v-for="rule in rooms.residenceRules">
        <p class="font-bold text-xl">{{ rule.text }}</p>
        </div>
        <PartsRoomNearbyCenters v-for="room in rooms" :room="room" />
        <!-- <h3 class="text-xl font-semibold">مراکز نزدیک</h3> -->
      </div>
      <PartsRoomBoxReservation />
    </div>
  </div>
</template>
<style scoped>
@import "~/assets/css/swiperStyle.css";
</style>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
const modules = [Navigation, Pagination];

const route = useRoute()
const { data: rooms } = await useFetch(`/api/rooms/${route.params.room}`, {
  key: `room-${route.params.room}`,
});
</script>
