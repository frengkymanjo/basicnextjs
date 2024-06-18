import { NoteCard } from "@/components/noteCard";
import { NoteForm } from "@/components/noteForm";
import { Header } from "@/components/header";
import { Dashboard } from "@/components/dashboard";
import { Breadcrumb } from "@/components/breadcrumb";

export default async function Home() {
  const res = await fetch ("https://v1.appbackend.io/v1/rows/IbffA4phDHSs", {
    cache: "no-store",
  });
  const {data} = await res.json();

  return (
  <Dashboard>
    <Header />
    <Breadcrumb />

    <main className="pt-8 max-w-2xl m-auto py-12">
    {/* <h1>All my notes</h1> */}
    <NoteForm />
    </main>

    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pr-16">
      {data.map((item) => {
      return (
          <NoteCard key={item._id} item={item} />
      );
    })}
    </div>
  

  </Dashboard>
  );
};
