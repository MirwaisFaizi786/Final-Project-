export default function Login() {
  return (
    <div>
      <form>
        <div className="grid place-content-center h-screen">
          <input type="email" id="email" placeholder="Email"></input>
          <input type="password" id="password" placeholder="Password"></input>
        </div>
      </form>
    </div>
  );
}
