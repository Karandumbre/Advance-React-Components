download the package

npm i '@tippy.js/react' --save

import Tippy from '@tippy.js/react';

//Default css
import 'tippy.js/dist/tippy.css';

Tippy accepts a prop known as content

Tippy also accepts html tags

In The content you can pass html tags
  
<Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
            
</Tippy>


Also Possible to pass react component as a "content"


another props are

1. arrow //diabling the arrow of tooltip 
eg. arrow={false} 

2. delay  //adding delay to tooltip 
eg. delay={1000}

3. Placement to top, bottom, left, right
eg. placement='left'


{ Plenty more props are there }