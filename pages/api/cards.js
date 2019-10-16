import { getCardsListObject } from '../../components/cards-list';
import { map } from 'lodash';

export default async ( req, res ) => {
  res.status( 200 ).json( getCardsListObject( {
    host: req.headers.host
  } ) );
};
