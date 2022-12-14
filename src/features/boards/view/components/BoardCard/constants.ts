const NAME_LINE_HEIGHT = 28;
const DESC_LINE_HEIGHT = 16;
const CALC_OFFSET = 3;

const WIDTH = 250;
const HEIGHT = 170;
const SCALE_MOBILITY = 0.33;

const SIZES = {
  minWidth: WIDTH - WIDTH * SCALE_MOBILITY,
  maxWidth: WIDTH + WIDTH * SCALE_MOBILITY,
  minHeight: HEIGHT - HEIGHT * SCALE_MOBILITY,
  maxHeight: HEIGHT + HEIGHT * SCALE_MOBILITY,
};

export { NAME_LINE_HEIGHT, DESC_LINE_HEIGHT, CALC_OFFSET, SIZES };
