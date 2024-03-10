import { fireEvent, render } from "@testing-library/react";
import { Counter } from ".";

it("increment counter", () => {
  const { getByTestId } = render(<Counter />);

  fireEvent.click(getByTestId("count-up"));
  fireEvent.click(getByTestId("count-up"));
  fireEvent.click(getByTestId("count-up"));

  expect(getByTestId("counter")).toHaveTextContent("3");
});

it("decrement counter", () => {
  const { getByTestId } = render(<Counter />);

  fireEvent.click(getByTestId("count-down"));

  expect(getByTestId("counter")).toHaveTextContent("0");
});
