import React from 'react'

function page() {
  return (
    <div>
      <div className="collapse pt-64">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click me to show/hide content
        </div>
        <div className="collapse-content">
          <p>hello</p>
        </div>
      </div>
    </div>
  );
}

export default page