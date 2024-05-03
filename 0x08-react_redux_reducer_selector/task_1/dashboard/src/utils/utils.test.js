import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

describe("getFullYear", () => {
  it("should return the current year", () => {
    expect(getFullYear()).toBe(new Date().getFullYear());
  });
});

describe("getFooterCopy", () => {
  it("should return 'Holberton School' when isIndex is true", () => {
    expect(getFooterCopy(true)).toBe("Holberton School");
  });

  it("should return 'Holberton School main dashboards' when isIndex is false", () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboards");
  });
});

describe("getLatestNotification", () => {
  it("should return '<strong>Urgent requirement</strong> - complete by EOD'", () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
  });
});
