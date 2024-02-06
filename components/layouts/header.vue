<template class="">
  <div
    class="flex relative flex-col h-[80vh] content-between items-center bg-[url('/images/banner1.png')]"
  >
    <div class="flex justify-between">
      <img src="~/assets/logo.svg" alt="" />
      <ul class="flex gap-10">
        <li><nuxtLink to="/"><span>میزبان شوید</span></nuxtLink></li>
        <li><nuxtLink to="/">دانلود اپلیکیشن</nuxtLink></li>
        <li><nuxtLink to="/">پشتیبانی</nuxtLink></li>
        <li><nuxtLink to="/">ورود/ثبت نام</nuxtLink></li>
      </ul>
    </div>
    <div
      class="flex justify-center bg-black absolute bottom-44 opacity-25 w-max p-2 rounded-lg text-center"
    >
      <h1 class="text-white text-xl font-bold relative">
        اجاره ویلا و سوئیت در سراسر ایران
      </h1>
    </div>
    <div class="flex rounded-lg p-3 gap-10 absolute bottom-20 bg-white 4/6 items-center ">
      <div>جستجوی شهر، استان یا نام اقامتگاه</div>
      <div>تاریخ ورود</div>
      <div>تاریخ خروج</div>
      <div>تعداد نفرات</div>
    <button class="bg-[#F03E58] p-[13px] rounded-lg">
        <IconsSearch />
      </button>
    </div>
  </div>
</template>
