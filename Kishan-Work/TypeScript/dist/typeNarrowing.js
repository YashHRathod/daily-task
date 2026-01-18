"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getChai(kind) {
    if (typeof kind === 'string') {
        // Here data type of kind is always string so
        // recommandation comes of string after .(dot)
        // operator this called type narrowing
        return `Making ${kind} chai...`;
    }
    // here data type is number
    return `chil order ${kind}`;
}
function notification(message) {
    if (message) {
        console.log(`You got ${message} from TS`);
    }
}
notification();
//# sourceMappingURL=typeNarrowing.js.map