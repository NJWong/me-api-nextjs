import Header from "@/components/docs/Header/Header"

export default function AdminLayout({ children }: { children: React.ReactNode}) {
  return (
    <>
      <Header />
      <main>
        <div className="px-6 py-4">{ children }</div>
      </main>
    </>
  )
}