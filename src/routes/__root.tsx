import { Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
    </>
  ),
  errorComponent: () => <div>Not found</div>,
})
