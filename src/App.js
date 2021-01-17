import PropTypes from "prop-types";
import React, { Suspense, lazy, useEffect } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect, useSelector } from "react-redux";
// eslint-disable-next-line
import firebase from "firebase"

const HomeFurnitureThree = lazy(() =>
  import("./pages/home/HomeFurnitureThree")
);

// shop pages
const Dine = lazy(() => import("./pages/shop/Dine"));
const Storage = lazy(() => import("./pages/shop/Storage"));
const Utensils = lazy(() => import("./pages/shop/Utensils"));
const Serve = lazy(() => import("./pages/shop/Serve"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));

// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const NotFound = lazy(() => import("./pages/other/NotFound"));
const Foryou = lazy(() => import("./pages/other/Foryou"));
const RetailerPList = lazy(() => import("./pages/other/RetailerPList"));


const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json")
        }
      })
    );
  }, [props]);

  const state = useSelector(state => state)

  return (
    <ToastProvider placement="bottom-left">
        <Router>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>

                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <HomeFurnitureThree /> : <RetailerPList />}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/dine"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <Dine /> : <RetailerPList />}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/storage"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <Storage /> : <RetailerPList />}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/serve"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <Serve /> : <RetailerPList />}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/utensils"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <Utensils /> : <RetailerPList />}
                />

                {/* Shop product pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  render={(routeProps) => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                />

                {/* Other pages */}
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <About /> : <RetailerPList />}
               />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <Contact /> : <RetailerPList />}

                />
                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <MyAccount /> : <RetailerPList />}

                />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <Cart /> : <RetailerPList />}

                />
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <Wishlist /> : <RetailerPList />}

                />
                <Route
                  path={process.env.PUBLIC_URL + "/checkout"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email !== "admin@rnn-ware.com") ? <Checkout /> : <RetailerPList />}

                />

                <Route
                  path={process.env.PUBLIC_URL + "/not-found"}
                  component={NotFound}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/foryou"}
                  component={Foryou}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/retailerProductList"}
                  render={() => (state?.userDetailsReducer?.userDetails?.email === "admin@rnn-ware.com") ? <RetailerPList /> : null}

                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(multilanguage(App));
