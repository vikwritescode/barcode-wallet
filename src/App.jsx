import './App.css';
import CodeStore from './CodeStore.jsx';
function App() {
  
  return (
    <div className="h-screen dark:bg-gray-900 dark:text-white">
      <h1 className="text-6xl font-extrabold text-left font-sans py-10 md:text-center">Your Codes</h1>
      <CodeStore />
    </div>
  )
}
export default App
