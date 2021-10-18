import ProductDetailsPage from "pages/ProductDetails/ProductDetailsPage";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home/Home"));
const AppRouter = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<div>Loading</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path='/productdetails/:id' component={ProductDetailsPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default AppRouter;
