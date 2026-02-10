import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        <div class="px-6 py-8 sm:p-10 text-center">
          <h2 class="text-3xl font-extrabold text-gray-900">Metode Pembayaran</h2>
          <p class="mt-4 text-lg text-gray-500">
            Pembayaran mudah dan aman melalui E-Wallet DANA.
          </p>
          
          <div class="mt-8 flex flex-col items-center justify-center bg-blue-50 p-6 rounded-xl border border-blue-100">
            <h3 class="text-2xl font-bold text-blue-800 mb-2">DANA</h3>
            <p class="text-gray-600 mb-4">Kirim pembayaran ke nomor berikut:</p>
            
            <div class="flex items-center space-x-4 bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200">
              <span class="text-2xl font-mono font-bold text-gray-800">0822-7793-100</span>
              <button (click)="copyNumber()" class="text-blue-600 hover:text-blue-800 focus:outline-none" title="Salin Nomor">
                @if (copied()) {
                  <svg class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                } @else {
                  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                }
              </button>
            </div>
            
            <p class="mt-4 text-sm text-gray-500">a.n Fadel Aqram Marpaung</p>
          </div>
          
          <div class="mt-6 text-left text-sm text-gray-500 bg-yellow-50 p-4 rounded-lg">
            <p><strong>Catatan:</strong></p>
            <ul class="list-disc ml-5 mt-1 space-y-1">
              <li>Mohon konfirmasi bukti transfer melalui WhatsApp setelah melakukan pembayaran.</li>
              <li>Pengerjaan dimulai setelah pembayaran diterima (DP minimal 50%).</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PaymentComponent {
  copied = signal(false);

  copyNumber() {
    navigator.clipboard.writeText('08227793100').then(() => {
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    });
  }
}