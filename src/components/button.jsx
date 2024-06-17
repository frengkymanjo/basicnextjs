export const Button = ({variant, children }) => {

    if(variant === "secondary"){
        return <button className="bg-transparent border bg-indigo-600 flex items-center gap-2 text-indigo-600 p-2 rounded-xl">{children}</button>;
    }
  return <button className="bg-indigo-600 flex items-center gap-2 text-white p-2 rounded-xl">{children}</button>;
};
