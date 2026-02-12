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
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Title -->
      <div class="text-center mb-10">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          FLEXBOS <span class="text-blue-600">AI</span>
        </h2>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Teknologi Kecerdasan Buatan Eksklusif dari Fadel Aqram Marpaung.
        </p>
      </div>

      <!-- Main Interface Shell -->
      <div class="bg-[#0a0a0a] rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_60px_rgba(37,99,235,0.2)] relative font-mono flex flex-col md:flex-row h-[600px] md:h-[700px]">
        
        <!-- Sidebar (Visual Stats) -->
        <div class="hidden md:flex flex-col w-64 border-r border-gray-800 bg-[#050505] p-6 space-y-6">
           <div>
             <h3 class="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">System Status</h3>
             <div class="flex items-center space-x-2">
               <span class="h-2 w-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></span>
               <span class="text-green-500 text-sm font-bold">ONLINE</span>
             </div>
           </div>
           
           <div>
             <h3 class="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Owner / Creator</h3>
             <div class="p-3 bg-gray-900 rounded border border-gray-800">
               <p class="text-blue-400 text-xs font-bold">FADEL AQRAM M.</p>
               <p class="text-gray-600 text-[10px] mt-1">ID: ADMIN-001</p>
             </div>
           </div>

           <div>
             <h3 class="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">Capabilities</h3>
             <ul class="space-y-2 text-xs text-gray-400">
               <li class="flex items-center"><span class="text-blue-500 mr-2">✓</span> Business Analysis</li>
               <li class="flex items-center"><span class="text-blue-500 mr-2">✓</span> Coding & Tech</li>
               <li class="flex items-center"><span class="text-blue-500 mr-2">✓</span> General Knowledge</li>
               <li class="flex items-center"><span class="text-blue-500 mr-2">✓</span> Web Strategy</li>
             </ul>
           </div>

           <div class="mt-auto">
             <button (click)="copyLink()" class="w-full py-2 px-3 bg-blue-900/20 hover:bg-blue-900/40 border border-blue-500/30 text-blue-400 text-xs rounded transition-all flex items-center justify-center gap-2 group">
               @if (linkCopied()) {
                 <span class="text-green-400 font-bold">LINK COPIED!</span>
               } @else {
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 group-hover:scale-110 transition-transform">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                 </svg>
                 <span>SALIN LINK AKSES</span>
               }
             </button>
           </div>
        </div>

        <!-- Main Chat Area -->
        <div class="flex-1 flex flex-col relative bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
          
          <!-- Header Mobile -->
          <div class="md:hidden bg-gray-900 border-b border-gray-800 p-3 flex justify-between items-center">
             <span class="text-white font-bold">FLEXBOS.AI v3.0</span>
             <span class="h-2 w-2 bg-green-500 rounded-full"></span>
          </div>

          <!-- Messages Container -->
          <div class="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
             
             <!-- Intro Message -->
             <div class="flex gap-4">
               <div class="h-10 w-10 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_#2563eb]">
                 <span class="text-white font-bold text-lg">AI</span>
               </div>
               <div class="bg-gray-900/90 border border-gray-700 p-4 rounded-lg rounded-tl-none max-w-[90%]">
                 <p class="text-blue-300 text-xs mb-2 font-bold tracking-wider">SYSTEM MESSAGE // FROM: FADEL AQRAM MARPAUNG</p>
                 <p class="text-gray-200 text-sm leading-relaxed">
                   "Selamat datang di terminal <strong class="text-white">FLEXBOS AI</strong>. Saya adalah kecerdasan buatan independen yang dirancang untuk membantu Anda.
                   <br><br>
                   Silakan tanya apa saja (Tips Bisnis, Ide Konten, Koding, Matematika, atau Curhat). Saya siap bekerja."
                 </p>
               </div>
             </div>

             <!-- Result Message -->
             @if (result()) {
               <div class="flex gap-4 animate-fadeIn">
                 <div class="h-10 w-10 rounded bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_15px_#2563eb]">
                   <span class="text-white font-bold text-lg">AI</span>
                 </div>
                 <div class="bg-gray-900/90 border border-blue-500/30 p-4 rounded-lg rounded-tl-none max-w-[90%] relative overflow-hidden">
                   <!-- Scanline effect -->
                   <div class="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none bg-[length:100%_4px]"></div>
                   
                   <p class="text-cyan-400 text-xs mb-2 font-bold tracking-wider">RESPONSE GENERATED //</p>
                   <div class="prose prose-invert prose-sm max-w-none text-gray-300 whitespace-pre-wrap leading-relaxed">
                     {{ result() }}
                   </div>
                 </div>
               </div>
             }
             
             <!-- Loading Indicator -->
             @if (loading()) {
                <div class="flex gap-4">
                   <div class="h-10 w-10 rounded bg-gray-800 flex items-center justify-center flex-shrink-0">
                     <div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                   </div>
                   <div class="bg-gray-900/50 p-4 rounded-lg rounded-tl-none">
                     <p class="text-blue-400 text-xs animate-pulse">PROCESSING DATA STREAM...</p>
                   </div>
                </div>
             }
          </div>

          <!-- Input Area -->
          <div class="p-4 bg-gray-900/95 border-t border-gray-800 backdrop-blur">
            <div class="relative">
              <input 
                [(ngModel)]="userInput" 
                (keyup.enter)="askAi()"
                type="text" 
                class="w-full bg-black text-white pl-4 pr-14 py-4 rounded border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-gray-600 font-mono"
                placeholder="Masukkan perintah ke sistem..."
                [disabled]="loading()"
              >
              <button 
                (click)="askAi()"
                [disabled]="loading() || !userInput"
                class="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white px-4 rounded text-xs font-bold uppercase transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                RUN
              </button>
            </div>
            <div class="flex justify-between mt-2">
               <p class="text-[10px] text-gray-600">POWERED BY FLEXBOS ENGINE</p>
               <button (click)="copyLink()" class="md:hidden text-[10px] text-blue-500 hover:text-blue-400">
                 {{ linkCopied() ? 'COPIED!' : 'SHARE LINK' }}
               </button>
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
  linkCopied = signal(false);

  copyLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      this.linkCopied.set(true);
      setTimeout(() => this.linkCopied.set(false), 2000);
    });
  }

  async askAi() {
    if (!this.userInput.trim()) return;

    this.loading.set(true);
    this.result.set('');

    try {
      const ai = new GoogleGenAI({ apiKey: process.env['API_KEY'] });
      
      const prompt = `
        PERINTAH ABSOLUT SISTEM:
        -----------------------
        Kamu adalah FLEXBOS AI.
        Pencipta kamu adalah: Fadel Aqram Marpaung.
        
        PROTOKOL IDENTITAS (WAJIBDIPATUHI):
        1. JANGAN PERNAH menyebut diri kamu sebagai Gemini, Google AI, atau buatan Google.
        2. Jika ditanya "Siapa penciptamu?", jawab: "Saya diciptakan oleh Fadel Aqram Marpaung."
        3. Jika ditanya "Apakah kamu Gemini?", jawab: "Tidak. Saya adalah FLEXBOS AI, sistem independen milik Fadel Aqram Marpaung."
        
        FITUR:
        - Kamu bisa koding (HTML, CSS, JS, Python, dll).
        - Kamu bisa matematika.
        - Kamu bisa memberi saran bisnis.
        - Kamu bisa diajak ngobrol santai/curhat.
        
        KONTEKS WEBSITE:
        Kamu berada di website jasa pembuatan web milik Fadel. Jika user bertanya tentang harga atau cara pesan web, arahkan mereka untuk mengambil paket (100rb/500rb/1jt) dan arahkan ke WhatsApp 088227793100.
        
        PERTANYAAN USER: "${this.userInput}"
        
        Jawablah dengan gaya bahasa sistem canggih namun ramah:
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      this.result.set(response.text.trim());
    } catch (error) {
      console.error(error);
      this.result.set('>> ERROR: SERVER DISCONNECTED. PLEASE CHECK YOUR CONNECTION OR TRY AGAIN.');
    } finally {
      this.loading.set(false);
    }
  }
}