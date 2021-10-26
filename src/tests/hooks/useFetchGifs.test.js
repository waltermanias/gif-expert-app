import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
const unmockedFetch = global.fetch;
describe("useFetchGifs", () => {
  beforeAll(() => {
    global.fetch = () =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            data: [
              {
                id: "1",
                title: "my-title",
                images: {
                  downsized_medium: { url: "http://localhost:3000/image.jpg" },
                },
              },
            ],
          }),
      });
  });

  afterAll(() => {
    global.fetch = unmockedFetch;
  });

  it("should do something", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    const { data, loading } = result.current;

    expect(data).toEqual([]);
    expect(loading).toBe(true);
  });

  it("should return an array", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("One Punch")
    );

    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data).toEqual([
      {
        id: "1",
        title: "my-title",
        url: "http://localhost:3000/image.jpg",
      },
    ]);
    expect(loading).toBe(false);
  });
});
