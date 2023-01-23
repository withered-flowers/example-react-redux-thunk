import { RouterProvider } from "react-router-dom";
import router from "./routers";

import { Provider } from "react-redux";
import store from "./stores";

function App() {
  return (
    // Since we're using the react-router-dom and redux
    // We need to use RouterProvider (react-router-dom) and the routes
    // which wrapped inside the Provider (react-redux)

    // So we can use the redux inside the react-router-dom based apps
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
