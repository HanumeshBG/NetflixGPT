import ReactDOM from "react-dom/client";

const App = () => {
    return (
        // <Provider store={appStore}>
        //     <Body />
        // </Provider>
        <h1 className="text-3xl font-bold underline">Welocome To REACT</h1>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)