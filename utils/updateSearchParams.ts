const updateSearchParams = (title: string, value: string) => {
  const params = new URLSearchParams(window.location.search);

  if (value) {
    params.set(title.toLowerCase(), value.toLowerCase());
  } else {
    params.delete(title.toLowerCase());
  }

  return `${window.location.pathname}?${params.toString()}`;
};

export default updateSearchParams;
