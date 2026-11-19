import './Allcode.css'
import BrowserTitle from './BrowserTitle'
import Counter from "./Counter"
import LiveInput from './LiveInput'
import ShowHide from './ShowHide'

function Allcode() {
  return (
    <div>
        <div className="container">
            <Counter/>
            <ShowHide/>
            <LiveInput/>
            <BrowserTitle/>
        </div>
    </div>
  )
}

export default Allcode