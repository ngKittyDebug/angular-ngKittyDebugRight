import { inject, Service, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { Observable } from 'rxjs';
import { TarotRole } from '@features/main/data/api/models/role.model';
import { TarotIntent } from '@features/main/data/api/models/intent.model';
import type { TarotResponseApi } from '@features/main/data/api/models/deploy-tarot-response-api.model';
import { TAROT_URL } from '@features/main/data/api/tokens/tarot-url.token';

@Service({
  autoProvided: false,
})
export class TarotService {
  private readonly httpClient = inject(HttpClient);
  private readonly url = inject(TAROT_URL);
  private readonly _role = signal<TarotRole>(TarotRole.DEVOPS);
  private readonly _intent = signal<TarotIntent>(TarotIntent.FULL_RELEASE);
  public readonly role = this._role.asReadonly();
  public readonly intent = this._intent.asReadonly();

  public loadReading(role = this._role(), intent = this._intent()): Observable<TarotResponseApi> {
    return this.httpClient.get<TarotResponseApi>(this.url, {
      params: { role, intent },
    });
  }

  public setRole(role: TarotRole): void {
    this._role.set(role);
  }

  public setIntent(intent: TarotIntent): void {
    this._intent.set(intent);
  }
}
