import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/__layout/currentexams')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_dashboard/__layout/currentexams"!</div>
}
