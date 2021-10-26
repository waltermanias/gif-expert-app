import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock("../../hooks/useFetchGifs");

describe("GifGrid tests", () => {
  it("should render the component", () => {
    useFetchGifs.mockReturnValue({ data: [], loading: true });
    const wrapper = shallow(<GifGrid category="One Punch" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render items", () => {
    const fakeData = {
      data: [
        { id: "ABC", title: "test", url: "http://localhost:3000/image.jpg" },
      ],
      loading: false,
    };
    useFetchGifs.mockReturnValue(fakeData);
    const wrapper = shallow(<GifGrid category="One Punch" />);
    expect(wrapper).toMatchSnapshot();

    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(fakeData.data.length);
  });
});
