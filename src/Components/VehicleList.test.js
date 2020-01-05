import React from "react";
import { render } from "@testing-library/react";
import { VehicleList } from "./VehicleList";

test("renders Loading if no data found", () => {
  const { getByText } = render(<VehicleList />);

  const loading = getByText(/Loading/i);
  expect(loading).toBeInTheDocument();
});
