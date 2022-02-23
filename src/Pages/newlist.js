import Headers from "../Components/Header";
import footer from "../Components/Footer";
import { get } from "../api/posts";

const newlist = {
async render(id) {
const { data } = await get(id);
return /* html */ `
<header>
    ${Headers.render()}
</header>
<article class=" mx-auto w-[1200px] ">
    <div class="mx-auto w-[1200px] my-10">

        <div class="grid grid-cols-2 mb-3">
            <h2 class="font-bold text-xl ">${data.title}</h2>
            <div class="mt-2 flex justify-end">
                <a href="" class="mt-1">
                    <ul class="flex ">
                        <li>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                </path>
                            </svg>
                        </li>
                        <li>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                </path>
                            </svg>
                        </li>
                        <li>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                </path>
                            </svg>
                        </li>
                        <li>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z">
                                </path>
                            </svg>
                        </li>
                        <li>
                            <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star"
                                class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512">
                                <path fill="currentColor"
                                    d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z">
                                </path>
                            </svg>
                        </li>
                    </ul>
                </a>
                <a href="" class="ml-2 text-sky-600 hover:underline relative hover:font-semibold">13 đánh giá</a>
                <a href="" class="ml-1 text-sky-600 hover:underline relative hover:font-semibold">| 4110 Hỏi &amp;
                    đáp</a>
            </div>
        </div>
        <hr>
        <div class="grid grid-cols-2 mt-7">
            <div class="mr-3">
                <div class="border-[1px]">
                    <a href="">
                        <img src="${data.image}">
                    </a>
                </div>
                <div class="flex flex-row justify-center">
                    <a href="" class="mt-3 text-center hover:font-bold">
                        <img class="phone-color"
                            src="https://vn-live-03.slatic.net/p/baa684a6f98b465db56c190e801ee2b7.jpg">
                        <p class="ml-3">Mẫu 2</p>
                    </a>
                    <a href="" class="mt-3 text-center hover:font-bold ml-3">
                        <img class="phone-color" src="https://cf.shopee.vn/file/c87554da7b0516ff071f1b18d3613643">
                        <p class="ml-3">Mẫu 3</p>
                    </a>
                    <a href="" class="mt-3 text-center hover:font-bold ml-3">
                        <img class="phone-color" src="https://cf.shopee.vn/file/614c2b05eb0edd8a9c0d6adee9725562">
                        <p class="ml-3">Mẫu 4</p>
                    </a>
                    <a href="" class="mt-3 text-center hover:font-bold ml-3">
                        <img class="phone-color" src="https://cf.shopee.vn/file/a07eac9fb301563b213e18a01af14221">
                        <p class="ml-3">Mẫu 5</p>
                    </a>
                </div>
                <div class="flex mt-3 justify-center">
                    <div class="flex mr-2">
                        <i class="fas fa-award text-red-700  mr-2"></i>
                        <p class="text-sm">Hàng chính hãng</p>
                    </div>
                    <div class="flex">
                        <i class="fas fa-shipping-fast text-red-700  mr-2"></i>
                        <p class="text-sm">Giao hàng toàn quốc</p>
                    </div>
                </div>
            </div>
            <div class="detail">
                <div class="flex ">
                    <span class="text-red-700 font-semibold text-2xl mr-5 mt-2">${data.desc}</span>
                    <span class="font-semibold text-lg mt-3">2.000.000VND</span>
                </div>
                <div class="mt-2 bg-slate-100 grid grid-cols-4 rounded-md">
                    <label class="radio">
                        <input type="radio" class="form-radio" name="GB" value="">
                        <span class="ml-1 font-bold">Mẫu 2</span>
                        <span class="block">2.000.000VND</span>
                    </label>
                    <label class="radio">
                        <input type="radio" class="form-radio" name="GB" value="">
                        <span class="ml-1 font-bold">Mẫu 3</span>
                        <span class="block">2.000.000VND</span>
                    </label>
                    <label class="radio">
                        <input type="radio" class="form-radio" name="GB" value="">
                        <span class="ml-1 font-bold">Mẫu 4</span>
                        <span class="block">2.000.000VND</span>
                    </label>
                    <label class="radio">
                        <input type="radio" class="form-radio" name="GB" value="">
                        <span class="ml-1 font-bold">Mẫu 5</span>
                        <span class="block">2.000.000VND</span>
                    </label>
                </div>
                <div class="box-Promo">
                    <div class="endow py-[20px]">
                        <span class="bg-[#e9ecef] px-3 font-bold">Ưu đãi thêm</span>
                    </div>
                    <ul class="content-promo">
                        <li class="inline-flex">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <div>
                                <span>
                                    Tặng cài tóc bạc giá trị 500.000VND
                                </span>
                                <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                            </div>
                        </li>
                        <li class="inline-flex">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <div>
                                <span>
                                    Giảm sốc 20% cho gói bảo hành trang phục
                                </span>
                                <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                            </div>
                        </li>
                        <li class="inline-flex">
                            <i class="fas fa-check-circle text-green-500 mt-1 mr-2"></i>
                            <div>
                                <span>
                                    Cho thuê hán phục theo giờ
                                </span>
                                <a href="" class="text-blue-600 hover:underline">Xem chi tiết</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="btn-buy ">
                    <button class="w-full bg-red-700 mt-4 rounded-md text-white hover:bg-red-800">
                        <div>
                            <strong>MUA NGAY</strong>
                        </div>
                        <p class="text-sm">Giao hàng miễn phí hoặc nhận tại shop</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="">
        <h1 class="uppercase text-[16px] font-bold border-b-[1px] mt-2 pl-1"> Thông tin chi tiết sản phẩm </h1>

        <p class="text-[14px] leading-[1.8] mb-3">${data.post}
        </p>
    </div>

    <div class="conten my-[20px]">
        <h1 class="font-bold text-[20px] py-[20px]">NỔI BẬT</h1>
        <div class="product grid grid-cols-4 gap-5 ">
            <form action="">
                <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                    <div class=" w-[100%] ">
                        <a href="#"> <img src="https://cf.shopee.vn/file/7448bbebb8f781cd027bb72fd02f7012" alt=""></a>
                    </div>
                    <div class="py-[10px] px-[10px] leading-8">
                        <a href="#">
                            <h4 class="font-bold hover:underline">Hán phục</h4>
                        </a>
                        <p class="text-[15px] text-[red]">2.000.000VND</p>
                        <p>130,000,000 lượt xem</p>
                    </div>
                    <div class="conten-item text-center ">
                        <button class="inline-flex items-center px-4 py-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ</button>
                    </div>
                </div>
            </form>
            <form action="">
                <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                    <div class=" w-[100%] ">
                        <a href="#"> <img src="https://cf.shopee.vn/file/7448bbebb8f781cd027bb72fd02f7012" alt=""></a>
                    </div>
                    <div class="py-[10px] px-[10px] leading-8">
                        <a href="#">
                            <h4 class="font-bold hover:underline">Hán phục</h4>
                        </a>
                        <p class="text-[15px] text-[red]">2.000.000VND</p>
                        <p>130,000,000 lượt xem</p>
                    </div>
                    <div class="conten-item text-center ">
                        <button class="inline-flex items-center px-4 py-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ</button>
                    </div>
                </div>
            </form>
            <form action="">
                <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                    <div class=" w-[100%] ">
                        <a href="#"> <img src="https://cf.shopee.vn/file/7448bbebb8f781cd027bb72fd02f7012" alt=""></a>
                    </div>
                    <div class="py-[10px] px-[10px] leading-8">
                        <a href="#">
                            <h4 class="font-bold hover:underline">Hán phục</h4>
                        </a>
                        <p class="text-[15px] text-[red]">2.000.000VND</p>
                    </div>
                    <div class="conten-item text-center ">
                        <button class="inline-flex items-center px-4 py-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ</button>
                    </div>
                </div>
            </form>
            <form action="">
                <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                    <div class=" w-[100%] ">
                        <a href="#"> <img src="https://cf.shopee.vn/file/7448bbebb8f781cd027bb72fd02f7012" alt=""></a>
                    </div>
                    <div class="py-[10px] px-[10px] leading-8">
                        <a href="#">
                            <h4 class="font-bold hover:underline">Hán phục</h4>
                        </a>
                        <p class="text-[15px] text-[red]">2.000.000VND</p>
                    </div>
                    <div class="conten-item text-center ">
                        <button class="inline-flex items-center px-4 py-[10px] border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</article>
<footer class="bg-[#f3f3f3] min-w-full m-auto w-[1200px]">
    ${footer.render()}
</footer>



`;
},
};
export default newlist;