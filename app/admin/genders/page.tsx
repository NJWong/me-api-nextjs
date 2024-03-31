import GendersForm from "@/components/admin/GendersForm/GendersForm";

export default function Page() {
  return (
    <div className="flex flex-col gap-4">
      <h1>Manage Genders</h1>
      <GendersForm />
    </div>
  )
}