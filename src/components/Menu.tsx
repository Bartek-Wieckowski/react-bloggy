type MenuChildren = {
  children: React.ReactNode;
};
export default function Menu({ children }: MenuChildren) {
  return <header>{children}</header>;
}
