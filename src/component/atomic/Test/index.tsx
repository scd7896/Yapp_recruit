import * as React from 'react'
import { withRouter } from 'react-router-dom'
const Test = (props) => {
    console.log('아토믹 컴포넌트',props);
    return(
        <div>
            Test 컴포넌트임 한번보셈
        </div>
    )
}

// export default withRouter(Test)
export default Test;