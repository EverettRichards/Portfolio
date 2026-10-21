import { getInitialTheme, applyTheme, toggleTheme } from "./theme";

describe("theme utils", () => {
  beforeEach(() => {
    const classes = new Set();

    global.document = {
      documentElement: {
        classList: {
          add: (value) => classes.add(value),
          remove: (value) => classes.delete(value),
          contains: (value) => classes.has(value),
        },
      },
    };

    const store = {};
    global.localStorage = {
      getItem: (key) => (key in store ? store[key] : null),
      setItem: (key, value) => {
        store[key] = String(value);
      },
      clear: () => {
        Object.keys(store).forEach((key) => delete store[key]);
      },
    };
  });

  test("defaults to light when no stored theme exists", () => {
    expect(getInitialTheme()).toBe("light");
  });

  test("uses stored theme when available", () => {
    localStorage.setItem("theme", "dark");
    expect(getInitialTheme()).toBe("dark");
  });

  test("toggleTheme switches between light and dark and persists value", () => {
    applyTheme("light");
    expect(toggleTheme()).toBe("dark");
    expect(localStorage.getItem("theme")).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);

    expect(toggleTheme()).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
