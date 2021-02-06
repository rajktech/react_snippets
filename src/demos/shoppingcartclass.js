import React from 'react';

class ShoppingcartClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_obj : [
                {id: 'prod_1', name: 'Macbook Air 2015', price: '10.05', img: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201803/main-image-macbook-air_1824_103116022054_1.jpeg?ApmoFWRGukQ_0TGgyeo6FgfKICyIP5Yu&size=770:433'},
                {id: 'prod_2', name: 'Macbook Air 2017', price: '20.85', img: 'https://static.digit.in/default/832357c407676bd230273c71fe2ded0a0dace903.png?tr=n-product_detail_leader_thumb'},
                {id: 'prod_3', name: 'Macbook Pro 2015', price: '30', img: 'https://static.digit.in/product/a8911b1c83f53c8c91273ad382548e200ac6592b.jpeg?tr=n-product_detail_leader_thumb'},
                {id: 'prod_4', name: 'Macbook Pro 2019', price: '40', img: 'https://static.digit.in/default/1136506d1a4e67822dbf51badf836de4db388cac.png?tr=n-product_detail_leader_thumb'}
            ],
            cart_obj : [],
            total_price: ''
        };
        this.addtocart = this.addtocart.bind(this);
        this.removeitem = this.removeitem.bind(this);
        this.increaseitem = this.increaseitem.bind(this);
    }

    addtocart(id) {
        var cart_obj = this.state.cart_obj;
        if (cart_obj[id]) {
            cart_obj[id] = cart_obj[id] + 1;
        } else {
            cart_obj[id] = 1;
        }
        this.setState({cart_obj: cart_obj});
    }

    removeitem(prod_id) {
        if (window.confirm('Are you sure you wish to delete this item?')) {
            var cart_obj = this.state.cart_obj;
            if (cart_obj[prod_id]) {
                delete cart_obj[prod_id];
                this.setState({cart_obj: cart_obj});
            }
        }        
    }

    increaseitem(act, prod_id) {
        var cart_obj = this.state.cart_obj;
        if (act == 'add') {
            if (cart_obj[prod_id]) {
                cart_obj[prod_id] = cart_obj[prod_id] + 1;
            } else {
                cart_obj[prod_id] = 1
            }
        } else {
            if (cart_obj[prod_id]) {
                cart_obj[prod_id] = cart_obj[prod_id] - 1;
                if (cart_obj[prod_id] == 0) {
                    delete cart_obj[prod_id];
                }
            }
        }
        this.setState({cart_obj: cart_obj});
    }

    render() {
        var producthtml = [];
        this.state.product_obj.map((item) => {
            producthtml.push(<ProductComp item={item} addtocart1={this.addtocart} key={item.id} />);
        });
        producthtml.push(<div style={{clear: 'both'}}></div>)

        return(
            <div>
                <CartComp product_obj={this.state.product_obj} cart_obj={this.state.cart_obj} removeitem={this.removeitem} increaseitem={this.increaseitem} />
                <h4>Store Products</h4>
                <div>{producthtml}</div>                
            </div>
        );
    }
}

class CartComp extends React.Component {
    render() {
        var prod_name = [];
        var total_price = 0;         
        
        this.props.product_obj.map((prod_item) => {
            if (this.props.cart_obj[prod_item.id] != undefined) {
                let price_each = (prod_item.price * this.props.cart_obj[prod_item.id]).toFixed(2);
                total_price = parseFloat(total_price) + parseFloat(price_each);
                total_price = total_price.toFixed(2);
                prod_name.push(
                <div key={prod_item.id}>
                    <div style={{width: '280px', float: 'left'}}>
                        <img src={prod_item.img} width="32" height="32" />{prod_item.name} X {this.props.cart_obj[prod_item.id]} = {price_each} 
                    </div>
                    <div style={{float: 'left', marginBottom:'5px'}}>
                        <input type="button" value="Remove" className="btn btn-primary btn-sm" onClick={() => this.props.removeitem(prod_item.id)} /> &nbsp; 
                        <input type="button" value="+" className="btn btn-primary btn-sm" onClick={() => this.props.increaseitem('add', prod_item.id)} />&nbsp; 
                        <input type="button" value="-" className="btn btn-primary btn-sm" onClick={() => this.props.increaseitem('sub', prod_item.id)} />
                    </div> 
                    <div style={{clear: 'both'}}></div>
                </div>);
            }                
        });
       
        return(
            <div className="card" style={{padding: '20px', marginBottom: '10px'}}>
               {Object.keys(this.props.cart_obj).length > 0 ?                 
                    <div>{prod_name}
                    <b>Total: ${total_price}</b></div>
                : <div>Cart is Empty</div>}                 
            </div>
        );
    }
}

class ProductComp extends React.Component {    
    render() {
        return(
            <>
                <div className="card" style={{float:'left', marginRight: '10px', padding: '10px',  textAlign: 'center', marginBottom: '10px'}}>
                    <img src={this.props.item.img} width="200"  height="125" /><br/>
                    {this.props.item.name}<br/>
                    ${this.props.item.price}<br/>
                    <input type="button" value="Add to cart" className="btn btn-primary btn-sm" onClick={() => this.props.addtocart1(this.props.item.id)} />
                </div>
            </>
        );
    }
}

export default ShoppingcartClass;