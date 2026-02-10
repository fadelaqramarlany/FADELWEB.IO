import { Component, output, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0 flex items-center cursor-pointer" (click)="onNavClick('beranda')">
            <span class="text-2xl font-bold text-blue-600">FadelWeb</span>
          </div>
          
          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button (click)="toggleMenu()" type="button" class="text-gray-500 hover:text-blue-600 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex space-x-8">
            <button (click)="onNavClick('beranda')" class="text-gray-700 hover:text-blue-600 font-medium">Beranda</button>
            <button (click)="onNavClick('tentang-kami')" class="text-gray-700 hover:text-blue-600 font-medium">Tentang Kami</button>
            <button (click)="onNavClick('jenis-web')" class="text-gray-700 hover:text-blue-600 font-medium">Jenis & Harga</button>
            <button (click)="onNavClick('pembayaran')" class="text-gray-700 hover:text-blue-600 font-medium">Pembayaran</button>
            <button (click)="onNavClick('order')" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">Pesan Sekarang</button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isOpen()) {
        <div class="md:hidden bg-white border-t border-gray-100">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button (click)="onNavClick('beranda')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Beranda</button>
            <button (click)="onNavClick('tentang-kami')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Tentang Kami</button>
            <button (click)="onNavClick('jenis-web')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Jenis & Harga</button>
            <button (click)="onNavClick('pembayaran')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Pembayaran</button>
            <button (click)="onNavClick('order')" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-600 font-bold hover:bg-gray-50">Pesan Sekarang</button>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  navigate = output<string>();
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  onNavClick(section: string) {
    this.navigate.emit(section);
    this.isOpen.set(false);
  }
}