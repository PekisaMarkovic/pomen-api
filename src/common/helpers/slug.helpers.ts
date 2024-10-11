function removeDiacritics(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function cleanUpString(text: string) {
  return removeDiacritics(text)
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/--+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}

function truncateString(str: string, len: number) {
  if (str.length > len) {
    return str.substring(0, len);
  }
  return str;
}

export const slugify = ({
  text,
  truncate,
}: {
  text: string;
  truncate?: number;
}) => {
  return cleanUpString(truncate ? truncateString(text, truncate) : text);
};
