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
      case 'image':
        html += `<br /><img  alt="${
          block.data.caption
        }" src="${block.data.file.url}" loading="lazy" title="${
          block.data.caption
        }" /><br /><div style="text-align: center; font-size: 13px; margin-top: -17px"><em>${block.data.caption}</em></div><br />`;
        break;
      case 'list':
        block.data.style === 'ordered' ? html += '<ol>' : html += '<ul>';
        block.data.items.forEach((li) => {
          html += `<li>${li}</li>`;
        });
        block.data.style === 'ordered' ? html += '</ol>' : html += '</ul>';
        break;
      case 'raw':
        html += `<div class="ce-block">
                  <div class="ce-block__content">
                    <div class="ce-code">
                      <code>${block.data.html}</code>
                    </div>
                </div>
              </div><br />`;
        break;
      case 'code':
        html += `<div class="ce-block">
                  <div class="ce-block__content">
                    <div class="ce-code">
                       <code>${block.data.code}</code>
                    </div>
                   </div>
                 </div><br />`;
        break;
      case 'delimiter':
        html += `<div class="ce-block" style="text-align: center">
                  <div class="ce-block__content">
                      <div class="ce-delimiter cdx-block">
                        <h2 style="font-size: 26px; font-weight: 900; font-family: arial sans-serif">*   *   * </h2>
                      </div>
                  </div>
                </div>`;
        break;
      case 'linkTool':
        html += `
          <div class="cdx-block">
            <div class="link-tool">
            <a
              class="link-tool__content link-tool__content--rendered"
              target="_blank" rel="nofollow noindex noreferrer"
              href=${block.data.link}
            >
            <div
              class="link-tool__image"
              style="background-image: url(${block.data?.meta?.image})"></div>
              <div class="link-tool__title">
                ${block.data.meta?.title ?? 'View Link'}
              </div>
              <p class="link-tool__description">
               ${block.data.meta?.description ?? 'Click here to open link in new tab'}
              </p><span class="link-tool__anchor">${block.data?.link?.split('/')[2] ?? ''}</span>
              </a>
              </div>
              </div>
              <br />
        `;
        break;
      case 'embed':
        html += `<div class="ce-block">
                    <div class="ce-block__content">
                    <div class="cdx-block embed-tool">
                    <iframe width="100%"
                                height="${block?.data?.height}"
                                src="${block?.data?.embed}"
                                frameborder="0"
                                allow="accelerometer;
                                autoplay;
                                encrypted-media;
                                gyroscope;
                                picture-in-picture"
                                allowfullscreen>
                     </iframe>
                    </div>
                        <div style="text-align: center; font-size: 13px;"><em>${block.data.caption}</em></div><br />
                    </div>
                </div><br />`;
        break;
      default:
        break;
    }
  });
  return html;
};

export default parseDataFromJSON;
