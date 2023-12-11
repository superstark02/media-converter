export default function Overview() {
  return (
    <div
      style={{
        height: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div
        className="main-content"
        style={{ marginLeft: "150px", marginTop: "200px" }}
      >
        <div>HELLO THERE👋, I’M</div>
        <div
          style={{
            margin: "30px 0px",
            fontSize: "60px",
            fontWeight: "800",
            textShadow: "0 15px 15px rgba(0,0,0,.16)",
          }}
        >
          Dipit Sharma
        </div>
        <div
          style={{
            margin: "20px 0px",
            fontSize: "20px",
            color: "#ef9218",
            fontWeight: 400,
          }}
        >
          FULL-STACK DEVELOPER
        </div>
        <div
          style={{
            color: "#756c6c",
            fontSize: "14px",
          }}
        >
          Node JS | React JS | SQL | Python
        </div>
        <button
          style={{
            margin: "30px 0px",
            borderRadius: "50px",
            padding: "20px 40px",
            outline: "none",
            border: "none",
            fontSize: "12px",
            boxShadow: "0 15px 15px rgba(0,0,0,.16)",
            backgroundColor: "#ef9218",
          }}
          className="pointer"
        >
          CHECKOUT MY CV
        </button>
      </div>
    </div>
  );
}
