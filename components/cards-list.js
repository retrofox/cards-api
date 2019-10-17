import { map, filter } from 'lodash';

const cards = [
  '0c',
  '0d',
  '0h',
  '0s',
  '2c',
  '2d',
  '2h',
  '2s',
  '3c',
  '3d',
  '3h',
  '3s',
  '4c',
  '4d',
  '4h',
  '4s',
  '5c',
  '5d',
  '5h',
  '5s',
  '6c',
  '6d',
  '6h',
  '6s',
  '7c',
  '7d',
  '7h',
  '7s',
  '8c',
  '8d',
  '8h',
  '8s',
  '9c',
  '9d',
  '9h',
  '9s',
  'ac',
  'ad',
  'ah',
  'as',
  'jc',
  'jd',
  'jh',
  'js',
  'kc',
  'kd',
  'kh',
  'ks',
  'qc',
  'qd',
  'qh',
  'qs',
  'xx',
  'xx',
];

const mapCardToObject = ( id, attrs = {} ) => {
  const code = id.toUpperCase();
  const {
    fileExt = 'png',
    host = 'localhost:3000',
    protocol = 'http',

  } = attrs;

  const fileExtensions = [ 'png', 'svg' ];
  const ext = fileExtensions.indexOf( fileExt ) < 0
    ? 'png'
    : fileExt;

  const image = `/images/${ code }.${ ext }`;
  const url = `${ protocol }://${ host }/images/${ code }.${ ext }`;

  return { id, code, image, url }
};

const getCardsListObject = ( attrs ) => map( cards, card => mapCardToObject ( card, attrs ) );

const getCardByCardId = ( id, attrs ) => {
  if ( ! id ) {
    [];
  }

  if ( cards.indexOf( id ) < 0 ) {
    [];
  }

  return mapCardToObject( id, attrs );
};

export default () => ( cards );
export {
  getCardsListObject,
  getCardByCardId,
}
