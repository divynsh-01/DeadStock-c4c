import axios from "axios";
import {
    TRACK_PRODUCT_CLICK_REQUEST,
    TRACK_PRODUCT_CLICK_SUCCESS,
    TRACK_PRODUCT_CLICK_FAIL
} from "../constants/clickConstant";

// Action to track product click
export const trackProductClick = (productId, userId) => async (dispatch) => {
    try {
        dispatch({ type: TRACK_PRODUCT_CLICK_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(
            `/api/v1/product/click`, 
            { productId, userId },
            config
        );

        dispatch({
            type: TRACK_PRODUCT_CLICK_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: TRACK_PRODUCT_CLICK_FAIL,
            payload: error.response?.data.message || "Something went wrong",
        });
    }
};
