export default async function ProfilePage() {
  const res = await fetch("https://fakestoreapi.com/users/3", {
    cache: "no-store",
  });

  const user = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Page</h1>

      <div style={{ border: "1px solid #ddd", padding: "15px" }}>
        <h2>
          {user.name.firstname} {user.name.lastname}
        </h2>

        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>

        <h3>Address</h3>
        <p>
          {user.address.city}, {user.address.street}
        </p>

        <p>Phone: {user.phone}</p>
      </div>
    </div>
  );
}
