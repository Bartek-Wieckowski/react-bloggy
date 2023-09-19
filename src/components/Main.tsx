type MainChildren = {
  children: React.ReactNode;
};
export default function Main({ children }: MainChildren) {
  return <main className="pt-8 dark:bg-slate-800 dark:text-white">{children}</main>;
}
