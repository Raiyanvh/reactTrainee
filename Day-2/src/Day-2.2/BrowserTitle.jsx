import { useEffect, useState } from "react";

function BrowserTitle() {
    const [brotitle, setBrotitle] = useState(0)

    useEffect(()=> {
        document.title = `Counter: ${brotitle}`
    }, [brotitle]);
  return (
    <div className="browsertitle">
        <h1>Exercise 4: Browser Title</h1>
        <h3>{brotitle}</h3>
        <button onClick={()=> setBrotitle(brotitle + 1)}>Counter</button>
        <button onClick={()=> setBrotitle(0)}>Reset</button>
    </div>
  )
}

export default BrowserTitle;