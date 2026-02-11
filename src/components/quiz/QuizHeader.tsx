import { Link } from "react-router-dom";

export function QuizHeader() {
  return (
    <header className="py-6 px-4">
      <div className="container mx-auto">
        <Link to="/" className="inline-block">
          <img src="/favicon.png" alt="Daveat" className="h-10 w-10" />
        </Link>
      </div>
    </header>
  );
}
