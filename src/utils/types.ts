export interface IUser {
  email: string;
  id: number;
  image: string;
  mobile: string;
  mobile_country_code: string;
  name: string;
  token: string;
  type: string;
  email_verified_at: boolean;
}
export interface ICartPageData {
  cart: ICart;
}
export interface IAddToCartResponse {
  orders: ICart;
  product: {
    id: number;
    price: string;
    price_before_discount: string;
    image_main: string;
    is_active: number;
    is_show_home_page: number;
    is_trend: number;
    not_checking_stock: number;
    min_order_qty: number;
    stock: number;
    minimum_stock_alert: number;
    created_at: string;
    updated_at: string;
  };
}
export interface IAttributesResponse {
  attributes: IProductAttribute[];
}

export interface IProductFavoritesResponse {
  product: IProductDetails;
}
export interface ILink {
  url?: string;
  label: string;
  active: boolean;
}
export interface IPaginatedReturnResponse<T> {
  data: IPaginatedData<T>;
  message: string;
  status: boolean;
  status_code: number;
}

export interface ISubcategory {
  main_category_details: ICategory;
  sub_categories: IPaginatedData<ICategory[]>;
}

export interface INotificationData {
  count: number;
  count_unread: number;
  notifications: IPaginatedData<INotification[]>;
}

export interface INotification {
  id: number;
  notification_type: string;
  param_id?: string;
  icon: string;
  title: string;
  message: string;
  diff_for_humans: string;
}

export type CourseProviders = "individual" | "institution";
export type CourseTypes = "course" | "workshop";
export type PriceTypes = "fixed" | "monthly" | "per_level";

export interface IPaginatedData<T> {
  data: T;
  links: {
    first: string;
    last: string;
    prev?: boolean;
    next?: boolean;
  };
  meta: {
    current_page: number;
    from?: null;
    last_page: number;
    links: ILink[];
    path: string;
    per_page: number;
    to?: null;
    total: number;
  };
}

export interface IProductAttribute {
  display_format: string;
  id: number;
  name: string;
  stock?: string;
  values: { name?: string; hex?: string }[];
}
export interface IHomeDataServices {
  id: number;
  name: string;
  description: string;
  short_description: string;
  process_title: string;
  process_description: string;
  departmment: string;
  number_title: string;
  number: string;
  image: string;
  icon: string;
  process_image: string;
}

