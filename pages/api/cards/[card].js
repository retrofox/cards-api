import getCardsList, { getCardByCardId } from '../../../components/cards-list';
import { map } from 'lodash';

const cardsList = getCardsList();

export default async (req, res ) => {
  const { query } = req;

  const cardId = query.card
    ? String( query.card ).toLowerCase()
    : false;

  if (
    ! cardId ||
    cardId.length !== 2
  ) {
    return res.status( 404 ).json( {
      'message': 'Invalid card',
      code: 404,
    } );
  }

  if( cardsList.indexOf( cardId ) < 0 ) {
    return res.status( 404 ).json( {
      'message': 'Card Not Found',
      code: 404,
    } );
  }

  res.status( 200 ).json( getCardByCardId( cardId, {
    fileExt: query.fileExt || null,
  } ) );
};
