// Redux Toolkit의 createSlice를 import
import { createSlice } from "@reduxjs/toolkit";

// 장바구니 초기 상태 정의
const initialState = {
  cartItems: [], // 장바구니에 담긴 상품들 리스트 (배열)
};

// createSlice를 사용해 'cart' 슬라이스 생성
const cartSlice = createSlice({
  name: "cart", // 이 slice의 이름 (state.cart로 접근하게 됨)
  initialState, // 위에서 정의한 초기 상태
  reducers: {
    // 상태를 변경하는 reducer 함수들 정의

    // 🟡 장바구니에 상품 추가
    addToCart: (state, action) => {
      // 이미 장바구니에 있는 상품인지 확인
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!existingItem) {
        // 없으면 새로 추가하고 수량은 1로 설정
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        // 이미 있으면 수량 1 증가
        existingItem.quantity += 1;
      }
    },

    //  장바구니에서 상품 제거
    removeFromCart: (state, action) => {
      // payload로 전달된 id와 일치하지 않는 항목들만 남김 (제거됨)
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    // 🔼 상품 수량 변경 (증가 혹은 직접 입력)
    increaseQuantity: (state, action) => {
      // 해당 상품 찾기
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        // payload로 받은 수량으로 수량 변경
        item.quantity = action.payload.quantity;
      }
    },
  },
});

// 각 reducer 함수들을 export하여 컴포넌트에서 dispatch 가능하게 함
export const { addToCart, removeFromCart, increaseQuantity } =
  cartSlice.actions;

// 이 slice의 reducer를 export하여 store에 등록할 수 있게 함
export default cartSlice.reducer;
