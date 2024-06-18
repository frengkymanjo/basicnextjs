export const Breadcrumb = () => {
  return (
    <div className=" pt-8 flex justify-between">
        <section className="flex justify-start gap-4">
            <Menu label="All" />
            <Menu label="Todays" />
            <Menu label="This Week" />
            <Menu label="This Month" />
        </section>
    </div>
  );
};


const Menu = ({label}) => {
  return (
    <div className="bg-tranparent hover:bg-sky-300 hover:text-white p-2 rounded-lg flex gap-2 items-center gap-4">
      <div>{label}</div>
    </div>
  );
};