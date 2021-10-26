import { getGifs } from "../../helpers/getGifs.js";

const unmockedFetch = global.fetch;

describe("getGifs", () => {
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

  it("should call fetch with params", async () => {
    const response = await getGifs("my-category");
    expect(response).toEqual([
      { id: "1", title: "my-title", url: "http://localhost:3000/image.jpg" },
    ]);
  });
});
