<template>
  <main>
    <div class="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
      <div class="max-w-lg mx-auto space-y-3 text-center">
        <h3 class="text-gray-800 text-4xl font-semibold sm:text-5xl">
          الصفحة غير موجودة
        </h3>
        <p class="text-gray-600">
          عذرا، الصفحة التي تبحث عنها لا يمكن العثور عليها أو قد تم إزالتها.
        </p>
        <a href="/" class="text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1" @click.prevent>
          عُد للخلف
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
          </svg>
        </a>
      </div>
    </div>
  </main>
</template>
