import { Outlet } from 'react-router-dom'

export default function DashboardLayout() {
  return (
    <section>
      <aside>This is a sidebar</aside>
      <Outlet />
    </section>
  )
}
