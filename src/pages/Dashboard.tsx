import Counter from "@/components/Counter";
import UserForm from "@/components/UserForm";
import RichTextEditor from "@/components/RichTextEditor";

function Dashboard() {
  return (
    <main className="min-h-screen p-8 space-y-8">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
        <div className="flex flex-col items-center gap-8">
          <Counter />
          <UserForm />
        </div>
        <RichTextEditor />
      </div>
    </main>
  );
}

export default Dashboard;
