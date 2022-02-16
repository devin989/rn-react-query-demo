import React from 'react';


import { QueryClient, QueryClientProvider } from 'react-query'


import Home from "./src/Home";

const queryClient = new QueryClient()

if (__DEV__) {
    import('react-query-native-devtools').then(({ addPlugin }) => {
        addPlugin({ queryClient });
    });
}
const App = () => {

  return (
     < QueryClientProvider client={queryClient}>
         <Home/>
     </QueryClientProvider>
    );
};

export default App;
