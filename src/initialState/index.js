import * as  image from './imageDemo'

import { convertFromRaw } from 'draft-js';


const contents = {
    image: convertFromRaw(image.raw)
}

export default contents