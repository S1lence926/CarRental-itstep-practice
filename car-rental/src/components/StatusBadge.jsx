const STYLES = {
  active: { background: "#dcfce7", color: "#166534" },
  completed: { background: "#f1f5f9", color: "#475569" },
};

export default function StatusBadge({ status }) {
  const text = status === "active" ? "Активна" : "Завершена";
  return (
    <span className="badge" style={STYLES[status]}>
      {text}
    </span>
  );
}