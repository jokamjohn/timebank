import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';
import cookieParser from 'cookie-parser';

const {PORT, NODE_ENV} = process.env;
const dev = NODE_ENV === 'development';

export default polka() // You can also use Express
    .use(cookieParser())
    .use(
        compression({threshold: 0}),
        sirv('static', {dev}),
        sapper.middleware({
          session: (req, res) => {
          	if (req.cookies.userDetails) {
          		return {
          			user: req.cookies.userDetails
				}
			}
          	return {
          		user: false
			}
		  }
        })
    )
    .listen(PORT, err => {
      if (err) console.log('error', err);
    });
