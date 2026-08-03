// Joins truthy class names into a single className string.
export default function mergeClassNames(
  ...classNames: Array<string | false | null | undefined>
) {
  return classNames.filter(Boolean).join(" ");
}
