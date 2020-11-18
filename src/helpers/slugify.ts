export function slugify(value: string): string {
  return value.toLocaleLowerCase().replace(/(\s_?:?@?\/?\\?)+/g, '-').replace(/[^0-9a-zA-Z-]/g, '');
}
