import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Container from "./components/Container";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Weather } from "./contexts/Weather";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 1000,
    },
  },
});

function App() {
  return (
    <div className="min-h-screen px-4 lg:px-0 max-w-6xl mx-auto pt-[1rem]  ">
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Weather>
          <Container />
        </Weather>
      </QueryClientProvider>
    </div>
  );
}

export default App;
