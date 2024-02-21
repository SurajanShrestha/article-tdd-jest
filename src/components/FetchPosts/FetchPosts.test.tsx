import { render, screen, waitFor } from "@testing-library/react";
import { FetchPosts } from ".";

test("should fetch posts", async () => {
  render(<FetchPosts />);

  // Note 💡: Debugs "FetchPosts". Prints out JSX inside FetchPosts.
  // screen.debug();

  // Check for loading text.
  const loadingText = screen.getByText(/loading/i);
  expect(loadingText).toBeTruthy();

  // Check for a string in the pile of data.
  // Note 💡: If condition is not met, "waitFor" will retry again at 50ms interval (by default).
  await waitFor(() => {
    // Problem 😢: This declaration 👇 fails ❌ because it runs immediately.
    // Solution 💡:We need to put it inside "expect()" to wait for it.
    // const testString = screen.getByText(/sunt aut/i);

    expect(screen.getByText(/sunt aut/i)).toBeTruthy();
  });
  /* 
  IMP NOTE 💡: In "LoginForm.test.tsx", we put "handleSubmit" inside "expect" as we're waiting for "handleSubmit" to resolve. 
  But here, as we have await in "useEffect", we're waiting for the entire "FetchPosts" component to resolve. So, we have "getByText" inside "expect".
  */
});
