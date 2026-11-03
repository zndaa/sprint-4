interface HeaderProps {
  title?: string;
  text?: string;
}

export default function Header({ title = "Kampüs Etkinlikleri", text }: HeaderProps) {
  return (
    <header className="site-header">
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </header>
  );
}