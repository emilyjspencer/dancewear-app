import { render, screen } from "@testing-library/react";
import Cards from "./Cards";

describe("Cards Component", () => {
  it("renders card content correctly", () => {
    const props = {
      imgSrc: "path_to_image.jpg",
      imgAlt: "Image description",
      title: "Title",
      text1: "Text 1",
      text2: "Text 2",
      text3: "Text 3",
      text4: "Text 4",
      text5: "Text 5",
      text6: "Text 6",
      text7: "Text 7",
      text8: "Text 8",
    };

    render(<Cards {...props} />);

    const imgElement = screen.getByAltText("Image description");

    expect(imgElement).toBeInTheDocument();
  });
});