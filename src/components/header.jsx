export const Header = () => {
  return (
    <div className="pt-16 flex items-center justify-between gap-28 pr-16">
        <h1 className="text-4xl font-bold">My Notes</h1>
        <div className="flex items-center justify-center align-middle gap-4">
            <div class="text-black text-lg font-medium">User</div>
            <img class="w-10 h-10 relative rounded-[100px]" src="https://via.placeholder.com/40x40" />
        </div>    
    </div>
  );
};
