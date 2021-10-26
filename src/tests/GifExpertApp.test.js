import { shallow } from "enzyme";
import { GifExpertApp } from "../GifExpertApp.js";

describe("GifExpertApp", () => {
  it("should match with snapshot", () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(1);
  });
});
