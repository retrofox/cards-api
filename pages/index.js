import fetch from 'isomorphic-unfetch';
import { map } from 'lodash';

const Card = ( { card } ) => <div className="card">
	<style jsx>{`
		.card {
			  width: 108px;
			  height: 150px;
			  margin: 10px;
			  float: left;
		}
	
		.card-image {
			background-image: url( ${ card.image } );
			background-size: cover;
			background-repeat: no-repeat;
			background-position: center center;
			width: 100%;
			height: 100%;
		}
	`}</style>
	<div className='card-image' />
</div>;

const Home = ( { cards } ) => <div className="cards-deck">
  {
    map( cards, ( card, i )  => <Card key={ `key-${ i }` } card={ card } /> )
  }
</div>;

Home.getInitialProps = async ( { res, query } ) => {
  let response = await fetch( 'https://cards-api.retrofox.now.sh/api/cards' );
  let data = await response.json();

  return { cards: data };
};

export default Home;
