import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { addNumber, decressNumber } from "../redux/Number/numberAction";
function Profile(props) {
  // Get value form state
  const num = useSelector((state) => state.number.DefaultNumber);

  // dispatch to action
  const dispatch = useDispatch();
  return (
    <div>
      <h1
        data-aos="fade-zoom-in"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
        data-aos-duration="600"
      >
        Hello
      </h1>
      <div>Default: {num}</div>
      <button onClick={() => dispatch(addNumber())}>+</button>
      <button onClick={() => dispatch(decressNumber())}>-</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    DefaultNumber: state.DefaultNumber,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: () => dispatch(addNumber()),
    decressNumber: () => dispatch(decressNumber()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
