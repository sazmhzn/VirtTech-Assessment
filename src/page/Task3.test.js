// import { render, screen, waitFor } from "@testing-library/react";
// import Task3 from "./Task3"; // Adjust the path as necessary
// import fetchMock from "jest-fetch-mock";

// beforeEach(() => {
//   fetchMock.resetMocks();
// });

// describe("Task3 Component", () => {
//   test("displays error message when fetch fails", async () => {
//     // Mock the fetch to reject with an error
//     fetchMock.mockReject(new Error("Failed to fetch data"));

//     // Render the component
//     render(<Task3 />);

//     // Check if the error message appears after the fetch fails
//     await waitFor(() => {
//       expect(screen.getByText(/Error Fetching the users/i)).toBeInTheDocument();
//     });

//     // Ensure that the loading text is no longer displayed
//     expect(screen.queryByText(/Loading.../i)).not.toBeInTheDocument();
//   });

//   test("displays loading initially", () => {
//     render(<Task3 />);
//     expect(screen.getByText(/loading.../i)).toBeInTheDocument();
//   });

//   test("renders users correctly when data is fetched successfully", async () => {
//     fetchMock.mockResponseOnce();

//     render(<Task3 />);

//     // Ensure loading is initially rendered
//     expect(screen.getByText(/loading.../i)).toBeInTheDocument();

//     // Wait for users to be rendered
//     await waitFor(() => {
//       expect(screen.getByText("Leanne Graham")).toBeInTheDocument();
//       expect(screen.getByText("Ervin Howell")).toBeInTheDocument();
//     });

//     // Ensure the loading message disappears
//     expect(screen.queryByText(/loading.../i)).not.toBeInTheDocument();
//   });
// });
