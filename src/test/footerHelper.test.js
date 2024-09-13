import React from "react";
import { watchFooterScroll } from "../utils/helpers/footerHelper";

describe("watchFooterScroll", () => {
  it("should set footer fixed to false", () => {
    const [mockedFooterAnim, setMockedFooterAnim] = React.useState("in");
    const [mockedIsFooterFixed, setMockedIsFooterFixed] = React.useState(true);

    window.scrollY = 501;
    watchFooterScroll(setMockedFooterAnim, setMockedIsFooterFixed);

    expect(mockedFooterAnim).toBe("out");
    expect(mockedIsFooterFixed).toBe(false);
  });
});
