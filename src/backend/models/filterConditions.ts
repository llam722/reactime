import {
  FunctionComponent,
  ClassComponent,
  IndeterminateComponent, // Before we know whether it is function or class
  ContextProvider,
  WorkTag,
} from '../types/backendTypes';

export const allowedComponentTypes: Set<WorkTag> = new Set([
  FunctionComponent,
  ClassComponent,
  ContextProvider,
  IndeterminateComponent,
]);
export const nextJSDefaultComponent = new Set([
  'Root',
  'Head',
  'AppContainer',
  'Container',
  'ReactDevOverlay',
  'ErrorBoundary',
  'AppRouterContext',
  'SearchParamsContext',
  'PathnameContextProviderAdapter',
  'PathnameContext',
  'RouterContext',
  'HeadManagerContext',
  'ImageConfigContext',
  'RouteAnnouncer',
  'Portal',
]);

export const remixDefaultComponents = new Set([
  'RemixBrowser',
  'Remix',
  'RemixErrorBoundary',
  'RouterProvider',
  'DataRouter',
  'DataRouterState',
  'RenderErrorBoundary',
  'Meta',
  'V1Meta',
  'Links',
  'RemixRoute',
  'Outlet',
  'ScrollRestoration2',
  'script',
  'Scripts',
  'LiveReload2',
]);
/**
 * A set of excluded props and variable name
 */
export const exclude = new Set([
  'alternate',
  'basename',
  'baseQueue',
  'baseState',
  'child',
  'childLanes',
  'children',
  'Consumer',
  'context',
  'create',
  'deps',
  'dependencies',
  'destroy',
  'dispatch',
  'location',
  'effects',
  'element',
  'elementType',
  'firstBaseUpdate',
  'firstEffect',
  'flags',
  'get key',
  'getState',
  'hash',
  'key',
  'lanes',
  'lastBaseUpdate',
  'lastEffect',
  'liftedStore',
  'navigator',
  'memoizedState',
  'mode',
  'navigationType',
  'next',
  'nextEffect',
  'pending',
  'parentSub',
  'pathnameBase',
  'pendingProps',
  'Provider',
  'updateQueue',
  'ref',
  'replaceReducer',
  'responders',
  'return',
  'route',
  'routeContext',
  'search',
  'shared',
  'sibling',
  'state',
  'store',
  'subscribe',
  'subscription',
  'stateNode',
  'tag',
  'type',
  '_calculateChangedBits',
  '_context',
  '_currentRenderer',
  '_currentRenderer2',
  '_currentValue',
  '_currentValue2',
  '_owner',
  '_self',
  '_source',
  '_store',
  '_threadCount',
  '$$typeof',
  '@@observable',
]);
