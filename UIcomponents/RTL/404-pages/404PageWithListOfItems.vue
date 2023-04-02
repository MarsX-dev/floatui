<script setup lang="ts">
const navigations = [
  {
    icon: 'M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z',
    title: 'الموارد',
    desc: 'لوريم إيبسوم هو ببساطة نص شكلي للطباعة',
    href: '/l1',
  },
  {
    icon: 'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
    title: 'الإرشاد',
    desc: 'لوريم إيبسوم هو ببساطة نص شكلي للطباعة',
    href: '/l2',
  },
  {
    icon: 'M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z',
    title: 'الدعم',
    desc: 'لوريم إيبسوم هو ببساطة نص شكلي للطباعة',
    href: '/l3',
  },
];
</script>

<template>
  <main>
    <div class="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
      <div class="max-w-lg mx-auto text-gray-600">
        <div class="space-y-3 text-center">
          <h3 class="text-indigo-600 font-semibold">
            خطأ 404
          </h3>
          <p class="text-gray-800 text-4xl font-semibold sm:text-5xl">
            الصفحة غير موجودة
          </p>
          <p>
            عذرا، الصفحة التي تبحث عنها لا يمكن العثور عليها أو قد تم إزالتها.
          </p>
        </div>
        <div class="mt-12">
          <ul class="divide-y">
            <li v-for="nav in navigations" :key="nav.title" class="flex gap-x-4 py-6">
              <div class="flex-none w-14 h-14 bg-indigo-50 rounded-full text-indigo-600 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="nav.icon" />
                </svg>
              </div>
              <div class="space-y-1">
                <h4 class="text-gray-800 font-medium">
                  {{ nav.title }}
                </h4>
                <p>
                  {{ nav.desc }}
                </p>
                <a :href="nav.href" class="text-sm text-indigo-600 duration-150 hover:text-indigo-400 font-medium inline-flex items-center gap-x-1" @click.prevent>
                  معرفة المزيد
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="{1.5}" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
