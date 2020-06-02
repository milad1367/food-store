import React from 'react';
import '../css/ShoppingCart.css';
import OutsideClickHandler from 'react-outside-click-handler';
import RemoveIcon from '@material-ui/icons/Remove';
import StorefrontIcon from '@material-ui/icons/Storefront';
export default function ShoppingCart(props) {

  const ref = React.useRef();
  console.log(props.cartShowStatus)
  const showFull = ()=> {
      const wrapper = ref.current;  
      wrapper.classList.toggle('fullShoppingCart');    
     if(wrapper.className.search('mid ') > 0) {
       wrapper.classList.toggle('mid');
     }
  }
  const midScreen = ()=> {
    const wrapper = ref.current;
    wrapper.classList.toggle('mid');
  }
  if(props.cartShowStatus === 'mid') {
    console.log(props.cartShowStatus)
    midScreen();
  }
  
  return (
    <OutsideClickHandler onOutsideClick={() => {
      console.log(ref)
      const wrapper = ref.current;
      const className = wrapper.className;
      console.log(className);
      if(className.includes("mid") || className.includes("fullShoppingCart")) {
        wrapper.classList = ['root'];
       // wrapper.classList.toggle('mid');

      }
    }}>
    <div onClick={ ()=> { showFull()}} ref={ref} className="root">
      <div style={{textAlign:"center"}}>
        <div>
        <RemoveIcon />
        </div>
        <div>
          <span><StorefrontIcon fontSize={"small"} /></span>
          <span>shopping Cart</span>
        </div>
      </div>
      <p>{props.product.tagline}</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      <p>I am shopping cart</p>
      
    </div>
    </OutsideClickHandler>
  );
}


// const useStyles = makeStyles((theme) => ({
//     root: {

//     } 
//   }));




  // const handleUserKeyPress = React.useCallback(event => {
  //   const { key, keyCode } = event;
  //   console.log(keyCode)

  // }, []);
  // const handleClickOutside = (event) => {
  //   console.log(event.target)
  //   if (ref && !ref.contains(event.target)) {
  //     alert('You clicked outside of me!');
  //   }
  // }

  // React.useEffect(() => {
  //   window.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     window.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, [handleClickOutside]);