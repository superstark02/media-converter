import Carousel from "@/module/components/Carousel";

const projects = [
  {
    title: "Pidgin",
    description: "Just a website",
    special: "Some qualities",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Pidgin",
    description: "Just a website",
    special: "Some qualities",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Pidgin",
    description: "Just a website",
    special: "Some qualities",
    image:
      "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  }
];

export default function Projects() {
  return (
    <div
      style={{
        margin: "20px 0px",
      }}
    >
      <div>
        <Carousel slides={projects} />
      </div>
    </div>
  );
}
