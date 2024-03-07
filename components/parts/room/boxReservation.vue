<template>
  <div
    class="flex flex-col gap-3 sticky top-36 p-8 text-[#8D8D96] w-[32vw] h-[68vh] rounded-2xl shadow-[0_5px_5px_5px_rgba(245,245,245,1)]"
  >
    <p class="flex gap-2">
      هر شب از <span class="text-[#48484E] text-lg font-bold">3,535,000</span>تومان
    </p>
    <div class="flex gap-4">
      <div
        class="flex border gap-2 p-2 w-[15vw] h-20 border-slate-300/100 rounded-lg"
      >
        <IconsCalendar />
        <span class="text-base font-semibold">تاریخ ورود</span>
      </div>
      <div
        class="flex border gap-2 p-2 w-[15vw] h-20 border-slate-300/100 rounded-lg"
      >
        <IconsCalendar />
        <span class="text-base font-semibold">تاریخ خروج</span>
      </div>
    </div>
    <div type="text" id="numberPeople-select" class=""></div>
    <select
      name="numberPeople"
      id="numberPeople-select"
      class="bg-white border border-slate-300/100 py-3 px-2 rounded-lg"
    >
      <option value="">تعداد نفرات را انتخاب کنید</option>
      <option value="">۱ نفر</option>
      <option value="">۲ نفر</option>
      <option value="">۳ نفر</option>
      <option value="">۴ نفر</option>
      <option value="">۵ نفر</option>
      <option value="">۶ نفر</option>
      <option value="">۷ نفر (۶ نفر + ۱ نفر اضافه)</option>
      <option value="">۸ نفر (۶ نفر + ۲ نفر اضافه)</option>
      <option value="">۹ نفر (۶ نفر + ۳ نفر اضافه)</option>
      <option value="">۱۰ نفر (۶ نفر + ۴ نفر اضافه)</option>
    </select>
    <p class="text-base border-b pb-2 border-slate-300/100">
      کودکان تا زیر 3 سال در صورتحساب لحاظ نمی‌گردند.
    </p>
    <button
      class="text-white bg-[#F03E58] rounded-lg text-lg font-semibold p-3"
    >
      انتخاب تاریخ
    </button>
    <div class="flex gap-2 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
      >
        <g clip-path="url(#clip0_58_3320)">
          <path
            d="M20.2999 3.6999C19.7899 3.1899 19.0999 2.8999 18.3799 2.8999H5.6199C4.8899 2.8999 4.2099 3.1799 3.6999 3.6999C3.1899 4.2099 2.8999 4.9099 2.8999 5.6199V14.7299C2.8999 15.4499 3.1899 16.1499 3.6999 16.6499C4.2099 17.1599 4.8999 17.4499 5.6199 17.4499H6.5399V20.1899C6.5399 20.5399 6.7399 20.8499 7.0499 20.9999C7.1699 21.0599 7.3099 21.0899 7.4399 21.0899C7.6399 21.0899 7.8399 21.0199 7.9999 20.8899L12.3099 17.4399H18.3699C19.0999 17.4399 19.7799 17.1599 20.2899 16.6399C20.7999 16.1299 21.0899 15.4299 21.0899 14.7199V5.6199C21.0899 4.8999 20.7999 4.1999 20.2899 3.6999H20.2999ZM19.2999 14.7399C19.2999 14.9799 19.1999 15.2199 19.0299 15.3899C18.8599 15.5599 18.6199 15.6599 18.3799 15.6599H11.9999C11.7999 15.6599 11.5999 15.7299 11.4399 15.8599L8.3499 18.3299V16.5599C8.3499 16.0599 7.9499 15.6599 7.4499 15.6599H5.6299C5.3799 15.6599 5.1499 15.5599 4.9799 15.3899C4.8099 15.2199 4.7099 14.9799 4.7099 14.7399V5.6199C4.7099 5.3799 4.8099 5.1399 4.9799 4.9699C5.1499 4.7999 5.3899 4.6999 5.6299 4.6999H18.3899C18.6399 4.6999 18.8699 4.7999 19.0399 4.9699C19.2099 5.1399 19.3099 5.3799 19.3099 5.6199V14.7299L19.2999 14.7399Z"
            fill="#8D8D96"
          />
          <path
            d="M7.80995 8.81982C7.05995 8.81982 6.44995 9.42982 6.44995 10.1798C6.44995 10.9298 7.05995 11.5398 7.80995 11.5398C8.55995 11.5398 9.16995 10.9298 9.16995 10.1798C9.16995 9.42982 8.55995 8.81982 7.80995 8.81982Z"
            fill="#8D8D96"
          />
          <path
            d="M11.9999 8.81982C11.2499 8.81982 10.6399 9.42982 10.6399 10.1798C10.6399 10.9298 11.2499 11.5398 11.9999 11.5398C12.7499 11.5398 13.3599 10.9298 13.3599 10.1798C13.3599 9.42982 12.7499 8.81982 11.9999 8.81982Z"
            fill="#8D8D96"
          />
          <path
            d="M16.1898 8.81982C15.4398 8.81982 14.8298 9.42982 14.8298 10.1798C14.8298 10.9298 15.4398 11.5398 16.1898 11.5398C16.9398 11.5398 17.5498 10.9298 17.5498 10.1798C17.5498 9.42982 16.9398 8.81982 16.1898 8.81982Z"
            fill="#8D8D96"
          />
        </g>
        <defs>
          <clipPath id="clip0_58_3320">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p>
        پس از ثبت درخواست می توانید با میزبان خود مستقیما گفتگوی آنلاین داشته
        باشید
      </p>
    </div>
  </div>
</template>
<style scoped></style>
