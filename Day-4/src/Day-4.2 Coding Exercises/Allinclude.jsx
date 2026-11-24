import ContactForm from "./Contact Form/ContactForm"
import CharacterCounter from "./Live Character Counter/CharacterCounter"
import PracticalChallenge from "./Practical Challenge/PracticalChallenge"
import RegistrationForm from "./Registration Form/RegistrationForm"

function Allinclude() {
  return (
    <div className="container">
        <ContactForm/>
        <RegistrationForm/>
        <CharacterCounter/>
        <PracticalChallenge/>
    </div>
  )
}

export default Allinclude