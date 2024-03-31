import AdminHeader from "@/components/AdminHeader/AdminHeader"

export default function AdminLayout({ children }: { children: React.ReactNode}) {
  return (
    <div>
      <AdminHeader />
      <div className="px-6 py-4">{ children }</div>
    </div>
  )
}