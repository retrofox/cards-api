import { getCardsListObject } from '../../components/cards-list';
import { map } from 'lodash';

export default async ( req, res ) => {
  const host = req.headers.host;

  const cards = getCardsListObject( {
    host,
    fileExt: req.query.fileExt || null,
  } );

  const response = map( cards, ( card ) => Object.assign(
    card,
    {
      meta: {
        endpoint: `http://${ host }/api/cards/${ card.id }`,
      }
    }
  ) );

  res.status( 200 ).json( response );
};
