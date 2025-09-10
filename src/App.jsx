import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Container from "./components/Container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <div className="min-h-screen max-w-6xl mx-auto pt-[2rem] ">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Container />
      </QueryClientProvider>
    </div>
  );
}

export default App;
