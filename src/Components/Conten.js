import { getAll } from "../api/posts";

const content = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
            <div class="flex">
                <div class="banner bg-[white] w-[1200px] scroll-mb-[10px]">
                    <img style="" id='anh' src='https://cotrangquan.com/wp-content/uploads/2019/07/banner-2.jpg' alt="" width='100%'><br>
                </div>
            </div>
            <div class="mx-[120px] grid grid-cols-3 gap-6 overflow-hidden relative  my-[20px]">
                <div class="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
                    <div>
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/delivery-van.svg" alt="" class="m-auto">
                    </div>
                    <div>
                        <h2 class="font-bold">Free shipping</h2>
                        <p class="text-xs">Orders over $200</p>
                    </div>

                </div>
                <div class="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
                    <div>
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/money-back.svg" alt="" class="m-auto">
                    </div>
                    <div>
                        <h2 class="font-bold">Money Returns</h2>
                        <p class="text-xs">30 Days money return</p>
                    </div>
                </div>
                <div class="grid grid-cols-2 border-solid border-2 border-[#ec5959] rounded-lg px-[30px] py-[10px]">
                    <div>
                        <img src="https://rafcart.rslahmed.com/assets/images/svg/service-hours.svg" alt="" class="m-auto">
                    </div>
                    <div>
                        <h2 class="font-bold">24/7 Support</h2>
                        <p class="text-xs">Customer support</p>
                    </div>
                </div>

            </div>
                <div>
                    <div class="banner2 my-[30px]">
                        <img src="http://bbcosplay.com/templates/main/images/bbcosplay_anhbia_hanphuc.jpg" alt="" width='100%'>
                    </div>
                </div>
            </div>
            <div class="conten my-[20px]">
                <h1 class="font-bold text-[20px] py-[20px]">SẢN PHẨM MỚI</h1>
                <div class="product grid grid-cols-4 gap-5 ">
                 ${data.map((post) => `
                    <form action="">
                        <div class=" khoiy border-solid border-2 border-[#f3f3f3] rounded-lg  ">
                            <div class=" w-[100%] ">
                                <a href="/products/${post.id}"> <img src="${post.image}" alt=""></a>
                            </div>
                            <div class="py-[10px] px-[10px] leading-8">
                                <a href="/products/${post.id}">
                                    <h4 class="font-bold hover:underline">${post.title}</h4>
                                </a>
                                <p class="text-[15px] text-[red]">${post.price}</p>
                            </div>
                            <div class="conten-item text-center">
                                <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[green] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm vào giỏ</button>
                            </div>
                        </div>
                    </form>

         `).join("")}
 
                </div>


            </div>
            
      
      
      `;
    },
};
export default content;