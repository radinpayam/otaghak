<template>
  <div class="flex flex-col gap-6 font-iran-sans text-[#48484E] px-5">
    <div class="flex h-[70vh] relative gap-5">
      <img :src="rooms[0].images[0]" alt="" class="w-[55vw]" />
      <div class="flex" v-for="room in rooms">

      <div class="grid grid-cols-2 gap-2">
          <img
            :src="image"
            class="w-[20vw] h-[34vh]"
            alt=""
            v-for="image in room.images.slice(1, 5)"
          />
        </div>
        <div
          class="flex gap-2 items-center justify-center bg-black bg-opacity-60 w-[19.5vw] h-[34vh] absolute left-0 bottom-1"
        >
          <span class="text-white font-bold">مشاهده تصاویر بیشتر</span>
          <IconsImageFlash />
        </div>
      </div>
    </div>
    <div class="flex">
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
        <h1 class="text-[1.5rem] text-xl font-bold">
          ویلا استخردار آبگرم آریا ، در گیسوم
        </h1>
        <PartsRoomManagerInfo />
        <div class="flex gap-3 items-center">
          <IconsPrime />
          <div class="flex flex-col">
            <h3 class="text-xl font-semibold">اتاقک پرایم</h3>
            <p>راحتی خیال شما با اقامتگاههای منتخب و آنی</p>
          </div>
        </div>
        <div class="flex gap-3 border-b pb-4 border-slate-400">
          <IconsPool />
          <h3 class="text-xl font-semibold">اقامتگاه‌های استخردار</h3>
        </div>
        <div class="flex flex-col gap-3 border-b pb-4 border-slate-400">
          <h3 class="text-xl font-semibold">ضمانت اتاقک</h3>
          <div
            class="flex p-4 gap-2 border items-center rounded-xl w-[20vw] border-slate-400"
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
            class="flex flex-col gap-2 border w-1/4 pb-4 border-slate-400 rounded-xl p-4"
          >
            <p>زمان ورود</p>
            <h4 class="font-bold text-xl">ساعت ۱۴:۰۰</h4>
          </div>
          <div
            class="flex flex-col gap-2 border w-1/4 pb-4 border-slate-400 rounded-xl p-4"
          >
            <p>زمان خروج</p>
            <h4 class="font-bold text-xl">ساعت ۱۱:۴۵</h4>
          </div>
        </div>
        <h3 class="text-xl font-semibold">قوانین اقامتگاه</h3>
      </div>
      <PartsRoomBoxReservation />
    </div>
  </div>
</template>
<script setup>
const { data: rooms } = await useFetch("/api/rooms/2387189");
</script>
