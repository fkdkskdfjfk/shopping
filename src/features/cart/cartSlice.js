import { createSlice } from '@reduxjs/toolkit';

// 장바구니 정보를 담을 Slice 만들기

const initialState = {
  cartList: [
    // {
    //   id: '1',
    //   title: "Arcsaber 11 Pro",
    //   price: 299000,
    //   count: 2
    // },
    // {
    //   id: '3',
    //   title: "Aerus Z",
    //   price: 199000,
    //   count: 1
    // },
  ],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState ,
  reducers: {
    // Quiz: 전달받은 상품의 id값으로 cartList에서 해당 상품을 찾아 수량을 1씩 증가/감소
    increaseCount: (state, action) => { // 여기서 find는 id가 같은 객체를 반환한다
      const targetItem = state.cartList.find((cart) => cart.id === action.payload);
      targetItem.count += 1;
    },
    decreaseCount: (state, { payload: id }) => {
      const targetItem = state.cartList.find((cart) => cart.id === id);
      targetItem.count -= 1;
    },
    // Quiz: 초기값과 동일한 형태의 객체를 넘겨주면 cartList에 아이템을 추가하는 리듀서 만들기
    // 이미 들어있는 상품이면 수량만 증가
    // 장바구니에 없는 상품이면 새롭게 추가
    addItemToCart: (state, { payload: item }) => {
      const targetItem = state.cartList.find((cart) => cart.id === item.id);
      if (!targetItem) {
        state.cartList.push(item);
      } else {
        targetItem.count += item.count;
      }
    },
    removeItemFromCart: (state, { payload: id }) => {
      // 방법1
      // const targetIndex = state.cartList.findIndex(cart => cart.id === id);
      // state.cartList.splice(targetIndex, 1);

      // 방법2: filter() 사용 시
      const newCartList = state.cartList.filter(cart => cart.id !== id);
      state.cartList = newCartList;
    },
  }
});

export const { increaseCount, decreaseCount, addItemToCart, removeItemFromCart } = cartSlice.actions;

export const selectCartList = state => state.cart.cartList; // 함수다

export default cartSlice.reducer;