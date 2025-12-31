import * as main from '../modules/script/main.js';
import * as modal from '../modules/script/modal.js';

const mainRoot = {
    ...main,
    ...modal
}

window.coolalerts = mainRoot;

export default coolalerts;