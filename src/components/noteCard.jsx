"use client"
import { useRouter } from "next/navigation";

export const NoteCard = ({ item }) => {
    const router = useRouter();

    async function handleDeleteData(){
        await fetch ("https://v1.appbackend.io/v1/rows/IbffA4phDHSs", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([item._id]),
        });

        router.refresh();
    }

  return (
    <div className="p-4 bg-sky-100 rounded-[20px]">
        <h3 className="bg-amber-200 px-4 py-1 flex-col rounded-[8px] justify-center items-center gap-2.5 inline-flex text-lg font-medium text-black">{item.title}</h3>
        <p className="text-sm font-normal mt-2 text-black mb-4">{item.content}</p>
        <button onClick={handleDeleteData}>Remove</button>
    </div>
  );
};
