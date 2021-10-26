import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("AddCategory", () => {
  const setCategories = jest.fn();
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

  it("should render the component", () => {
    const wrapper = shallow(<AddCategory setCategories={setCategories} />);
    expect(wrapper).toMatchSnapshot();
  });

  describe("should not call the method", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });
    it("should not submit any data", () => {
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      expect(setCategories).not.toHaveBeenCalled();
    });
  });

  describe("should call the method", () => {
    it("should call setCategories method", () => {
      const input = wrapper.find("input");
      input.simulate("change", { target: { value: "Hola mundo" } });
      wrapper.find("form").simulate("submit", { preventDefault: () => {} });
      expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
      expect(input.text().trim()).toBe("");
    });
  });
});
