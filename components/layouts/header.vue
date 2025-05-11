<template class="">
  <body>
    <div
      class="flex relative mob:hidden flex-col h-[90vh] content-between"
    >
    <NuxtImg
      src="https://www.otaghak.com/_next/image/?url=https%3A%2F%2Fcdn.otaghak.com%2Fotg-images-new%2FLarge%2Fxtow4h2q.0kk_316.jpg&w=3840&q=18"
      alt="اجاره ویلا و سوئیت در سراسر ایران"
      loading="eager"
      class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="flex px-20 justify-between mt-5">
        <img src="~/assets/logo.svg" alt="Logo" width="100" height="40" loading="eager"/>
        <ul class="flex gap-10 font-[600] mob:hidden lg:flex">
          <li>
            <nuxtLink to="/" class="flex text-[#F03E58] gap-1"
              ><IconsIcon1Nav /><span>میزبان شوید</span></nuxtLink
            >
          </li>
          <li>
            <nuxtLink to="/" class="flex gap-1"
              ><IconsIcon2Nav /><span>دانلود اپلیکیشن</span></nuxtLink
            >
          </li>
          <li>
            <nuxtLink to="/" class="flex gap-1"
              ><IconsIcon3Nav /><span>پشتیبانی</span></nuxtLink
            >
          </li>
          <li>
            <nuxtLink to="/" class="flex gap-1"
              ><IconsIcon4Nav /><span>ورود/ثبت نام</span></nuxtLink
            >
          </li>
        </ul>
      </div>
      <div class="flex justify-center">
        <div
          class="flex bg-black absolute bottom-60 bg-opacity-50 w-max p-2 rounded-lg text-center"
        >
          <h1 class="text-white text-xl font-bold relative">
            اجاره ویلا و سوئیت در سراسر ایران
          </h1>
        </div>
        <div
          class="flex rounded-lg z-10 p-3 mob:hidden lg:flex gap-16 absolute bottom-32 bg-white h-auto items-center"
        >
          <div
            @click="showDivSearchResidence = true"
            class="cursor-pointer"
            id="btnSearchResidence"
          >
            جستجوی شهر، استان یا نام اقامتگاه
            <p class="font-bold text-lg" >{{ nameResidence }}</p>
          </div>

          <div>تاریخ ورود</div>
          <div>تاریخ خروج</div>
          <div
            @click="numberPeople2.open()"
            id="btnNumberPeople"
            class="cursor-pointer"
          >
            تعداد نفرات
            <h1 class="font-bold" v-show="numberPeople != 0" >{{ numberPeople }} نفر</h1>
          </div>
          <button class="bg-[#F03E58] p-[13px] rounded-lg">
            <IconsSearch />
          </button>
        </div>
        <div
          id="boxNumberPeople"
          v-show="boxNumberPeopleOpen"
          class="flex flex-col absolute bottom-2 left-[22vw] py-2 px-4 gap-5 bg-white w-[18vw] h-[18vh] rounded-lg"
        >
          <p>تعداد افراد بالای ۳ سال</p>
          <div class="flex justify-between">
            <button
              @click="numberPeople2.positive()"
              class="border border-[#48484E] rounded-lg p-2 btn-number-people"
              style="pointer-events: all"
            >
              <IconsPositive class="btn-number-people" />
            </button>
            <p class="text-lg">
              نفر <span> {{ numberPeople }}</span>
            </p>
            <button
              @click="numberPeople2.negative()"
              :disabled="numberPeople === 0"
              class="border border-[#48484E] disabled:border-opacity-5 transition duration-300 ease-in-out rounded-lg p-2 btn-number-people z-20 pointer-events-auto"
            >
              <IconsNegative />
            </button>
          </div>
        </div>
        <div
          id="selectDestination"
          v-if="showDivSearchResidence"
          class="flex flex-col top-[71vh] absolute bottom-2 left-[49vw] py-2 px-3 gap-5 bg-white w-[28vw] h-max rounded-lg"
        >
          <h4 class="text-lg font-bold">محبوب ترین مقصد ها</h4>
          <div v-for="city in cities">
            <NuxtLazyHydrate when-visible>
              <PartsSearchPopularCities
              class="cursor-pointer"
                :city="city"
                @click="residences(city)"
              />
            </NuxtLazyHydrate>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script setup>
const { data: cities } = await useFetch("/api/searchPopularCities");
const numberPeople = ref(0);
const showDivSearchResidence = ref(false);
const nameResidence = ref("")
const boxNumberPeopleOpen = ref(false)
class numberPeople2 {
  static positive() {
    numberPeople.value++;
  }
  static negative() {
    numberPeople.value--;
  }
  static open() {
    boxNumberPeopleOpen.value = true
    document.querySelector("#boxNumberPeople")?.classList.remove("hidden");
    document.querySelector("#boxNumberPeople")?.classList.add("flex");
  }
}
function residences(city){
  showDivSearchResidence.value = false
  nameResidence.value = city.city

}
// function showBoxSearchResidence() {
//   showDivSearchResidence.value = true;
// }
// document.body.addEventListener("click", (event) => {
//   let boxSearchResidence = document.querySelector("#selectDestination");
//   let btnSearchResidence = document.querySelector("#btnSearchResidence");
//   let btnNumberPeople = document.querySelector("#btnNumberPeople");
//   let boxNumberPeople = document.querySelector("#boxNumberPeople");
//   let btnsNumberPeople = document.querySelector(".btn-number-people");
// });
</script>
