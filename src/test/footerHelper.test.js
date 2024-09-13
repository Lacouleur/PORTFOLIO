import React, { useState } from "react";
import { watchFooterScroll } from "../utils/helpers/footerHelper";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
}));

describe("watchFooterScroll", () => {
  beforeEach(() => {
    useState.mockImplementation(jest.requireActual("react").useState);
  });

  it("should set footer fixed to false", () => {
    const setMockedFooterAnim = jest.fn();
    const setMockedIsFooterFixed = jest.fn();
    const windowY = 501;
    useState.mockImplementation(() => ["in", setMockedFooterAnim]);
    useState.mockImplementation(() => [true, setMockedIsFooterFixed]);
    watchFooterScroll(setMockedFooterAnim, setMockedIsFooterFixed);

    console.log("RESULT", setMockedFooterAnim);
  });
});
