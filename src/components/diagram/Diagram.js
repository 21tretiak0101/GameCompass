import {CompassComponent} from '../CompassComponent';
import {store} from '../../store/store';

export class Diagram extends CompassComponent {

  template() {
    return `<div class="diagram">Diagram</div>`;
  }

  result() {
    const state = store.getState();
    console.log('Diagram: ', state);
    return this.template();
  }
}
