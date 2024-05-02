import { withRouter } from './withRouter';
import compose from 'compose-function';

const withProviders = compose(withRouter);

export default withProviders;
