import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import {library} from '@fortawesome/fontawesome-svg-core'
library.add(faSpinner);

// npm i --save @fortawesome/fontawesome-svg-core
// npm i --save @fortawesome/free-solid-svg-icons
// npm i --save @fortawesome/react-fontawesome

function FontAwesome()
{
    return(
        <FontAwesomeIcon icon="spinner" size="6x" spin /> 
    )

}
export default FontAwesome