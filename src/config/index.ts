import radius from "./borders/radius";
import width from "./borders/width";
import display from "./layout/display";
import margin from "./spacing/margin";
import padding from "./spacing/padding";

export default {
    'layout': {
        ...display,
    },
    'spacing': {
        ...margin,
        ...padding,
    },
    'borders': {
        ...width,
        ...radius,
    },
    'outlines': {

    },
};
