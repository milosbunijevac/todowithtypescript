import React from 'react';
import './App.css';

interface AppProps {
    color?: string;
}

interface AppState {
    counter: number;
}

class App extends React.Component<AppProps, AppState> {
    // We need to pass in AppState and define an interface for it if we use the constructor
    constructor(props: AppProps) {
        super(props);
        this.state = { counter: 0 };
    }

    onIncrement = (): void => {
        this.setState({ counter: this.state.counter + 1 });
    };
    onDecrement = (): void => {
        this.setState({ counter: this.state.counter - 1 });
    };

    render(): JSX.Element {
        return (
            <div>
                <button onClick={this.onIncrement}>Increment</button>
                <button onClick={this.onDecrement}>Decrement</button>
                {this.state.counter}
            </div>
        );
    }
}
export default App;
