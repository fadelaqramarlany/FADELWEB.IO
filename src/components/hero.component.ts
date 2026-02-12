import { Component, output, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <div class="inline-flex items-center px-3 py-1 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wide mb-4">
                <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span> Solusi Digital #1
              </div>
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-4">
                <span class="block xl:inline">Bikin Website Bisnis</span>
                <span class="block text-blue-600 relative">
                   Mulai 100 Ribu
                   <svg class="absolute -bottom-2 left-0 w-full h-3 text-blue-200 -z-10" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none"><path d="M0 50 Q 50 100 100 50 Z" /></svg>
                </span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 leading-relaxed">
                Tingkatkan omset usaha Anda dengan website profesional dari Fadel Aqram Marpaung. Cepat, murah, dan dilengkapi teknologi AI tercanggih.
              </p>
              <div class="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                <div class="rounded-md shadow">
                  <button (click)="ctaClick.emit()" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all transform hover:scale-105">
                    Lihat Paket Harga
                  </button>
                </div>
                <div class="mt-3 sm:mt-0">
                   <!-- Tombol Akses AI -->
                   <button onclick="document.getElementById('ai-help').scrollIntoView({behavior: 'smooth'})" class="w-full flex items-center justify-center px-8 py-3 border-2 border-gray-900 text-base font-medium rounded-full text-gray-900 bg-transparent hover:bg-gray-900 hover:text-white md:py-4 md:text-lg md:px-10 transition-all font-mono">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                    </svg>
                    Coba FLEXBOS AI
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-slate-50 flex items-center justify-center">
        <!-- Placeholder for hero image with tech overlay -->
        <div class="relative w-full h-56 sm:h-72 md:h-96 lg:h-full">
           <img class="w-full h-full object-cover opacity-90" src="https://picsum.photos/800/600?grayscale" alt="Website Development">
           <div class="absolute inset-0 bg-gradient-to-l from-white via-transparent to-transparent lg:via-white/20"></div>
        </div>
      </div>
    </div>
  `
})
export class HeroComponent {
  ctaClick = output<void>();
}