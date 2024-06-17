import { NoteCard } from "@/components/noteCard";
import { NoteForm } from "@/components/noteForm";

export default async function Home() {
  const res = await fetch ("https://v1.appbackend.io/v1/rows/IbffA4phDHSs", {
    cache: "no-store",
  });
  const {data} = await res.json();

  return (
  <main className="max-w-2xl m-auto py-12space-y-4">
    <h1>All my notes</h1>
    <div className="space-y-4">
      {data.map((item) => {
      return (
        <NoteCard key={item._id} item={item} />
      );
    })}
    </div>
    <NoteForm />
  </main>
  );
};
