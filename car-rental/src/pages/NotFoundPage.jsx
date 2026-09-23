import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <section>
      <h1>404 — страница не найдена</h1>
      <p>Похоже, такого адреса не существует.</p>
      <Link to="/" className="btn">
        На главную
      </Link>
    </section>
  );
}