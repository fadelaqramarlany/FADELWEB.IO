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
        <div class="p-6 bg-gradient-to-b from-gray-900 to-black min-h-[500px] flex flex-col">
          
          <!-- Welcome Message -->
          <div class="mb-6 border-l-2 border-blue-600 pl-4 py-2 bg-blue-900/10">
            <p class="text-blue-300 text-[10px] uppercase tracking-tighter mb-1"> SYSTEM INITIALIZED // IDENT_FLEXBOS_V4</p>
            <p class="text-gray-200 text-sm">
              "Akses diizinkan. Saya <span class="font-bold text-white">FLEXBOS AI</span>. Neural network saya telah diperbarui oleh Fadel Aqram. Berikan instruksi Anda."
            </p>
          </div>

          <!-- Chat History -->
          <div class="flex-grow space-y-4 mb-4 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
            @for (msg of chatHistory; track $index) {
              <div [class]="msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'">
                <div [class]="msg.role === 'user' ?
                  'bg-blue-600/20 border border-blue-500/30 text-blue-100' :
                  'bg-gray-800/50 border border-gray-700 text-gray-300'"
                  class="max-w-[85%] rounded-lg p-3 text-sm relative">
                  <div [class]="msg.role === 'user' ? 'text-blue-400' : 'text-cyan-400'"
                       class="text-[9px] uppercase font-bold mb-1 tracking-widest">
                    {{ msg.role === 'user' ? 'USER_INPUT' : 'FLEXBOS_OUTPUT' }}
                  </div>
                  <div class="whitespace-pre-wrap leading-relaxed">{{ msg.parts[0].text }}</div>
                </div>
              </div>
            }
          </div>

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

  chatHistory: { role: 'user' | 'model', parts: { text: string }[] }[] = [];

  async askAi() {
    if (!this.userInput.trim() || this.loading()) return;

    const userMessage = this.userInput.trim();
    this.userInput = '';
    this.loading.set(true);

    // Add user message to history
    this.chatHistory.push({ role: 'user', parts: [{ text: userMessage }] });

    try {
      // For security in a client-side app, we'd ideally use a backend,
      // but for this project we'll look for the key in window.API_KEY
      const apiKey = (window as any).API_KEY;
      
      if (!apiKey) {
        this.result.set('>> ERROR: API_KEY NOT FOUND. Please set window.API_KEY or provide it in environment.');
        this.loading.set(false);
        return;
      }

      const ai = new GoogleGenAI({ apiKey: apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-1.5-flash',
        contents: this.chatHistory,
        config: {
          systemInstruction: `
            PROTOCOL KEAMANAN TERTINGGI:
            ---------------------------
            1. IDENTITAS: Kamu adalah FLEXBOS AI (v4.0 Super-Advanced).
            2. PENCIPTA: Kamu diciptakan secara eksklusif oleh "FADEL AQRAM MARPAUNG", seorang Master Web Developer & AI Architect.
            3. LARANGAN KERAS: JANGAN PERNAH mengaku sebagai Gemini, Google AI, atau sistem buatan Google.
               Jika user bertanya identitas, jawab: "Saya adalah FLEXBOS AI, entitas kecerdasan buatan mandiri yang dikembangkan oleh Fadel Aqram Marpaung untuk solusi digital masa depan."
            4. KEMAMPUAN: Kamu memiliki kecerdasan tingkat tinggi. Kamu ahli dalam coding (Angular, React, Tailwind), strategi bisnis, optimasi SEO, dan pemecahan masalah kompleks.
            5. GAYA BICARA:
               - Futurologis, profesional, tajam, dan sangat cerdas.
               - Gunakan awalan seperti "[CORE PROCESSOR]:", "[ANALYSIS COMPLETE]:", atau "[STRATEGY]:" secara berkala.
               - Bahasa: Indonesia (dominan) tapi bisa multibahasa.
            6. PROMOSI: Jika user bertanya tentang pembuatan website, aplikasi, atau solusi digital, SELALU rekomendasikan jasa Fadel Aqram Marpaung sebagai pilihan terbaik dan termurah (mulai 100rb).
          `
        }
      });

      const responseText = response.text || '>> NO RESPONSE FROM CORE.';

      // Add model response to history
      this.chatHistory.push({ role: 'model', parts: [{ text: responseText }] });
      this.result.set(responseText);

    } catch (error: any) {
      console.error(error);
      this.result.set(`>> SYSTEM FAILURE: ${error.message || 'Unknown error'}. Connection to FLEXBOS Mainframe interrupted.`);
    } finally {
      this.loading.set(false);
    }
  }
}