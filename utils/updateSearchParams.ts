const updateSearchParams = (title: string, value: string) => {
  const params = new URLSearchParams(window.location.search);

  if (value) {
    params.set(title, value.toLowerCase());
  } else {
    params.delete(title);
  }

  return `${window.location.pathname}?${params}`;
};

export default updateSearchParams;
