import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { PricingComponent } from './components/pricing.component';
import { OrderComponent } from './components/order.component';
import { PaymentComponent } from './components/payment.component';
import { AiConsultantComponent } from './components/ai-consultant.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    PricingComponent,
    OrderComponent,
    PaymentComponent,
    AiConsultantComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}