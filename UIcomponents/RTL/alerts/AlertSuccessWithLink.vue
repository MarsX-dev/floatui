<template>
  <div class="max-w-5xl mx-auto px-4 md:px-8">
    <div class="flex justify-between p-4 rounded-md bg-green-50 border border-green-300">
      <div class="flex items-start gap-3 w-full">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="flex-1 self-center">
          <span class="text-green-600 font-medium">
            تم التحديث بنجاح
          </span>
          <div class="text-green-600">
            <p class="mt-2 sm:text-sm">
              من المهم الاعتناء بالمريض ، على أن يتابعه الطبيب ، ولكنه وقت الألم والمعاناة الشديدة.
            </p>
            <div class="mt-2">
              <a
                href="/" class="inline-flex items-center font-medium hover:underline sm:text-sm"
                @click.prevent
              >
                تفاصيل
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-green-600">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
