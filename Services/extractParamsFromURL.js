export function extractParamsFromURL(url) {
  const params = {};
  const queryString = url.split("?")[1];
  if (queryString) {
    const keyValuePairs = queryString.split("&");
    keyValuePairs.forEach((pair) => {
      const [key, value] = pair.split("=");
      params[key] = decodeURIComponent(value);
    });
  }
  return params;
}
