import React from "react";
import { CheckCircle, Home2, TrashBin2 } from "solar-icon-set/essentionalui";
import { Checklist } from "solar-icon-set/list";
import { Paper } from "solar-icon-set/notes";
import { NotificationUnread } from "solar-icon-set/notifications";
import { Bookmark, BookmarkCircle } from "solar-icon-set/school";
import { Alarm, Calendar } from "solar-icon-set/time";

export const Dashboard = ({ children }) =>  {
  return (
    <div className="flex-1 ml-[250px] overflow-y-auto flex h-screen ">
        <aside className="fixed left-0 top-0 bottom-0 w-[200px] bg-slate-50 border-r flex flex-col items-center justify-center">
            <section className="flex flex-col space-y-4">
              <Menu label="Add new " icon={<Paper />} />
              <Menu label="Checklist" icon={<CheckCircle/>} />
              <Menu label="Calender" icon={<Calendar/>} />
              <Menu label="Bookmark" icon={<Bookmark/>} />
              <Menu label="Trash" icon={<TrashBin2/>} />
            </section>
        </aside>
        <main className="w-[calc(100%-230px) pl-16">{children}</main>
    </div>
  );
};

const Menu = ({label, icon}) => {
  return (
    <div className="bg-tranparent hover:bg-sky-300 hover:text-white p-2 rounded-lg flex gap-2 items-center">
      {icon}
      <div>{label}</div>
    </div>
  );
};
