export default function Button(props: { children: any }) {
  const { children } = props;
  return (
    <div>
      <button>{children}</button>
    </div>
  );
}

export const Icon = (props: { width?: string }) => {
  const { width = "200px" } = props;
  return (
    <div
      style={{
        width: width,
        height: width,
        borderRadius: "10px",
        backgroundColor: "lightgrey",
      }}
    ></div>
  );
};
