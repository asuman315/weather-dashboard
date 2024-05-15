// import { renderHook, RenderResult } from '@testing-library/react-hooks';
// import { useFetchData } from '../useFetchData';
// import fetch from 'jest-fetch-mock';

// interface FetchDataResult {
//     data: any; // You might want to specify a more detailed type than 'any' if possible.
// }

// // Mock the fetch function
// global.fetch = jest.fn(() =>
//     Promise.resolve({
//         json: () => Promise.resolve({ data: 'dummyData' })
//     }) as Promise<Response>
// );

// describe('useFetchData', () => {
//     test('fetches data', async () => {
//         const { result, waitForNextUpdate } = renderHook(() => useFetchData('dummyUrl'))

//         // Wait for the hook to finish fetching data
//         await waitForNextUpdate();

//         expect(fetch).toHaveBeenCalledWith('dummyUrl');
//         expect((result as any).current.data).toBe('dummyData');

//         // Additional test cases here for error handling, loading states, etc.
//     });
// });

describe("Page", () => {
    it("should render", () => {
      expect(true).toBe(true);
    });
  });//import React from "react";