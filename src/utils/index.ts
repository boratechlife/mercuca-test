/**
 * Concatenates and returns a space-separated string of classNames based on the provided conditions.
 *
 * @param {...(string | undefined | null | false)} classNames - The classNames to be conditionally included.
 * @returns {string} - The concatenated classNames string.
 *
 * @example
 * // Usage with a dark theme
 * const theme = "dark";
 * const result = cn(
 *   theme === "dark" && "hover:bg-dark-3",
 *   theme === "dark" && "hover:text-white",
 *   theme === "dark" && "hover:border-none"
 * );
 * console.log(result);
 * // Output: "hover:bg-dark-3 hover:text-white hover:border-none"
 */
export function cn(...classNames: (string | undefined | null | false)[]) {
  return classNames.filter(Boolean).join(" ");
}

export function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-|-$/g, "");
}
