interface HeaderProps {
  title: string;
  text?: string;
}

export default function Header({ title, text }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container">
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </header>
  );
}