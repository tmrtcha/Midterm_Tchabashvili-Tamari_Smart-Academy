export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "15px 20px",
        background: "#f3f3f3",
        borderTop: "1px solid #ddd",
        fontSize: "12px",
        color: "#555",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <div>Conditions of Use</div>
      <div>Privacy Notice</div>
      <div>Interest-Based Ads</div>
      <div>© 1996-2026 Midterm Project</div>
    </footer>
  );
}
