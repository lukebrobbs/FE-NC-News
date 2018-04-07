const utils = {
  sort: (list, by) => list.sort((a, b) => b[by] - a[by])
};

export default utils;
