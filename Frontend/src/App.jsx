import Input from "./components/input";

export default function App() {
  return (
    <div className="p-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <div className="rounded mx-auto max-w-[750px] min-h-[550px] shadow-2xl bg-white">
        <Input />
      </div>
    </div>
  );
}
