import React, { Suspense } from "react";
import useAuth from "./context/authContext";
import Layout from "./components/Layout";
import Loader from "./components/UI/Loader";
import { Switch, Route } from "react-router-dom";

const Login = React.lazy(() => import("./pages/login"));
const Home = React.lazy(() => import("./pages/home"));
const Meteo = React.lazy(() => import("./pages/meteo"));

function App() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="background">
        <Loader />
      </div>
    );
  }

  return (
    <div>
      <Suspense
        fallback={
          <div className="background">
            <Loader />
          </div>
        }
      >
        {!user && <Login />}
      </Suspense>
      {user && (
        <Layout>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/meteo">
                <Meteo />
              </Route>
            </Switch>
          </Suspense>
        </Layout>
      )}
    </div>
  );
}

export default App;
