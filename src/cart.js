const Cart = () => {
    return ( 
        <div className="cart-section">
            <div className="first-row">
                <div className="item-row1" data-category="کویر">
                    <img src="./images/img-8.jpg" alt=""/>
                    <p>یک ماجراجویی هیجان انگیز در طبیعت</p>

                 </div>
                 <div className="item-row1"  data-category="ابشار">
                    <img src="./images/img-9.jpg" alt=""/>
                    <p>ابشارهای دیدنی</p>

                 </div>
                
            </div>
            <div className="secont-row">
            <div className="item-row2" data-category="اقیانوس">
                    <img src="./images/img-3.jpg" alt=""/>
                    <p>یک ماجراجویی هیجان انگیز در طبیعت</p>

                 </div>
                 <div className="item-row2"  data-category="جزایر مالدیو">
                    <img src="./images/img-2.jpg" alt=""/>
                    <p>ابشارهای دیدنی</p>

                 </div>
                 <div className="item-row2"  data-category="کوهستان ">
                    <img src="./images/img-1.jpg" alt=""/>
                    <p>ابشارهای دیدنی</p>

                 </div>
                
            </div>

        </div>
     );
}
 
export default Cart;