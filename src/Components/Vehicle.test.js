import React from "react";
import { render } from "@testing-library/react";
import { Vehicle } from "./Vehicle";

test("renders Vehicle correctly", () => {
  const mockData = {
    id: "Foo",
    price: "£30,000",
    description: "This is a test",
    url: "/path",
    media: [
      {
        url: "/path/to/media"
      }
    ]
  };

  const { getByText } = render(<Vehicle data={mockData} />);

  const title = getByText(/Foo/i);
  const price = getByText(/£30,000/i);
  const description = getByText(/This is a test/i);

  expect(title).toBeInTheDocument();
  expect(price).toBeInTheDocument();
  expect(description).toBeInTheDocument();
});
