<template class="">
  <body>
    <div
      class="flex relative flex-col h-[90vh] content-between bg-[url('/images/banner2.jpg')]"
    > 
      <div class="flex px-20 justify-between mt-5">
        <img src="~/assets/logo.svg" alt="" />
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
          class="flex rounded-lg z-10 p-3 mob:hidden lg:flex gap-16 absolute bottom-32 bg-white 4/6 items-center"
        >
          <div
            @click="showBoxSearchResidence()"
            class="cursor-pointer"
            id="btnSearchResidence"
          >
            جستجوی شهر، استان یا نام اقامتگاه
          </div>

          <div>تاریخ ورود</div>
          <div>تاریخ خروج</div>
          <div
            @click="numberPeople2.open()"
            id="btnNumberPeople"
            class="cursor-pointer"
          >
            تعداد نفرات
            <h1 class="font-bold">{{ numberPeople }} نفر</h1>
          </div>
          <button class="bg-[#F03E58] p-[13px] rounded-lg">
            <IconsSearch />
          </button>
        </div>
        <div
          id="boxNumberPeople"
          class="flex flex-col absolute hidden bottom-2 left-[22vw] py-2 px-4 gap-5 bg-white w-[18vw] h-[18vh] rounded-lg"
        >
          <p>تعداد افراد بالای ۳ سال</p>
          <div class="flex justify-between">
            <button
              @click="numberPeople2.positive()"
              class="border border-[#48484E] rounded-lg p-2 btn-number-people"
            >
              <IconsPositive />
            </button>
            <p class="text-lg">
              نفر <span> {{ numberPeople }}</span>
            </p>
            <button
              @click="numberPeople2.negative()"
              class="border border-[#48484E] rounded-lg p-2 btn-number-people"
            >
              <IconsNegative />
            </button>
          </div>
        </div>
        <div
          id="selectDestination"
          class="flex flex-col hidden top-[71vh] absolute bottom-2 left-[49vw] py-2 px-3 gap-5 bg-white w-[28vw] h-max rounded-lg"
        >
          <h4 class="text-lg font-bold">محبوب ترین مقصد ها</h4>
          <div v-for="city in cities">
            <PartsSearchPopularCities :city="city" />
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<script setup lang="ts">
const { data: cities } = await useFetch("/api/searchPopularCities");
const numberPeople = ref(0);
class numberPeople2 {
  static positive() {
    numberPeople.value++;
  }
  static negative() {
    numberPeople.value--;
  }
  static open() {
    document.querySelector("#boxNumberPeople")?.classList.remove("hidden");
    document.querySelector("#boxNumberPeople")?.classList.add("flex");
  }
}
function showBoxSearchResidence() {
  let boxSearchResidence = document.querySelector("#selectDestination");
  boxSearchResidence?.classList.remove("hidden");
  boxSearchResidence?.classList.add("flex");
}
document.body.addEventListener("click", (event) => {
  let boxSearchResidence = document.querySelector("#selectDestination");
  let btnSearchResidence = document.querySelector("#btnSearchResidence");
  let btnNumberPeople = document.querySelector("#btnNumberPeople");
  let boxNumberPeople = document.querySelector("#boxNumberPeople");
  if (event.target !== btnSearchResidence) {
    boxSearchResidence?.classList.remove("flex");
    boxSearchResidence?.classList.add("hidden");
  }
    if (event.target !== btnNumberPeople && event.target !== boxNumberPeople) {
      boxNumberPeople?.classList.remove("flex");
      boxNumberPeople?.classList.add("hidden");
    }
  });
</script>
