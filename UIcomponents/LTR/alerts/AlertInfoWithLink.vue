<template>
  <div class="max-w-5xl mx-auto px-4 md:px-8">
    <div class="flex justify-between p-4 rounded-md bg-blue-50 border border-blue-300">
      <div class="flex gap-3">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="self-center">
          <span class="text-blue-600 font-medium">
            New update available
          </span>
          <div class="text-blue-600">
            <p class="mt-2 sm:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div class="mt-2">
              <a
                href="/details" class="inline-flex items-center font-medium hover:underline sm:text-sm"
                @click.prevent
              >
                Details
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
