import Notes from "./Notes"
import PropTypes from "prop-types"

export default function Home(props) {
  return (
    <>
      <Notes showAlert={props.showAlert}/>
    </>
  );
}
Home.propTypes = {
  showAlert: PropTypes.func,
}
