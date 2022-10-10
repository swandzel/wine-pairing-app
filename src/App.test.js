import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

const searchForQuery = async (query) => {
  const inputElement = screen.getByPlaceholderText(
    "Look for wine for yourself"
  );
  const buttonElement = screen.getByRole("button");
  await userEvent.type(inputElement, query);
  await userEvent.click(buttonElement);
};

describe("UI tests", () => {
  test("logo should be in the document", () => {
    const logoElement = screen.getByText("wine pairing app");
    expect(logoElement).toBeInTheDocument();
  });

  test("input should be rendered", () => {
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("input should be initially empty", () => {
    const inputElement = screen.getByPlaceholderText(
      "Look for wine for yourself"
    );
    expect(inputElement.value).toBe("");
  });

  test("button should be rendered", () => {
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("text info should be rendered", () => {
    const infoElement = screen.getByText(
      "Type for example beef, pizza, burger, asparagus etc."
    );
    expect(infoElement).toBeInTheDocument();
  });

  test("footer should be rendered", () => {
    const footerElement = screen.getByText(
      "Built in React, Express and MongoDB by swandzel"
    );
    expect(footerElement).toBeInTheDocument();
  });
});

describe("functional & API tests", () => {
  test("query for beef, and display correct data", async () => {
    const query = "beef";
    await searchForQuery(query);
    const resultElement = await screen.findByText(`Results for "${query}"`);
    expect(resultElement).toBeInTheDocument();
  });

  test("query for pork, and display 'Borsao Bodegas Tres Picos Garnacha' wine", async () => {
    const query = "pork";
    await searchForQuery(query);
    const resultElement = await screen.findByText(
      "Borsao Bodegas Tres Picos Garnacha"
    );
    expect(resultElement).toBeInTheDocument();
  });

  test("query for pork, and display wine image", async () => {
    const query = "pork";
    await searchForQuery(query);
    const resultElement = await screen.findByAltText("Our recommended wine");
    expect(resultElement).toBeInTheDocument();
  });

  test("query for salad, and display Sauvignon Blanc Grüner Veltliner Pinot Grigio grapes", async () => {
    const query = "salad";
    await searchForQuery(query);
    const sauvignonBlancElement = await screen.findByText("Sauvignon Blanc");
    const grünerVeltlinerElement = await screen.findByText("Grüner Veltliner");
    const pinotGrigioElement = await screen.findByText("Pinot Grigio");
    expect(sauvignonBlancElement).toBeInTheDocument();
    expect(grünerVeltlinerElement).toBeInTheDocument();
    expect(pinotGrigioElement).toBeInTheDocument();
  });

  test("query for salad, and check if grapes length is 3", async () => {
    const query = "salad";
    await searchForQuery(query);
    const grapes = await screen.findAllByTestId("grapes");
    expect(grapes.length).toBe(3);
  });
});
