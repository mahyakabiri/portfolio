// Progressive enhancements in plain DOM code. The page is fully readable without them.
export function enhance(roles: readonly string[]): () => void {
  const cleanups: Array<() => void> = [];
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Typewriter for the role line
  const typed = document.querySelector<HTMLElement>("[data-typed]");
  if (typed && roles.length > 1 && !reduce) {
    let i = 0, j = roles[0].length, deleting = true, t = 0;
    const tick = () => {
      const word = roles[i];
      j += deleting ? -1 : 1;
      typed.textContent = word.slice(0, j);
      let delay = deleting ? 40 : 80;
      if (!deleting && j === word.length) { deleting = true; delay = 2200; }
      else if (deleting && j === 0) { deleting = false; i = (i + 1) % roles.length; delay = 300; }
      t = window.setTimeout(tick, delay);
    };
    t = window.setTimeout(tick, 2400);
    cleanups.push(() => clearTimeout(t));
  }

  // Cursor spotlight on project cards
  const onMove = (e: PointerEvent) => {
    const card = (e.target as Element | null)?.closest<HTMLElement>(".project");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${e.clientX - r.left}px`);
    card.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  document.addEventListener("pointermove", onMove);
  cleanups.push(() => document.removeEventListener("pointermove", onMove));

  // Theme toggle (remembers choice when storage is available)
  const root = document.documentElement;
  try { const saved = localStorage.getItem("theme"); if (saved) root.dataset.theme = saved; } catch {}
  const btn = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");
  const onTheme = () => {
    const isDark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : !window.matchMedia("(prefers-color-scheme: light)").matches;
    const next = isDark ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  };
  btn?.addEventListener("click", onTheme);
  cleanups.push(() => btn?.removeEventListener("click", onTheme));

  // Copy buttons
  const onCopy = async (e: Event) => {
    const b = (e.target as Element).closest<HTMLButtonElement>("[data-copy]");
    if (!b) return;
    e.preventDefault();
    const text = b.dataset.copy ?? "";
    try { await navigator.clipboard.writeText(text); b.textContent = "Copied"; }
    catch {
      const val = b.parentElement?.querySelector(".val");
      if (val) { const range = document.createRange(); range.selectNodeContents(val); const s = getSelection(); s?.removeAllRanges(); s?.addRange(range); }
      b.textContent = "Selected";
    }
    setTimeout(() => (b.textContent = "Copy"), 1600);
  };
  document.addEventListener("click", onCopy);
  cleanups.push(() => document.removeEventListener("click", onCopy));

  return () => cleanups.forEach((c) => c());
}
