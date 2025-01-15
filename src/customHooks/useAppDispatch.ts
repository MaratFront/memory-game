import { useDispatch } from "react-redux";
const useAppDispatch = () => {
  const dispatch = useDispatch();
  return dispatch;
};

export default useAppDispatch;
