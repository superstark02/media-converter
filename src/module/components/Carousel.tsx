import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { chevLeft, chevRight } from "../constants";

export default function Carousel(props: {
  slides: { image: string; title: string; description: string }[];
}) {
  const { slides } = props;
  const [currIdx, setIdx] = useState(0);
  const ref = useRef<any>(null);

  const handleScroll = () => {
    if (!ref?.current?.scrollIntoView) {
      return;
    }
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "center",
    });
  };

  const changeIndex = (diff: number) => {
    setIdx((idx) => {
      if (idx + diff < 0) {
        return slides.length - 1;
      } else {
        return (idx + diff) % slides.length;
      }
    });
  };

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <div
        className="carousel-btn-left pointer"
        onClick={() => changeIndex(-1)}
      >
        <img width="64px" src={chevLeft} />
      </div>
      <div
        style={{
          overflowX: "scroll",
          display: "flex",
          gap: "20px",
        }}
      >
        {slides.map((item, idx) => {
          if (idx === currIdx) {
            return (
              <div ref={ref} key={idx} style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    width: "600px",
                    height: "100%",
                    backgroundImage:
                      "linear-gradient(to top right, rgba(0,0,0,1), rgba(0,0,0,0))",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "end",
                  }}
                >
                  <div
                    style={{
                      margin: "20px",
                      color: "white",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "30px",
                        fontWeight: 800,
                        marginBottom: "10px",
                      }}
                    >
                      {item.title}
                    </div>
                    <div>{item.description}</div>
                  </div>
                </div>
                <img width="600px" src={item.image} />
              </div>
            );
          }
          return (
            <div key={idx} style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  width: "600px",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(to top right, rgba(0,0,0,1), rgba(0,0,0,0))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "end",
                }}
              >
                <div
                  style={{
                    margin: "20px",
                    color: "white",
                  }}
                >
                  <div
                    style={{
                      fontSize: "30px",
                      fontWeight: 800,
                      marginBottom: "10px",
                    }}
                  >
                    {item.title}
                  </div>
                  <div>{item.description}</div>
                </div>
              </div>
              <img width="600px" src={item.image} />
            </div>
          );
        })}
      </div>
      <div
        className="carousel-btn-right pointer"
        onClick={() => changeIndex(1)}
      >
        <img width="64px" src={chevLeft} />
      </div>
    </div>
  );
}
