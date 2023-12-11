import { Icon } from "@/module/components/Button";

export default function Experience() {
  return (
    <div>
      <div style={{ display: "flex", gap: "20px", margin: "30px 0px" }}>
        <Icon />
        <div>
          <div style={{ height: "200px" }}>Data</div>

          {Array(4)
            .fill("")
            .map((item, index) => (
              <div style={{ display: "flex", gap: "10px", margin: "10px" }}>
                <Icon width="100px" />
                <div>Data</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
