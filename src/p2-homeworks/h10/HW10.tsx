import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "./bll/store";
import { loadingAC } from "./bll/loadingReducer";
import preloader from "../../assets/img/HW10_preloader.svg";

function HW10() {
  const dispatch = useDispatch();
  const loading = useSelector<AppStoreType, boolean>(
    (state) => state.loading.loading
  );

  const setLoading = () => {
    dispatch(loadingAC(true));

    setTimeout(() => {
      dispatch(loadingAC(false));
    }, 2000);
  };

  return (
    <div>
      <hr />
      homeworks 10
      {loading ? (
        <img src={preloader} alt="" />
      ) : (
        <div>
          <SuperButton onClick={setLoading}>set loading...</SuperButton>
        </div>
      )}
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
      <hr />
    </div>
  );
}

export default HW10;
