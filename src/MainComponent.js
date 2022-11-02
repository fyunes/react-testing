import React from 'react'

const MainComponent = () => {
  return (
    <div>
        <p title="Delete">Hello World</p>
        <input type="text" data-testid='testingId' placeholder="Testing" />
        <input  type="text" placeholder="Where do you do your Testing" />
        <input type="text" title="anotherTitle" placeholder="What testing you wish for" />
    </div>
  )
}

export default MainComponent