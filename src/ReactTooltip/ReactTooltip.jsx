import React, { forwardRef } from 'react'
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';


function ColouredToolTip() {
    return (
        <div>
            Hello how are you
        </div>
    )
}

const CustomChild = forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <div>First Line</div>
            <div>Second Line</div>
        </div>
    )
})

function ReactTooltip() {
    return (
        <div>
            <div style={{ padding: '20px' }}>
                <Tippy arrow={false} delay={1000} placement='left' content='Basic Tooltip'>
                    <button>Hower</button>
                </Tippy>
            </div>

            <div style={{ padding: '20px' }}>
                <Tippy content={<span style={{ color: 'orange' }}>Colored</span>}>
                    <button>Hower</button>
                </Tippy>
            </div>


            <div style={{ padding: '20px' }}>
                <Tippy content={<ColouredToolTip />}>
                    <button>Hower</button>
                </Tippy>
            </div>

            <div style={{ padding: '20px' }}>
                <Tippy content={<ColouredToolTip />}>
                    <CustomChild />
                </Tippy>
            </div>

        </div>
    )
}

export default ReactTooltip