export interface IHomeDataSolution {
  title: string;
  sub_title: string;
  description: string;
  items: {
    id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

export interface IHomeCommunications {
  communication_facebook: string;
  communication_twitter: string;
  communication_telegram: string;
  communication_instagram: string;
  communication_whatsapp: string;
  communication_linkedin: string;
}
export interface IHeroSlider {
  id: number;
  title: string;
  description: string;
}

export interface IPost {
  id: number;
  image: string;
  title: string;
  short_description: string;
  content: string;
  slug: string;
  meta_description: string;
}

export interface IHomeData {
  hero_section: {
    hero_section_video_link: string;
    hero_section_title: string;
    hero_section_title_2: string;
    hero_section_description: string;
    hero_section_image_1: string;
    hero_section_image_2: string;
  };
  ads: {
    id: number;
    description: string;
  }[];
  about_section: {
    aboutus_title: string;
    aboutus_description: string;
    aboutus_image_1: string;
    aboutus_image_2: string;
  };
  sliders: IHeroSlider[];
  customer_feedback: ICustomerFeedback[];
  services: {
    id: number;
    title: string;
    short_description: string;
    image: string;
  }[];

  posts: IPost[];
  partners: { id: number; path: string }[];
}

export interface IPaginatedProductsResponse<T> {
  data: {
    attributes: IProductAttribute[];

    products: {
      data: T;

      links: {
        first: string;
        last: string;
        prev?: boolean;
        next?: boolean;
      };
      meta: {
        current_page: number;
        from?: null;
        last_page: number;
        links: ILink[];
        path: string;
        per_page: number;
        to?: null;
        total: number;
      };
    };
  };
  message: string;
  status: boolean;
  status_code: number;
}

export interface IReturnResponse<T> {
  status: boolean;
  status_code: number;
  data: T;
  message: string;
}

export interface IAboutUsData {
  faqs: IAppQuestionsAnswer[];
  customer_feedback: ICustomerFeedback[];
  clients_count: string;
  since_year: string;
  ratings: string;
  ratings_count: string;
  worldwide_product_sale_per_year: string;
  aboutus_description_page: string;
  image_1: string;
  image_2: string;
  image_3: string;
  image_4: string;
}

export interface ICityData {
  id: number;
  name: string;
  is_active: boolean;
  price: string;
}
export interface IJobApplyBody {
  /** Required - String - Max 255 characters (Applicant's full name) */
  full_name: string;

  /** Required - Valid email - Max 255 characters */
  email: string;

  /** Required - String - Max 20 characters */
  phone: string;

  /** Optional - String - Max 500 characters (Applicant's address) */
  address?: string;

  /** Required - Date - Must be before today (Applicant's birth date) */
  birth_date: string; // ISO date string

  /** Required - String - Max 255 characters (Educational background) */
  education: string;

  /** Required - String - Max 255 characters (Specialization field) */
  specialization: string;

  /** Optional - String (Previous work experience) */
  previous_experience?: string;

  /** Optional - String - Max 255 characters (Job title the applicant is applying for) */
  desired_position?: string;

  /** Required - File - Max 5MB - Allowed types: pdf, doc, docx */
  cv: File;

  /** Optional - String (Additional notes from the applicant) */
  notes?: string;
}

export interface ICheckoutResponse {
  payment_url: string;
}

export interface ApiErrorResponse {
  message: string;
  status: boolean;
  status_code: number;
}

export interface ICity {
  id: number;
  name: string;
  is_active: false;
  price: number;
}

export interface IRegion {
  id: number;
  name: string;
  is_active: boolean;
  price: string;
}
export interface IAddress {
  id: number;
  city: ICity;
  region: IRegion;
  is_default: boolean;
  title: string;
  description: string;
  mobile_country_code: string;
  mobile: string;
}

export interface IOrder {
  id: number;
  order_num: string;
  items_count: number;
  status: string;
  payment_date: string;
  total: string;
}

export interface IRegisterForm {
  name: string;
  email: string;
  mobile: string;
  password: string;
  password_confirmation: string;
  mobile_country_code: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface IForgetPasswordForm {
  email: string;
}

export interface IResetPasswordForm {
  email: string;
  otp: string;
  password: string;
  password_confirmation: string;
}

export interface ICourseSpeficiations {
  key_words?: string;
  price_type?: "fixed" | "monthly" | "per_level";
  course_type?: "course" | "workshop";
  teacher_id?: number;
  institution_or_individual: "institution" | "individual";
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface ICourseTeacher {
  id: number;
  name: string;
  overview: string;
  image: string;
}
export interface ICourse {
  id: number;
  name: string;
  image: string;
  description: string;
  price_type: "fixed" | "monthly" | "per_level";
  price_type_trans: string;
  price?: string;
  course_type: string;
  course_type_trans: string;
  teacher: ICourseTeacher;
  is_individual: boolean;
  is_institution: boolean;
}

export interface IProduct {
  id: number;
  name: string;
  is_cart: boolean;
  is_favorite: boolean;
  description: string;
  categories: ICategory[];
  price: string;
  image: string;
  price_before_discount?: string;
  discount_percentage?: number;
  cart_item_id?: number;
  stock: number;
  rates: {
    count: number;
    avg?: number;
  };
  color_list: string[];
}

export interface ICartProductVarients {
  attr_id: string;
  value: string;
}
export interface ICartProductVarientsData {
  name: string;
  value: string;
}

export interface ICartProduct {
  id: number;
  image: string;
  name: string;
  variants: ICartProductVarients[];
  variants_data: ICartProductVarientsData[];
}

export interface ICartItem {
  id: number;
  product: ICartProduct;
  price: string;
  qty: number;
  total: string;
  is_available_in_stock: boolean;
}

export interface ICart {
  id: number;
  order_num: string;
  address: {
    city?: ICity;
    region?: IRegion;
    address?: string;
    description?: string;
    title?: string;
    address_number?: number;
  };
  status: string;
  sub_total: number;
  shipping_value: number;
  discount_value: number;
  vat_value: number;
  total: number;
  coupon_code?: string;
  payment_date?: string;
  items_count: number;
  items: ICartItem[];
}

export interface IAddCartItem {
  product_id: number;
  qty: number;
  product_combination_id?: number;
}

export interface IUpdateCartItemQuantity {
  product_id: number;
  qty: number;
}

export interface IUpdateCartItemQuantityByProduct {
  product_id: number;
  product_combination_id: number;
  qty: number;
}

export interface IProductAttrCombinationAttribute {
  id: number;
  value: string;
}
export interface IProductAttrCombination {
  product_id: number;
  attributres_product: IProductAttrCombinationAttribute[];
}

export interface IProductDetails {
  categories: ICategory[];
  description: string;
  cart_item_id?: string;
  discount_percentage: number;
  is_cart: boolean;
  is_favorite: boolean;
  id: number;
  image: string;
  name: string;
  price: string;
  price_before_discount?: string;
  rates: { count: number; avg?: number };
  stock: 0;
}

export interface IProductFirstAttribute {
  id: number;
  price: string;
  stock: number;
  values: string[];
  discount_percentage: number;
  price_before_discount?: string;
}

export interface ISingleRate {
  comment: string;
  diff_for_humans: string;
  id: number;
  rate: string;
  user_name: string;
}

export interface IProductRate {
  avg: number;
  "1_star": number;
  "2_star": number;
  "3_star": number;
  "4_star": number;
  "5_star": number;
  can_review_product: boolean;
  current_user_review: null;
  total_rates: number;
  rates_with_percentage: number[];
  rates: IPaginatedData<ISingleRate[]>;
}

export interface IProductDetailsResponse {
  product_details: IProductDetails;
  photo_gallery: string[];
  order_item?: ICartItem;
  attributes: IProductAttribute[];
  first_attribute: IProductFirstAttribute;
  rates: IProductRate;
  similar_products: IProduct[];
}
export interface ICourseLevelLecture {
  id: number;
  name: string;
  lecture_type: string;
  lecture_type_trans: string;
}
export interface ICourseLevel {
  id: number;
  name: string;
  lectures: ICourseLevelLecture[];
}
export interface ICourseDetailsResponse {
  course_data: ICourse;
  levels: ICourseLevel[];
}

export interface IWriteProductReviewBody {
  product_id: number;
  rate: number;
  comment: string;
}
export interface IAppSettings {
  communication_email: string;
  communication_address: string;
  communication_mobile: string;
  communication_map_lat: string;
  communication_map_long: string;
  general_description: string;
  communication_facebook: string;
  communication_linkedin: string;
  communication_twitter: string;
  communication_telegram: string;
  communication_instagram: string;
}

export interface IAppQuestionsAnswer {
  id: number;
  question: string;
  answer: string;
}

export interface ICustomerFeedback {
  id: number;
  name: string;
  rating: string;
  subtitle: string;
  description: string;
  image: string;
}

export interface IContactUsForm {
  name: string;
  email: string;
  mobile: string;
  message: string;
  mobile_country_code: string;
}

export interface IProductCombination {
  id: number;
  image?: string;
  order_item?: ICartItem;
  price: string;
  stock: number;
}

export interface IPolicy {
  text: string;
}

export interface IContactUsData {
  communication_email: string;
  communication_mobile: string;
  communication_address_ar: string;
  communication_address_en: string;
  communication_facebook: string;
  communication_twitter: string;
  communication_telegram: string;
  communication_instagram: string;
  communication_whatsapp: string;
  communication_linkedin: string;
}

export interface IFbAdManagerEvent<T> {
  event_name: string;
  event_time: number;

  event_id: string;
  event_source_url: string;
  action_source: string;
  user_data: {
    client_ip_address: string;
    client_user_agent: string;
    em: string[];
    ph: string[];
    fbc: string;
    fbp: string;
  };
  custom_data: T;
  opt_out?: boolean;
}

export interface IFbAdManagerBody<T> {
  data: IFbAdManagerEvent<T>[];
}

export interface IFbAdAddToCartData {
  item_id: number;
  content_ids: string[];
  content_type: string;
}

export interface IFBAdBodyAddToCart {
  firstName: string;
  email: string;
  country: string;
  productName: string;
  productId: string;
  price: string;
  quantity: string;
}
export interface IFBAdBodyCheckout {
  firstName: string;
  cartId: string;
  firstProductName: string;
  email: string;
  country: string;
  cartTotal: string;
  itemsCount: string;
}
export interface IFBAdBodyPurchase {
  firstName: string;
  orderId: string;
  orderNumber: string;
  email: string;
  country: string;
}
