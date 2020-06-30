import React from "react";
import "../css/ShoppingCart.css";
import RowCart from "./RowCart";
import OutsideClickHandler from "react-outside-click-handler";
import RemoveIcon from "@material-ui/icons/Remove";
import StorefrontIcon from "@material-ui/icons/Storefront";
import { Button, Grid, Typography } from "@material-ui/core";

export default function ShoppingCart(props) {
  let carts = [];
  carts.push(props.product);
  const ref = React.useRef();
  const showFull = () => {
    const wrapper = ref.current;
    // Empty Cart
    if (Object.keys(props.product).length === 0) {
      return;
    }
    wrapper.classList.toggle("fullShoppingCart");
    if (wrapper.className.search("mid ") > 0) {
      wrapper.classList.toggle("mid");
    }
  };
  const midScreen = () => {
    const wrapper = ref.current;
    wrapper.classList.toggle("mid");
  };
  if (props.cartShowStatus === "mid") {
    midScreen();
  }

  return (
    <OutsideClickHandler
      onOutsideClick={() => {
        const wrapper = ref.current;
        const className = wrapper.className;
        if (
          className.includes("mid") ||
          className.includes("fullShoppingCart")
        ) {
          wrapper.classList = ["root"];
        }
      }}
    >
      <div
        onClick={() => {
          showFull();
        }}
        ref={ref}
        className="root"
      >
        <div style={{ textAlign: "center" }}>
          <div>
            <RemoveIcon style={{ color: "#B0AFB7" }} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "16px",
            }}
          >
            <span>
              <StorefrontIcon fontSize={"small"} style={{ color: "#B0AFB7" }} />
            </span>
            <span style={{ marginRight: "4px", color: "#B0AFB7" }}>
              Shopping Cart
            </span>
          </div>
        </div>
        <Grid container>
          <Grid item sm={2} md={3} lg={3} />
          <Grid item xs={12} sm={8} md={6} lg={6}>
            {carts.map((item, i) => (
              <div key={i} style={{ marginTop: "4px" }}>
                <RowCart cart={item} />
              </div>
            ))}
          </Grid>
          <Grid item sm={2} md={3} lg={3} />
        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ height: "40px" }} />
          <Grid container>
            <Grid item xs={1} sm={3} md={4} lg={4} />
            <Grid item xs={10} sm={6} md={4} lg={4}>
              <Typography
                variant="subtitle2"
                style={{
                  color: "#6F7176",
                  marginBottom: "6px",
                }}
              >
                Tips for waiters
              </Typography>
              <Grid
                container
                style={{
                  marginBottom: "30px",
                }}
              >
                <div
                  style={{
                    borderRadius: "16px 0 0 16px",
                    background: "#FAB901",
                    color: "#664200",
                    padding: "10px",
                    margin: "1px",
                    flexGrow: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography>ZERO</Typography>
                </div>
                <div
                  style={{
                    background: "#FAB901",
                    color: "#664200",
                    padding: "10px",
                    margin: "1px",
                    flexGrow: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography>ROUND UP</Typography>
                </div>
                <div
                  style={{
                    background: "#FAB901",
                    color: "#664200",
                    padding: "10px",
                    margin: "1px",
                    flexGrow: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography>10%</Typography>
                </div>
                <div
                  style={{
                    borderRadius: "0 16px 16px 0",
                    background: "#FAB901",
                    color: "#664200",
                    padding: "10px",
                    margin: "1px",
                    flexGrow: 1,
                    textAlign: "center",
                  }}
                >
                  <Typography>CUSTOM</Typography>
                </div>
              </Grid>
              <Grid
                container
                style={{
                  marginBottom: "22px",
                }}
              >
                <Grid item xs={2}>
                  <Grid container direction="column">
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "#6F7176",
                      }}
                    >
                      Subtotal
                    </Typography>
                  </Grid>
                  <Grid container direction="column">
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "#6F7176",
                      }}
                    >
                      Tips
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={8} />
                <Grid item xs={2}>
                  <Grid container direction="column">
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "#6F7176",
                      }}
                    >
                      € 19.2
                    </Typography>
                  </Grid>
                  <Grid container direction="column">
                    <Typography
                      variant="subtitle2"
                      style={{
                        color: "#6F7176",
                      }}
                    >
                      € 2
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                container
                style={{
                  marginBottom: "20px",
                }}
              >
                <Grid item xs={2}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      color: "#FFF",
                    }}
                  >
                    Total
                  </Typography>
                </Grid>
                <Grid item xs={8} />
                <Grid item xs={2}>
                  <Typography
                    variant="subtitle1"
                    style={{
                      color: "#FFF",
                    }}
                  >
                    € 21.2
                  </Typography>
                </Grid>
              </Grid>
              <Grid container>
                <Button
                  style={{
                    background: "#FAB901",
                    borderRadius: "16px",
                    width: "100%",
                    textTransform: "capitalize",
                    marginBottom: "30px",
                  }}
                >
                  Confirm Payment
                </Button>
              </Grid>
            </Grid>
            <Grid item xs={1} sm={3} md={4} lg={4} />
          </Grid>
        </div>
      </div>
    </OutsideClickHandler>
  );
}
