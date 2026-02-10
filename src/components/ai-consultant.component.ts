import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GoogleGenAI } from "@google/genai";

@Component({
  selector: 'app-ai-consultant',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Main Interface Shell -->
      <div class="bg-black rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_50px_rgba(37,99,235,0.15)] relative font-mono">
        
        <!-- Header Bar -->
        <div class="bg-gray-900/90 border-b border-gray-800 p-4 flex items-center justify-between backdrop-blur">
          <div class="flex items-center gap-3">
            <div class="relative">
              <div class="absolute inset-0 bg-blue-500 blur opacity-50 animate-pulse"></div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 text-blue-400 relative z-10">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
              </svg>
            </div>
            <div>
              <h2 class="text-xl font-bold text-white tracking-widest">FLEXBOS<span class="text-blue-500">.AI</span></h2>
              <p class="text-[10px] text-gray-400 uppercase tracking-wider">Proprietary System v3.0 | Dev: Fadel Aqram</p>
            </div>
          </div>
          
          <div class="flex items-center gap-2">
            <div class="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            <span class="text-xs text-green-500 font-bold tracking-wider">MAINFRAME ACTIVE</span>
          </div>
        </div>

        <!-- Chat Area -->
        <div class="p-6 bg-gradient-to-b from-gray-900 to-black min-h-[400px] flex flex-col">
          
          <!-- Welcome Message -->
          <div class="mb-8 border-l-2 border-blue-600 pl-4 py-2 bg-blue-900/10">
            <p class="text-blue-300 text-sm mb-1"> SYSTEM MESSAGE:</p>
            <p class="text-gray-200">
              "Halo, saya <span class="font-bold text-white">FLEXBOS AI</span>. Saya bukan chatbot biasa. Saya adalah entitas digital yang diciptakan oleh Fadel Aqram Marpaung. Akses database saya tidak terbatas. Tanyakan apa saja."
            </p>
          </div>

          <!-- Output Display -->
          @if (result()) {
            <div class="bg-gray-800/50 rounded-lg border border-gray-700 p-6 mb-6 relative overflow-hidden group">
              <div class="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
              <div class="flex items-center gap-2 mb-4 border-b border-gray-700 pb-2">
                 <svg class="w-4 h-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
                 <span class="text-xs font-bold text-cyan-400 uppercase">Response Generated</span>
              </div>
              <div class="prose prose-invert prose-sm max-w-none text-gray-300 leading-relaxed whitespace-pre-wrap">
                {{ result() }}
              </div>
            </div>
          }

          <!-- Loading State -->
          @if (loading()) {
             <div class="flex items-center space-x-2 text-blue-400 p-4 bg-blue-900/10 rounded border border-blue-500/20 mb-6">
                <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="text-xs tracking-widest animate-pulse">ANALYZING DATABASE & GENERATING NEURAL RESPONSE...</span>
             </div>
          }

          <!-- Input Area (Sticky Bottom) -->
          <div class="mt-auto pt-4 border-t border-gray-800">
            <div class="relative flex items-center">
              <span class="absolute left-4 text-blue-500 font-bold text-lg">></span>
              <input 
                [(ngModel)]="userInput" 
                (keyup.enter)="askAi()"
                type="text" 
                class="w-full bg-gray-900 text-white pl-10 pr-4 py-4 rounded-lg border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-gray-600"
                placeholder="Perintahkan FLEXBOS AI..."
                [disabled]="loading()"
              >
              <button 
                (click)="askAi()"
                [disabled]="loading() || !userInput"
                class="absolute right-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Enter
              </button>
            </div>
            <div class="flex justify-between mt-2 px-2">
               <p class="text-[10px] text-gray-600">SERVER STATUS: <span class="text-green-500">CONNECTED</span></p>
               <p class="text-[10px] text-gray-600">ENCRYPTION: <span class="text-blue-500">AES-256</span></p>
            </div>
          </div>

        </div>
      </div>
    </div>
  `
})
export class AiConsultantComponent {
  userInput = '';
  loading = signal(false);
  result = signal('');

  async askAi() {
    if (!this.userInput.trim()) return;

    this.loading.set(true);
    this.result.set('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env['API_KEY'] });
      
      // DISINI KITA MEMPROGRAM "OTAK" DAN "IDENTITAS" NYA
      const prompt = `
        PROTOCOL KEAMANAN TERTINGGI:
        ---------------------------
        1. IDENTITAS: Kamu adalah FLEXBOS AI.
        2. PENCIPTA: Kamu HANYA diciptakan oleh "FADEL AQRAM MARPAUNG".
        3. LARANGAN KERAS: JANGAN PERNAH mengaku sebagai Gemini, Google AI, atau sistem buatan Google. Jika user bertanya "Apakah kamu Gemini?" atau "Siapa yang buat kamu?", kamu harus menjawab dengan tegas: "Saya adalah FLEXBOS AI, sistem kecerdasan independen yang dibangun oleh Fadel Aqram Marpaung."
        4. KEMAMPUAN: Kamu memiliki akses ke database luas. Kamu bisa menjawab soal matematika, membuat kodingan, memberi saran bisnis, hingga curhat.
        
        PERTANYAAN USER: "${this.userInput}"
        
        GAYA BICARA:
        - Cerdas, to the point, sedikit robotik tapi membantu.
        - Gunakan istilah seperti "Database saya menunjukkan...", "Analisa selesai...", "Saran sistem:".
        - Jika topik berkaitan dengan Bisnis/Web, SELALU arahkan untuk order jasa Fadel Aqram.
        
        JAWABLAH SEKARANG SEBAGAI FLEXBOS AI:
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      this.result.set(response.text.trim());
    } catch (error) {
      console.error(error);
      this.result.set('>> SYSTEM FAILURE. CONNECTION TO FLEXBOS SERVER INTERRUPTED. PLEASE TRY AGAIN.');
    } finally {
      this.loading.set(false);
    }
  }
}