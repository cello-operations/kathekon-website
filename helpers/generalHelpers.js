export const generalHelpers = {
  isEmpty: (value) => (
    value === undefined
    || value === null
    || (typeof value === 'object' && Object.keys(value).length === 0)
    || (typeof value === 'string' && value.trim().length === 0)
  ),
  getCoverImage: (blocks) => {
    const images = blocks.reduce((accumulator, block) => {
      if (block.type === 'image') {
        accumulator.push(block.data);
      }
      return accumulator;
    }, [])

    return images;
  }
};
