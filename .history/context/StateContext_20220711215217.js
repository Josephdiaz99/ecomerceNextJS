import React,{createContext,useContext,useState,useEffect} from 'react'
import { toast } from 'react-hot-toast'

const Context=createContext()



export const StateContext=({children})=>{

    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)

    let foundProduct;
    let index;


    const onAdd=(product,quantity)=>{
        const checkProductInCart=cartItems.find((item)=>item._id===product._id)

        setTotalPrice((prevTotalPrice)=>prevTotalPrice+product.price*quantity)
        setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+quantity)

        if(checkProductInCart){
            

            const updatedCartItems=cartItems.map((carProduct)=>{
                if(carProduct._id===product._id)return {
                    ...carProduct,
                    quantity:carProduct.quantity+quantity
                }
            })
            setCartItems(updatedCartItems)
        }else{
            product.quantity=quantity;
            
            setCartItems([...cartItems,{...product}]);


        }
        toast.success(`${qty} ${product.name} añadido al carrito `)

    }

    const toggleCartItemQuantity=(id,value)=>{
        foundProduct=cartItems.find((item)=>item._id===id);

        index=cartItems.findIndex((product)=>product._id===id);

        if(value==='inc'){
            let newCartItems=[...cartItems,{...foundProduct,quantity:foundProduct.quantity + 1 }]
            setCartItems(newCartItems);
            setTotalPrice((prevTotalPrice)=>prevTotalPrice+foundProduct.price);
            setTotalQuantities((prevTotalQuantities)=>prevTotalQuantities+1)
        }else if(value==='dec'){

        }
    }


    const incQty=()=>{
        setQty((prevQty)=>prevQty+1)
    }

    const decQty=()=>{
        setQty((prevQty)=>{
            if(prevQty-1<1) return 1;
            return prevQty-1;
        })
    }

   


return(
    <Context.Provider value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        setShowCart
    }} >
        {children}
    </Context.Provider>
)


}

export const useStateContext=()=>useContext(Context)










