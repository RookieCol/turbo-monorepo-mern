import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="h-screen bg-gray-950 text-yellow-500 flex justify-center items-center" >
      <div className="bg-gray-950 p-4 w-2/5">
        <h1 className="text-3xl font-bold text-center block my-2">Task App</h1>
        <TaskForm />
      </div>
    </div>
  );
}

export default App;
