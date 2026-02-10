import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-gray-800 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div class="mb-4 md:mb-0 text-center md:text-left">
          <h3 class="text-xl font-bold">Fadel Web Solutions</h3>
          <p class="text-gray-400 text-sm mt-1">Solusi Digital UMKM Indonesia</p>
        </div>
        <div class="text-center md:text-right">
          <p class="text-gray-400 text-sm">© {{ year }} Fadel Aqram Marpaung. All rights reserved.</p>
          <p class="text-gray-500 text-xs mt-1">WhatsApp: 0882-2779-3100</p>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}