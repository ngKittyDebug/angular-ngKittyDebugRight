import type {
  ActivatedRouteSnapshot,
  PartialMatchRouteSnapshot,
  Route,
  RouterStateSnapshot,
  UrlSegment,
} from '@angular/router';

export const routerFixture = {
  activatedRouteSnapshotFixture: {} as unknown as ActivatedRouteSnapshot,
  currentSnapshot: {} as unknown as PartialMatchRouteSnapshot,
  routerStateFixture: {} as unknown as RouterStateSnapshot,
  route: {} as unknown as Route,
  segments: [] as UrlSegment[],
};
