function StatusBadge({ status }) {

  const colors = {
    Running: "#10B981",
    Completed: "#3B82F6",
    Paused: "#F59E0B",
    Failed: "#EF4444",
  };

  return (
    <span
      className="status-badge"
      style={{
        background: colors[status],
      }}
    >
      {status}
    </span>
  );
}

export default StatusBadge;