import Counter from "@/components/Counter";
import UserForm from "@/components/UserForm";
import RichTextEditor from "@/components/RichTextEditor";
import PageContainer from "@/components/layouts/page-container";

function Task() {
  return (
    <PageContainer>
      <div className="flex flex-1 flex-col space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-2xl font-bold tracking-tight">
            Thank You for the opportunity 🚀
          </h2>
        </div>
        <main className="min-h-screen p-8 space-y-8">
          <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2">
            <div className="flex flex-col items-center gap-8">
              <Counter />
              <UserForm />
            </div>
            <RichTextEditor />
          </div>
        </main>
      </div>
    </PageContainer>
  );
}

export default Task;
