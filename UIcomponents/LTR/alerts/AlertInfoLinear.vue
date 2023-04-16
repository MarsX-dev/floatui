<template>
  <div class="max-w-5xl mx-auto px-4 md:px-8">
    <div class="flex justify-between p-4 rounded-md bg-blue-50 border border-blue-300">
      <div class="flex gap-3 sm:items-center">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <p class="text-blue-600 sm:text-sm">
          We have just released a new app version with so many features, you can <a href="/new" class="underline font-medium hover:text-blue-700" @click.prevent>check it out?</a>
        </p>
      </div>
    </div>
  </div>
</template>
