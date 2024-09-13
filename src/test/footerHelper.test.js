import { watchFooterScroll } from "../utils/helpers/footerHelper";

describe("watchFooterScroll", () => {
  it("should set footer fixed to false", () => {
    const FooterAnimOut = watchFooterScroll("anim", 501);
    const FooterAnimIn = watchFooterScroll("anim", 0);
    const FooterIsFixed = watchFooterScroll("isFixed", 0);
    const FooterIsNotFixed = watchFooterScroll("isFixed", 501);

    expect(FooterAnimOut).toBe("out");
    expect(FooterAnimIn).toBe("in");
    expect(FooterIsFixed).toBe(true);
    expect(FooterIsNotFixed).toBe(false);
  });
});
