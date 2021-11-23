import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import * as actionCreators from "store/actions";

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
};

export { useActions };
