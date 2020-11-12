const parseDataFromJSON = (json) => {
  let html = '';
  json.blocks.forEach((block) => {
    switch (block.type) {
      case 'header':
        html += `<h${block.data.level}>${block.data.text}</h${
          block.data.level
        }>`;
        break;
      case 'paragraph':
        html += `<p>${block.data.text}</p><br />`;
        break;
      case 'delimiter':
        html += '<hr />';
        break;
      case 'image':
        html += `<br /><img src="${block.data.file.url}" title="${
          block.data.caption
        }" /><br /><center><em>${block.data.caption}</em></center><br />`;
        break;
      case 'list':
        block.data.style === 'ordered' ? html += '<ol>' : html += '<ul>';
        block.data.items.forEach((li) => {
          html += `<li>${li}</li>`;
        });
        block.data.style === 'ordered' ? html += '</ol>' : html += '</ul>';
        break;
      default:
        break;
    }
  });
  return html;
};

export default parseDataFromJSON;
