import { Component, output, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16 items-center">
          <div class="flex-shrink-0 flex items-center cursor-pointer gap-2" (click)="onNavClick('beranda')">
            <div class="h-8 w-8 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xl border border-gray-700 shadow-lg">F</div>
            <span class="text-2xl font-bold text-gray-900 tracking-tight font-mono">FADELWEB<span class="text-blue-600">.IO</span></span>
          </div>
          
          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button (click)="toggleMenu()" type="button" class="text-gray-500 hover:text-blue-600 focus:outline-none p-2">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-6">
            <button (click)="onNavClick('beranda')" class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Beranda</button>
            <button (click)="onNavClick('tentang-kami')" class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Tentang Kami</button>
            <button (click)="onNavClick('jenis-web')" class="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">Harga Paket</button>
            
            <!-- Special AI Button -->
            <button (click)="onNavClick('ai-help')" class="flex items-center space-x-1 px-3 py-1 rounded-full bg-black text-white text-xs font-mono border border-gray-700 hover:bg-gray-800 transition-all shadow-lg hover:shadow-cyan-500/20 group">
              <span class="h-2 w-2 rounded-full bg-green-500 animate-pulse group-hover:bg-cyan-400"></span>
              <span>FLEXBOS.AI</span>
            </button>

            <button (click)="onNavClick('order')" class="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">Pesan Website</button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isOpen()) {
        <div class="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div class="px-4 pt-2 pb-4 space-y-2">
            <button (click)="onNavClick('beranda')" class="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50">Beranda</button>
            <button (click)="onNavClick('ai-help')" class="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-white bg-black hover:bg-gray-800 flex items-center gap-2">
               <span class="h-2 w-2 rounded-full bg-green-500"></span> FLEXBOS AI (Coba Sekarang)
            </button>
            <button (click)="onNavClick('jenis-web')" class="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50">Daftar Harga</button>
            <button (click)="onNavClick('order')" class="block w-full text-left px-3 py-3 rounded-lg text-base font-medium text-blue-600 font-bold bg-blue-50">Pesan Website</button>
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