import React, {useState} from 'react';

const ShoppingcartFunctional = () => {
    var cart_obj = [];
    const [cartstate, updateCart] = useState(cart_obj);

    
    var product_obj = [];
    product_obj['prod1'] = {name: 'Macbook Air 2015', price: '10.05', img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201803/main-image-macbook-air_1824_103116022054_1.jpeg?ApmoFWRGukQ_0TGgyeo6FgfKICyIP5Yu&size=770:433'};

    product_obj['prod2'] = {name: 'Macbook Air 2017', price: '20.85', img: 'https://static.digit.in/default/832357c407676bd230273c71fe2ded0a0dace903.png?tr=n-product_detail_leader_thumb'};

    product_obj['prod3'] = {name: 'Macbook Pro 2015', price: '30', img: 'https://static.digit.in/product/a8911b1c83f53c8c91273ad382548e200ac6592b.jpeg?tr=n-product_detail_leader_thumb'};

    const addtocart = (prod_id) => {
        var cart_new_obj = [];
        cart_new_obj = cartstate;
        
        if (cart_new_obj[prod_id]) {
            cart_new_obj[prod_id] = cart_new_obj[prod_id] + 1;
        } else {
            cart_new_obj[prod_id] = 1;
        }

        //cart_new_obj['prod1'] = 5;
        console.log(cart_new_obj, 'cart_new_obj');
        updateCart(cart_new_obj);
    };

    var productarray = []; 
    for (var id in product_obj) {
        var prod_info = product_obj[id];
        productarray.push(
            <ProducthtmlF prod_info={prod_info} addtocart1={addtocart} id={id}/>            
        );
    } 

    var carthtml = [];
    for (var id in cartstate) {
        console.log('trigger');
        carthtml.push(<Carthtml key={id} cartstate={cartstate} />);
    }

    return (
        <div>
            {carthtml}
            {productarray}
        </div>
    );
};

const Carthtml = (props) => {
    var carthtml = [];
    for (var id in props.cartstate) {
        carthtml.push(<div>{id}={props.cartstate[id]}</div>);
    }
   
    return(
        <div>{carthtml}</div>
    );
}

const ProducthtmlF = (props) => {
    return(
        <>
            <div>
                <div className="card" style={{float:'left', marginRight: '10px', padding: '10px',  textAlign: 'center', marginBottom: '10px'}}>
                    <img src={props.prod_info.img} width="200" height="125" /><br/>
                    {props.prod_info.name}<br/>
                    ${props.prod_info.price}<br/>
                    {props.id}
                    <input type="button" value="Add to cart" className="btn btn-primary btn-sm" onClick={(e) => {props.addtocart1(props.id)}}  />
                </div>
            </div>
        </>
    );
};

export default ShoppingcartFunctional;