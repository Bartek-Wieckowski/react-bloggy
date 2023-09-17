type TopChildren = {
  children: React.ReactNode;
};
export default function Top({ children }: TopChildren) {
  return <header>{children}</header>;
}
