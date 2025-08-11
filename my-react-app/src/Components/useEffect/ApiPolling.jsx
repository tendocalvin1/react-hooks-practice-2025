import React, { useState, useEffect } from 'react';

function API_Polling() {
  const [user, setUser] = useState(null); // Store single user object
  const [loading, setLoading] = useState(true); // Show spinner/loading
  const [error, setError] = useState(null); // Handle errors

  useEffect(() => {
    // Async function to fetch user data
    const fetchUser = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://randomuser.me/api');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUser(data.results[0]); // Store the first user from results array
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchUser();

    // Set up polling every 10 seconds
    const intervalId = setInterval(fetchUser, 10000);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty array: set up polling once on mount

  // UI conditions
  if (loading) return <p>Loading user...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Random User</h2>
      {user && (
        <div>
          <p>
            <strong>
              {user.name.title} {user.name.first} {user.name.last}
            </strong>
          </p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
}

export default API_Polling;