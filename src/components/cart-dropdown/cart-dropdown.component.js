import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss'
import React from 'react'

const CartDropdown = () => {
    return(
        <div className="cart-dropdown">
            <div className="cart-items">
                <CustomButton>GO TO CHECKOUT</CustomButton>
            </div>
        </div>
    )
}

export default CartDropdown;