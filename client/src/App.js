import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { StoreProvider } from "./utils/GlobalState";
import { setContext } from "@apollo/client/link/context";
import Nav from "./Pages/Nav";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import RegistrationSuccess from "./Components/RegistrationSuccess";
import CompanyDashboard from "./Components/CompanyDashboard";
import TenantDashboard from "./Components/TenantDashboard";
import Maintenance from "./Components/Maintenance";
import Contact from "./Pages/Contact";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const token = localStorage.getItem("id_token");

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex flex-col">
          <StoreProvider>
            <Nav />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path={`/owner-dashboard/${token}`}
                  element={<CompanyDashboard />}
                />
                <Route
                  path={`/tenant-dashboard/${token}`}
                  element={<TenantDashboard />}
                />
                <Route path="/success" element={<RegistrationSuccess />} />
                <Route
                  path={`/owner-dashboard/maintenance/${token}`}
                  element={<Maintenance />}
                />
              </Routes>
            </main>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
