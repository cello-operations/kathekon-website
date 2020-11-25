import { parse } from 'node-html-parser';
import { isEmpty } from '../../../helpers/truncateText';

export default async (req, res) => {
  try {
    const request = await fetch(req.query.url);
    const resText = await request.text();
    const root = parse(resText);
    const title = root?.querySelector('title')?.innerHTML || '';
    function getMeta(metaName, attributeName = 'name') {
      const metas = root.querySelectorAll('meta');

      for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute(attributeName) === metaName) {
          return metas[i].getAttribute('content');
        }
      }

      return '';
    }
    const description = getMeta('description');
    const image = getMeta('og:image', 'property');
    return res.json({
      success : 1,
      meta: {
        title,
        description: !isEmpty(description) ? description : getMeta('og:title'),
        image : {
          url : !isEmpty(image) ? image : '',
        },
      }
    });
  } catch (error) {
    return res.json({
      success : 0,
      meta: {

      }
    });
  }
}
