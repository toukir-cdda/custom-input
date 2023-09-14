import { useDispatch } from "react-redux";

const useGetStyleFromElement = (item) => {
  const dispatch = useDispatch();
  dispatch(selectStyles(item.style));
  return {};
};

export default useGetStyleFromElement;
