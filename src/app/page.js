import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { Card } from "@/components/card";
import { Button } from "@/components/button";
import { DashboardTemplate } from "@/components/dashboard/dashboard.template";


export default function Home() {
  const students = [
    {name: "Frengky", age: 20, gender: "male"},
    {name: "Amelia", age: 22, gender: "female"},
    {name: "Paska", age: 24, gender: "female"},
    {name: "Gaung", age: 20, gender: "male"},
    {name: "Alex", age: 20, gender: "female"},
  ];


  return (
    <DashboardTemplate>
      <main className="grid grid-cols-3 gap-4">
        {students.map((student) => {
          return <Card key={student.name} {...student} />

        })}
        
      </main>
      <Button>
        <div>+</div>
        <div>Hello</div>
      </Button>
      <Button variant="secondary">
        <div>+</div>
        <div>Hello Secondary</div>
      </Button>
    </DashboardTemplate>
  );
}
