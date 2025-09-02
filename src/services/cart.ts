import {
  IAddCartItem,
  IAddToCartResponse,
  ICart,
  ICartPageData,
  ICheckoutResponse,
  IReturnResponse,
  IUpdateCartItemQuantityByProduct,
} from "@/utils/types";
import request from "@/services/request";

const cartService = {
  getCartItems: (): Promise<IReturnResponse<ICart>> => request.get("/cart"),

  addCartItem: (body: IAddCartItem): Promise<IReturnResponse<ICart>> =>
    request.post("/cart/add", body),

  addCartItemFromAllProducts: (body: {
    productId: number;
    qty: number;
  }): Promise<IReturnResponse<IAddToCartResponse>> =>
    request.post(`/cart/add-to-cart-from-all-products/${body.productId}`, body),
  deleteCartItem: (id: number): Promise<IReturnResponse<ICart>> =>
    request.post(`/cart/delete/${id}`),

  updateCartItem: (
    id: number,
    body: { qty: number }
  ): Promise<IReturnResponse<ICart>> =>
    request.post(`/cart/update/${id}`, body),

  addUpdateQuantityByProduct: (
    body: IUpdateCartItemQuantityByProduct
  ): Promise<IReturnResponse<ICart>> => request.post(`/cart/add`, body),

  addUpdateAddress: ({
    address_id,
  }: {
    address_id: string;
  }): Promise<IReturnResponse<ICart>> =>
    request.post("cart/add-or-update-address", { address_id }),

  applyPromoCode: ({
    promoCode,
  }: {
    promoCode: string;
  }): Promise<IReturnResponse<ICart>> =>
    request.post("cart/coupon/apply", { code: promoCode }),

  removePromoCode: (): Promise<IReturnResponse<ICart>> =>
    request.post("cart/coupon/remove"),

  checkOut: (): Promise<IReturnResponse<ICheckoutResponse>> =>
    request.get("cart/checkout"),
};

export default cartService;
