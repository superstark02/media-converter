import { pointer } from "@/assets";
import { ReactNode, useState } from "react";

export default function Accordian(props: {
  title: string;
  component: ReactNode;
}) {
  const [show, setShow] = useState(true);
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "1000px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            borderBottom: "solid 1px #756c6c",
          }}
          className="pointer"
          onClick={() => setShow((val) => !val)}
        >
          <div
            style={{
              fontSize: "20px",
              color: "#ef9218",
              fontWeight: 400,
              textTransform: "uppercase",
              position: 'sticky',
              top: 0
            }}
          >
            {props.title}
          </div>
          <div>{show ? <span>Up</span> : <span>Down</span>}</div>
        </div>
        {show ? props.component : <></>}
      </div>
    </div>
  );
}
