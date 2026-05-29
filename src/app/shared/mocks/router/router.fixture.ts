import type { ActivatedRouteSnapshot, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';

export const routerFixture = {
  activatedRouteSnapshotFixture: {} as unknown as ActivatedRouteSnapshot,
  routerStateFixture: {} as unknown as RouterStateSnapshot,
  route: {} as unknown as Route,
  segments: [] as UrlSegment[],
};
