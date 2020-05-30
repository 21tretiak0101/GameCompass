import {CompassComponent} from '../CompassComponent';
import {createProfile} from './createProfile';
import {fetching} from '../../store/actions';
import {store} from '../../store/store';

export class Profile extends CompassComponent {

  constructor() {
    super();
    this.params = {};
  }

  get class() {
    return '.profile';
  }

  template() {
    return createProfile();
  }

  postData() {
    store.dispatch(fetching({...this.params}));
  }
}
