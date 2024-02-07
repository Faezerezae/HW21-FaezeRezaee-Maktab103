
import { QueryClient, QueryClientProvider } from "react-query"
import { AppRoute } from "./router"
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppRoute />
  
      </QueryClientProvider>
    </>
  )
}

export default App
