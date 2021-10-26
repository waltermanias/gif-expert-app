import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe("GifGridItem", () => {
  const wrapper = shallow(
    <GifGridItem title="My Title" url="http://localhost:3000/image.jpg" />
  );

  it("should render the component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should show the title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe("My Title");
  });

  it("should contain an image with url", () => {
    const img = wrapper.find("img");
    expect(img.props().src).toBe("http://localhost:3000/image.jpg");
    expect(img.prop("alt")).toBe("imagen");
  });

  it("should have animate__bounce", () => {
    const div = wrapper.find("div");
    expect(div.hasClass("animate__bounce")).toBe(true);
  });
});
