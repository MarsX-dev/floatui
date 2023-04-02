<template>
  <main>
    <div class="max-w-screen-xl mx-auto px-4 flex items-center justify-start min-h-screen md:px-8">
      <div class="max-w-lg mx-auto space-y-3 text-center">
        <h3 class="text-indigo-600 font-semibold">
          404 Error
        </h3>
        <p class="text-gray-800 text-4xl font-semibold sm:text-5xl">
          Page not found
        </p>
        <p class="text-gray-600">
          Sorry, the page you are looking for could not be found or has been removed.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <a href="/" class="block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg" @click.prevent>
            Go back
          </a>
          <a href="/support" class="block py-2 px-4 text-gray-700 hover:bg-gray-50 font-medium duration-150 active:bg-gray-100 border rounded-lg" @click.prevent>
            Contact support
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
