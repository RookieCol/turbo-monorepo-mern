import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="h-screen bg-gray-950 text-yellow-500 flex justify-center items-center" >
      <div className="bg-gray-980 p-4 w-2/5 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center block my-2">Task App</h1>
        <div className="p-4 my-2">
          <TaskForm />
        </div>
        <div className="p-4 my-2">
          <TaskList/>
        </div>
      </div>
    </div>
  );
}

export default App;
