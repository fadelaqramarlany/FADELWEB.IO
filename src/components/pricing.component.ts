import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Pilih Jenis Web
        </h2>
        <p class="mt-4 text-xl text-gray-500">
          Paket fleksibel untuk segala kebutuhan bisnis Anda.
        </p>
      </div>
      
      <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
        <!-- Card 1 -->
        <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white flex flex-col hover:shadow-lg transition-shadow">
          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-gray-900">Paket Hemat</h2>
            <p class="mt-4 text-sm text-gray-500">Cocok untuk landing page sederhana atau kartu nama digital.</p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-gray-900">Rp 100rb</span>
              <span class="text-base font-medium text-gray-500">/web</span>
            </p>
            <a href="https://wa.me/6288227793100?text=Halo%20Fadel,%20saya%20tertarik%20dengan%20Paket%20Hemat%20(100rb)." target="_blank" class="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700">Pilih Paket</a>
          </div>
          <div class="pt-6 pb-8 px-6 flex-grow">
            <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">Fitur:</h3>
            <ul class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">Single Page (1 Halaman)</span>
              </li>
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">Info Kontak & Sosial Media</span>
              </li>
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">Desain Standar</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="border border-blue-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white flex flex-col relative ring-2 ring-blue-500 hover:shadow-xl transition-shadow scale-105 z-10">
          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-gray-900">Paket Bisnis</h2>
            <p class="mt-4 text-sm text-gray-500">Pilihan terbaik untuk Company Profile atau UMKM.</p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-gray-900">Rp 500rb+</span>
              <span class="text-base font-medium text-gray-500">/web</span>
            </p>
            <a href="https://wa.me/6288227793100?text=Halo%20Fadel,%20saya%20tertarik%20dengan%20Paket%20Bisnis%20(500rb-1jt)." target="_blank" class="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700">Pilih Paket</a>
          </div>
          <div class="pt-6 pb-8 px-6 flex-grow">
            <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">Fitur Lengkap:</h3>
            <ul class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">Hingga 5 Halaman</span>
              </li>
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">Desain Responsif & Menarik</span>
              </li>
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">Integrasi WhatsApp & Maps</span>
              </li>
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">Gratis Revisi 2x</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-white flex flex-col hover:shadow-lg transition-shadow">
          <div class="p-6">
            <h2 class="text-lg leading-6 font-medium text-gray-900">Paket Premium</h2>
            <p class="mt-4 text-sm text-gray-500">Untuk Toko Online atau Sistem Bisnis yang lebih kompleks.</p>
            <p class="mt-8">
              <span class="text-4xl font-extrabold text-gray-900">Rp 1jt - 2jt</span>
              <span class="text-base font-medium text-gray-500">/web</span>
            </p>
            <a href="https://wa.me/6288227793100?text=Halo%20Fadel,%20saya%20tertarik%20dengan%20Paket%20Premium%20(1-2jt)." target="_blank" class="mt-8 block w-full bg-blue-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-blue-700">Pilih Paket</a>
          </div>
          <div class="pt-6 pb-8 px-6 flex-grow">
            <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">Fitur:</h3>
            <ul class="mt-6 space-y-4">
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">Toko Online / Katalog Produk</span>
              </li>
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">Fitur Custom (Form, Gallery)</span>
              </li>
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">SEO Optimized</span>
              </li>
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                <span class="text-sm text-gray-500">Maintenance 1 Bulan</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PricingComponent {}