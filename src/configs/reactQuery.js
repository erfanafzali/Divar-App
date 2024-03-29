const defaultOptions = {
  queries: {
    gcTime: 60 * 1000,
    catchTime: 0,
    retry: 1,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: true,
  },
};

export default defaultOptions;

// gcTime => staleTime V4 => dont fetch refresh data use past data in use
// catchTime => save Data
// gcTime: 60 * 1000 => 1 minute
// retry: try to fetch data default 3 Time
