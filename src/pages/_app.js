import { Provider } from "react-redux";
import store from "@/store";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";
import "@/styles/globals.scss";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </QueryClientProvider>
    </Provider>
  );
}
