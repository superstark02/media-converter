import { variants } from "../constants";

export default function Typography(props: {
  children: any;
  className?: string;
  variant: keyof(typeof variants);
  style?: Record<string, string>;
}) {
  const { children, className} = props;
  return <div className={className} >{children}</div>;
}
